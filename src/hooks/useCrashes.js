import { useState } from "react";
import api from "../axios/axios";

export default function useCrashes() {

  const [crashes, setCrashes] = useState([]);

  const getCrashes = () => {
    api.get("/crash").then(res => {
      setCrashes(res.data);
    })
  }

  return {
    getCrashes,
    crashes
  }
}