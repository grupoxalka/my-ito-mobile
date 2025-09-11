import * as React from "react"
import BaseIcon from "./BaseIcon";
import { SvgProps } from "react-native-svg";

const svgPath = "M19.7 3h-15a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 004.7 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.7 3zm0 1.5v9.75h-2.69a1.487 1.487 0 00-1.06.44l-1.81 1.81h-3.88l-1.81-1.81a1.487 1.487 0 00-1.06-.44H4.7V4.5h15zm0 15h-15v-3.75h2.69l1.81 1.81c.28.283.662.441 1.06.44h3.88c.398.001.78-.157 1.06-.44l1.81-1.81h2.69v3.75z";
const clipPath = "url(#clip0_2971_64)";
const clipPathID = "clip0_2971_64";
const clipPathTransform = "translate(0.2)";
export default function IconMessages(props: SvgProps) {
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
