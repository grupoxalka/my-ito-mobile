import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M21 12a.75.75 0 01-.75.75h-7.5v7.5a.75.75 0 01-1.5 0v-7.5h-7.5a.75.75 0 010-1.5h7.5v-7.5a.75.75 0 011.5 0v7.5h7.5A.75.75 0 0121 12z";
const clipPath = "url(#clip0_2970_809)";
const clipPathID = "clip0_2970_809";
export default function IconAdd(props: SvgProps) {
  return (
    <BaseIcon
      path={svgPath}
      clipPath={clipPath}
      clipPathID={clipPathID}
      {...props}
    />
  );
}
