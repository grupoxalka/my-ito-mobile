import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps, NumberProp } from "react-native-svg"

interface BaseIconProps extends SvgProps {
    width?: NumberProp ;
    height?: NumberProp ;
    rectPath?: string;
    path: string;
    clipPath: string;
    clipPathID: string;
    clipPathTransform?: string;
}
export default function BaseIcon({
    width = 24,
    height = 24,
    rectPath = "M0 0H24V24H0z",
    clipPathTransform,
    path,
    clipPath,
    clipPathID,
    ...props
}: BaseIconProps) {
    
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath={clipPath}>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={path}
                    fill="currentColor"
                />
            </G>
            <Defs>
                <ClipPath id={clipPathID}>
                    <Path fill="#fff" d={rectPath} transform={clipPathTransform} />
                </ClipPath>
            </Defs>
        </Svg>
    )
}