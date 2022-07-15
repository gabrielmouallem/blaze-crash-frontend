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
      setCrashes(prevState => [data, ...prevState]);
    });
  }, []);

  return {
    getCrashes,
    crashes,
  };
}
