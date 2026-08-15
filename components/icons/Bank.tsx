import * as React from "react";
import type { SVGProps } from "react";
const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#1677FF"
      d="M3 16V9h2v7zm6 0V9h2v7zm-9 4v-2h20v2zm15-4V9h2v7zM0 7V5l10-5 10 5v2zm4.45-2h11.1zm0 0h11.1L10 2.25z"
    />
  </svg>
);
export default SvgBank;
