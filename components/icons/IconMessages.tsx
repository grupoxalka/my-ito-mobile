import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconMessages(props : SvgProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2971_64)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7 3h-15a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 004.7 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.7 3zm0 1.5v9.75h-2.69a1.487 1.487 0 00-1.06.44l-1.81 1.81h-3.88l-1.81-1.81a1.487 1.487 0 00-1.06-.44H4.7V4.5h15zm0 15h-15v-3.75h2.69l1.81 1.81c.28.283.662.441 1.06.44h3.88c.398.001.78-.157 1.06-.44l1.81-1.81h2.69v3.75z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2971_64">
          <Path fill="#fff" transform="translate(.2)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}


