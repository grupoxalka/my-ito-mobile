import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M21.6 10.833V19.5a1.5 1.5 0 01-1.5 1.5h-3.75a1.5 1.5 0 01-1.5-1.5v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75a1.5 1.5 0 01-1.5 1.5H5.1a1.5 1.5 0 01-1.5-1.5v-8.667c0-.42.176-.82.485-1.105l7.5-7.076.01-.01a1.5 1.5 0 012.029.01l7.5 7.076a1.5 1.5 0 01.476 1.105z";
const clipPath = "url(#clip0_2970_300)";
const clipPathID = "clip0_2970_300";
const clipPathTransform = "translate(0.6)";
export default function IconHomeFilled(props: SvgProps) {
  return (
    <BaseIcon
      path={svgPath}
      clipPath={clipPath}
      clipPathID={clipPathID}
      clipPathTransform={clipPathTransform}
      {...props}
    />
  );
}
