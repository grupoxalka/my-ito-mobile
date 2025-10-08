import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function IconTrash(props: SvgProps) {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
      <Path
        d="M17 4a1 1 0 01.117 1.993L17 6h-.081L16 17a3 3 0 01-2.824 2.995L13 20H5c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L1.08 6H1a1 1 0 01-.117-1.993L1 4h16zm-6-4a2 2 0 012 2 1 1 0 01-1.993.117L11 2H7l-.007.117A1 1 0 015 2 2 2 0 016.85.005L7 0h4z"
        fill="#000"
      />
    </Svg>
  );
}
