import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconMessagesFilled(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2970_867)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7 3h-15a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 004.7 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.7 3zm0 16.5h-15v-3.75h2.69l1.81 1.811c.28.282.662.44 1.06.439h3.88c.398.001.78-.157 1.06-.44l1.81-1.81h2.69v3.75z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2970_867">
          <Path fill="#fff" transform="translate(.2)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

