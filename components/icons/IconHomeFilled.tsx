import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconHomeFilled(props : SvgProps) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2970_300)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.6 10.833V19.5a1.5 1.5 0 01-1.5 1.5h-3.75a1.5 1.5 0 01-1.5-1.5v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75a1.5 1.5 0 01-1.5 1.5H5.1a1.5 1.5 0 01-1.5-1.5v-8.667c0-.42.176-.82.485-1.105l7.5-7.076.01-.01a1.5 1.5 0 012.029.01l7.5 7.076a1.5 1.5 0 01.476 1.105z"
                    fill="currentColor"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2970_300">
                    <Path fill="#fff" transform="translate(.6)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}