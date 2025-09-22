import * as React from "react"
import Svg, { SvgProps } from "react-native-svg"
import BaseIcon from "./BaseIcon"

const clipPath = "url(#clip0_2970_143)";
const path = "M13.125 16.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 6.75c-2.068 0-3.75 1.514-3.75 3.375v.375a.75.75 0 001.5 0v-.375c0-1.031 1.01-1.875 2.25-1.875s2.25.844 2.25 1.875C14.25 11.156 13.24 12 12 12a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.068c1.71-.314 3-1.678 3-3.307 0-1.86-1.682-3.375-3.75-3.375zM21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25c5.382.006 9.744 4.368 9.75 9.75zm-1.5 0A8.25 8.25 0 1012 20.25 8.26 8.26 0 0020.25 12z";
const clipPathID = "clip0_2970_143";
export default function IconQuestion(props: SvgProps) {
    return (
        <BaseIcon
            path={path}
            clipPath={clipPath}
            clipPathID={clipPathID}
            {...props}
        />
    )
}
