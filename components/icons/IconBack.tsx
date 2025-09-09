import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconBack(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2970_970)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12a.75.75 0 01-.75.75H5.56l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47h14.69A.75.75 0 0121 12z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2970_970">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}


