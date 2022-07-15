import { useState } from "react";
import api from "../axios/axios";
import { useEffectOnce } from '../hooks/useEffectOnce'; 
import socket from '../socket/socket';

export default function useCrashes() {
  const [crashes, setCrashes] = useState([]);

  const getCrashes = () => {
    api.get("/crash").then((res) => {
      setCrashes(res.data);
    });
  };

  useEffectOnce(() => {
    getCrashes();
    socket.on("crash", (data) => {
      const props = {
        motion: {
          initial: {width: 0, scale: 0},
          animate: {width: "205px", scale: 1}
        }
      };
      setCrashes(prevState => {
        const newCrash = {...data, ...props};
        const previousCrash = {...prevState?.[0]};
        delete previousCrash.motion;
        const result = prevState.slice(1);
        return [newCrash, previousCrash, ...result];
      });
    });
  }, []);

  return {
    getCrashes,
    crashes,
  };
}
