import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function IconCalendar(props: SvgProps) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2970_260)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5 3h-2.25v-.75a.75.75 0 00-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM6.75 4.5v.75a.75.75 0 001.5 0V4.5h7.5v.75a.75.75 0 001.5 0V4.5h2.25v3h-15v-3h2.25zm12.75 15h-15V9h15v10.5zm-9-8.25v6a.75.75 0 01-1.5 0v-4.787l-.414.208a.75.75 0 01-.672-1.342l1.5-.75a.75.75 0 011.086.671zm5.546 2.855L14.25 16.5h1.5a.75.75 0 010 1.5h-3a.75.75 0 01-.6-1.2l2.698-3.597a.75.75 0 10-1.248-.828.75.75 0 11-1.298-.75 2.25 2.25 0 113.744 2.48z"
                    fill="currentColor"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2970_260">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}