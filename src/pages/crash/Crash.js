import React, { useMemo }  from "react";
import Loader from "../../components/Loader/Loader";
import useCrashes from "../../hooks/useCrashes";
import Card from "./components/Card/Card";
import Page from "./Crash.styles";

export default function CrashPage() {
  const { crashes } = useCrashes();

  const memoizedCrashes = useMemo(() => {
    if (!crashes) return [];
    return crashes?.slice(0, 1000);
  }, [crashes])

  return (
    <Page.Container>
      <h1>Blaze Crash</h1>
      <Page.Flex>
        {!memoizedCrashes?.length && (<Loader />)}
        {memoizedCrashes?.map((el, index) => (
          <Card key={`${index}_Card`} data={el} id={crashes?.length - index} />
        ))}
      </Page.Flex>
    </Page.Container>
  );
}
