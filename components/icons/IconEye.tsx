import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function IconEye(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#000" />
      <Path
        d="M23.205 11.745A12.517 12.517 0 0012 3.75 12.518 12.518 0 00.795 11.745a.75.75 0 000 .51A12.517 12.517 0 0012 20.25a12.517 12.517 0 0011.205-7.995.75.75 0 000-.51zM12 16.875A4.875 4.875 0 1116.875 12 4.883 4.883 0 0112 16.875z"
        fill="#000"
      />
    </Svg>
  );
}
