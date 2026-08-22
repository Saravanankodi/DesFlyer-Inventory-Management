import * as React from "react";
import type { SVGProps } from "react";
const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="currentColor"
    {...props}
  >
    <path
      d="M2 16h3v-6h6v6h3V7L8 2.5 2 7zm-2 2V6l8-6 8 6v12H9v-6H7v6z"
    />
  </svg>
);
export default Home;
