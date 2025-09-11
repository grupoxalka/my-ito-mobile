import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M21 12a.75.75 0 01-.75.75H5.56l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47h14.69A.75.75 0 0121 12z";
const clipPath = "url(#clip0_2970_970)";
const clipPathID = "clip0_2970_970";
export default function IconBack(props: SvgProps) {
  return (
    <BaseIcon
      path={svgPath}
      clipPath={clipPath}
      clipPathID={clipPathID}
      {...props}
    />
  );
}
