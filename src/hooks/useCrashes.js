import { useState } from "react";
import api from "../axios/axios";
import { useEffectOnce } from "../hooks/useEffectOnce";
import socket from "../socket/socket";

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
          initial: { scale: 0 },
          animate: { scale: 1 },
        },
      };
      setCrashes((prevState) => {
        const newCrash = { ...data, ...props };
        const previousCrash = { ...prevState?.[0] };
        delete previousCrash.motion;
        const result = prevState.slice(1);
        return [newCrash, previousCrash, ...result];
      });
    });
  }, []);

  return {
    getCrashes,
    crashes,
    length: crashes?.length,
    stats: {
      high: crashes?.filter(el => el.value >= 2)?.length,
      gray: crashes?.filter(el => el.value < 2 && el.value >= 1.1)?.length,
      medium: crashes?.filter(el => el.value < 2)?.length,
      low: crashes?.filter(el => el.value < 1.1)?.length,
    },
    startDate: new Date(crashes?.[0]?.date).toLocaleDateString()
  };
}
