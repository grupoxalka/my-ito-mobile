import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M20.03 7.72l-5.25-5.25a.75.75 0 00-.53-.22h-9a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-12a.75.75 0 00-.22-.53zm-5.78.53V4.125l4.125 4.125H14.25z";
const clipPath = "url(#clip0_2970_779)";
const clipPathID = "clip0_2970_779";
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
