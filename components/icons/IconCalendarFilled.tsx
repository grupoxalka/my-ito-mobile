import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconCalendarFilled(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2970_639)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3 3h-2.25v-.75a.75.75 0 00-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H5.3a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 005.3 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.3 3zm-9 14.25a.75.75 0 01-1.5 0v-4.787l-.414.208a.75.75 0 01-.672-1.342l1.5-.75a.75.75 0 011.086.671v6zm5.25-.75a.75.75 0 010 1.5h-3a.75.75 0 01-.6-1.2l2.698-3.597a.75.75 0 10-1.248-.828.75.75 0 11-1.298-.75 2.25 2.25 0 113.744 2.48L15.05 16.5h1.5zM5.3 7.5v-3h2.25v.75a.75.75 0 101.5 0V4.5h7.5v.75a.75.75 0 001.5 0V4.5h2.25v3h-15z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2970_639">
          <Path fill="#fff" transform="translate(.8)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

