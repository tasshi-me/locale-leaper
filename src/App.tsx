import React, { Suspense, useState } from "react";
import { Reload } from "./components/Reload";
import Timezones from "./components/Timezones";
import Locales from "./components/Locales";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle } from "./components/GlobalStyle";

const App: React.FC = () => {
  const [reloadRequired, setReloadRequired] = useState<boolean>(false);

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
