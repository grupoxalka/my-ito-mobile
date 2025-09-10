import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M20.794 16.494c-.52-.896-1.294-3.432-1.294-6.744a7.5 7.5 0 00-15 0c0 3.313-.774 5.848-1.295 6.744A1.5 1.5 0 004.5 18.75h3.826a3.75 3.75 0 007.348 0H19.5a1.5 1.5 0 001.294-2.256zM12 20.25a2.25 2.25 0 01-2.12-1.5h4.24a2.25 2.25 0 01-2.12 1.5zm-7.5-3c.722-1.241 1.5-4.117 1.5-7.5a6 6 0 1112 0c0 3.38.776 6.256 1.5 7.5h-15z";
const clipPath = "url(#clip0_2970_209)";
const clipPathID = "clip0_2970_209";
export default function IconMessages(props: SvgProps) {
  return (
    <BaseIcon
      path={svgPath}
      clipPath={clipPath}
      clipPathID={clipPathID}
      {...props}
    />
  );
}
