import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconUser(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2970_874)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.049 19.875c-1.428-2.468-3.628-4.238-6.196-5.078a6.75 6.75 0 10-6.906 0c-2.568.839-4.768 2.609-6.196 5.078a.75.75 0 101.299.75c1.766-3.052 4.888-4.875 8.35-4.875 3.462 0 6.584 1.823 8.35 4.875a.75.75 0 101.299-.75zM7.15 9a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2970_874">
          <Path fill="#fff" transform="translate(.4)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}


