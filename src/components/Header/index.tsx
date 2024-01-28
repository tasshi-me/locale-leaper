import React from "react";
import styled from "styled-components";
import {Logo} from "./Logo.tsx";

type Props = {
  className?: string
}

const Component: React.FC<Props> = ({className})=> {
  return (<header className={className}>
    <a href="https://react.dev" target="_blank">
      <Logo/>
    </a>
    <h1>LocaleLeaper</h1>
    <p className="read-the-docs">
      Click to change the locale 🌏
    </p>
  </header>)
}

const StyledComponent = styled(Component)`
    width: 100%;
    padding: 0.3em;
    height: 3em;
    display: flex;
    flex-direction: row;
    place-items: center stretch;
    border-bottom: 3px solid black;

    h1 {
        font-size: 1.6em;
        //padding-left: 0.2em;
        padding-right: 0.2em;
    }
    
    p {
        color: #888;
        padding-left: 1em;
    }
`

export const Header = StyledComponent as typeof Component
