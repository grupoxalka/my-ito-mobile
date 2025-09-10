import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M20.25 3.75h-7.5v-1.5a.75.75 0 00-1.5 0v1.5h-7.5a1.5 1.5 0 00-1.5 1.5V16.5a1.5 1.5 0 001.5 1.5h3.69l-2.026 2.531a.75.75 0 001.172.938L9.36 18h5.28l2.774 3.469a.75.75 0 101.172-.938L16.56 18h3.69a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 12.75H3.75V5.25h16.5V16.5zm-10.5-5.25v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 011.5 0zm3-1.5v3.75a.75.75 0 01-1.5 0V9.75a.75.75 0 011.5 0zm3-1.5v5.25a.75.75 0 01-1.5 0V8.25a.75.75 0 011.5 0z";
const clipPath = "url(#clip0_2970_270)";
const clipPathID = "clip0_2970_270";
export default function IconFileFilled(props: SvgProps) {
  return (
    <BaseIcon
      path={svgPath}
      clipPath={clipPath}
      clipPathID={clipPathID}
      {...props}
    />
  );
}
