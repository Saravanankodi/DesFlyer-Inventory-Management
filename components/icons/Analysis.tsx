import * as React from "react";
import type { SVGProps } from "react";
interface AnalysisProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

const SvgAnalysis = ({ active = false, ...props }: AnalysisProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill={active ? "#1677FF" : "#000000"}
      d="M4 14h2V9H4zm8 0h2V4h-2zm-4 0h2v-3H8zm0-5h2V7H8zm-6 9q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 16V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h14q.824 0 1.413.588Q18 1.175 18 2v14q0 .824-.587 1.413A1.93 1.93 0 0 1 16 18zm0-2h14V2H2zM2 2v14z"
    />
  </svg>
);
export default SvgAnalysis;
