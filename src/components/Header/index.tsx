import React from "react";
import styled from "styled-components";
import { palette } from "../../designTokens/colors.ts";
import { AiOutlineGithub } from "react-icons/ai";
import { Logo } from "./Logo.tsx";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <h1>
        <span className="letter-colored">L</span>ocale
        <span className="letter-colored">L</span>eaper
      </h1>
      <p className="read-the-docs">for kintone</p>

      <div className="links">
        <a
          className="link-github"
          href="https://github.com/tasshi-me/locale-leaper#readme"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size="2em" />
        </a>
        {/* <AiOutlineSetting size="2em" />*/}
      </div>
    </header>
  );
};

const StyledComponent = styled(Component)`
  width: 100%;
  padding: 0.3em 1em;
  height: 3em;
  display: flex;
  flex-direction: row;
  place-items: center stretch;
  border-bottom: 2px solid ${palette.dark.eerieBlack};

  h1 {
    font-size: 1.6em;
    padding: 0 0.2em;
  }

  .letter-colored {
    color: ${palette.common.tiffanyBlue};
  }

  p {
    color: ${palette.common.taupeGray};
    padding: 0 0.2em;
  }

  .links {
    margin-left: auto;

    .link-github {
      color: ${palette.dark.translucent};

      @media (prefers-color-scheme: light) {
        color: ${palette.light.japaneseIndigo};
      }
    }
  }

  @media (prefers-color-scheme: light) {
    border-bottom: 1px solid ${palette.light.chineseSilver};
  }
`;

export const Header = StyledComponent as typeof Component;
