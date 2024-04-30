import React, { Suspense, useState } from "react";
import { Reload } from "./components/Reload";
import Timezones from "./components/Timezones";
import Locales from "./components/Locales";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle } from "./components/GlobalStyle";
import { useSupportedPage } from "./utils/hooks.ts";
import { Unsupported } from "./components/Unsupported";

const App: React.FC = () => {
  const [reloadRequired, setReloadRequired] = useState<boolean>(false);

  const { supportedPage } = useSupportedPage();

  if (!supportedPage) {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Unsupported />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div>loading....</div>}>
          <Card>
            <Locales
              callback={() => {
                setReloadRequired(true);
              }}
            />
          </Card>
          <Card>
            <Timezones
              callback={() => {
                setReloadRequired(true);
              }}
            />
          </Card>
          <Card>
            <Reload
              visible={reloadRequired}
              callback={() => setReloadRequired(false)}
            />
          </Card>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
