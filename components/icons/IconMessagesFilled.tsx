import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M19.7 3h-15a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 004.7 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.7 3zm0 16.5h-15v-3.75h2.69l1.81 1.811c.28.282.662.44 1.06.439h3.88c.398.001.78-.157 1.06-.44l1.81-1.81h2.69v3.75z";
const clipPath = "url(#clip0_2970_867)";
const clipPathID = "clip0_2970_867";
const clipPathTransform = "translate(0.2)";
export default function IconMessagesFilled(props: SvgProps) {
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
