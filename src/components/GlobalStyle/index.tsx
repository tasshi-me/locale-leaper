import { createGlobalStyle } from "styled-components";
import { palette } from "../../designTokens/colors.ts";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        display: flex;
        place-items: start center;
        box-sizing: border-box;
        /* https://groups.google.com/a/chromium.org/g/chromium-extensions/c/3A8d3oiOV_E?pli=1 */
        min-width: 640px;
        min-height: 100vh;
        max-width: 800px;
        max-height: 600px;
    }

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: ${palette.dark.translucent};
        background-color: ${palette.dark.raisinBlack};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        width: 100%;
        /*height: 600px;*/
        overflow: hidden;
        margin: 0 auto;
        padding: 0.5rem 0;
        /*padding: 0;*/
        text-align: center;
    }

    a {
        font-weight: 500;
        color: ${palette.dark.veryLightBlue};
        text-decoration: inherit;
    }

    a:hover {
        color: ${palette.dark.ultramarineBlue};
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: ${palette.dark.eerieBlack};
        cursor: pointer;
        /*transition: border-color 0.25s, background-color 0.25s;*/
        width: 100%;
    }

    button:hover {
        border-color: ${palette.dark.veryLightBlue};
        background: ${palette.dark.veryLightBlue};
    }

    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: ${palette.light.japaneseIndigo};
            background-color: ${palette.light.white};
        }

        a:hover {
            color: ${palette.light.veryLightBlue};
        }

        button {
            background-color: ${palette.light.ghostWhite};
        }

        button:hover {
            border-color: ${palette.light.veryLightBlue};
            background: ${palette.light.veryLightBlue};
        }
    }
`;
