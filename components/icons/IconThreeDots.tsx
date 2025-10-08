import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function IconThreeDots(props: SvgProps) {
  return (
    <Svg width={4} height={14} viewBox="0 0 4 14" fill="none" {...props}>
      <Path
        d="M3.556 1.658a1.556 1.556 0 11-3.113 0 1.556 1.556 0 013.113 0zM2 8.556a1.556 1.556 0 100-3.112 1.556 1.556 0 000 3.112zM2 13.899a1.556 1.556 0 100-3.112 1.556 1.556 0 000 3.112z"
        fill="#000"
      />
    </Svg>
  );
}
