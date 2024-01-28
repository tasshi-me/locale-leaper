import React, {Suspense, useState} from 'react'
import {Reload} from "./components/Reload";
import Timezones from "./components/Timezones";
import Locales from "./components/Locales";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {Header} from "./components/Header";
import styled from "styled-components";
import {Card} from "./components/Card";
import {GlobalStyle} from "./components/GlobalStyle";

const Component: React.FC = ()=> {
  const [reloadRequired, setReloadRequired] = useState<boolean>(false)

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <ErrorBoundary>
      <Suspense fallback={<div>loading....</div>}>
        <Card>
      <Locales callback={()=> {
        setReloadRequired(true)
      }}></Locales></Card>
        <Card>
      <Timezones callback={()=>{
        setReloadRequired(true)
      }}></Timezones></Card>
        <Card><Reload visible={reloadRequired} callback={()=> setReloadRequired(false)}></Reload></Card>
      </Suspense>
      </ErrorBoundary>
    </>
  )
}

const App = styled(Component)`
    //width: 100%;
    //height: 600px;
    margin: 0 auto;
    /*padding: 2rem;*/
    padding: 0;
    text-align: center;
`

export default App
