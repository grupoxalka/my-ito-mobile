import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconAdd (props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2970_809)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12a.75.75 0 01-.75.75h-7.5v7.5a.75.75 0 01-1.5 0v-7.5h-7.5a.75.75 0 010-1.5h7.5v-7.5a.75.75 0 011.5 0v7.5h7.5A.75.75 0 0121 12z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2970_809">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
