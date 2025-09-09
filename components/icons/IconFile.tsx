import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconFile(props: SvgProps) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2970_250)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.03 7.72l-5.25-5.25a.75.75 0 00-.53-.22h-9a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-12a.75.75 0 00-.22-.53zM15 4.81l2.69 2.69H15V4.81zm3.75 15.44H5.25V3.75h8.25v4.5c0 .414.336.75.75.75h4.5v11.25z"
                    fill="currentColor"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2970_250">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}