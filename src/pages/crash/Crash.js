import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes, getCrashes } = useCrashes();

  useEffect(()=> {
    const id = setInterval(() => {
      getCrashes();
    }, 5000);

    return () => {
      clearInterval(id);
    }
  }, [getCrashes]);

  return (
    <Page.Container>
      <h1>Blaze Crash</h1>
      <Page.Flex>
        {!crashes?.length && (<Loader />)}
        {crashes.map((el) => (
          <Card data={el} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
