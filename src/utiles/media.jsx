import { css } from "styled-components";
import { browserSize } from "./browserSize";

export const media = Object.keys(browserSize).reduce((acc, label) => {
    acc[label] = (...args) => `
      @media only screen and (max-width: ${browserSize[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
}, {})
