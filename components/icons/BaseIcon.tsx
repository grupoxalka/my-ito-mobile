/**
 * BaseIcon component - Foundation for all SVG icons in the app
 * Provides consistent SVG icon structure with clipPath support
 * Used as the base component for all specific icon implementations
 */

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps, NumberProp } from "react-native-svg"

/**
 * Props interface for BaseIcon component
 * Extends SvgProps to inherit all standard SVG properties
 */
interface BaseIconProps extends SvgProps {
    width?: NumberProp ;         // Icon width (default: 24)
    height?: NumberProp ;        // Icon height (default: 24)
    rectPath?: string;           // ClipPath rectangle definition
    path: string;                // Main SVG path data for the icon shape
    clipPath: string;            // Reference to clipPath ID
    clipPathID: string;          // Unique ID for the clipPath element
    clipPathTransform?: string;  // Optional transform for clipPath
}

/**
 * BaseIcon component
 * Renders an SVG icon with consistent structure and clipping support
 * All specific icons extend this component with their own path data
 * @param width - Icon width in pixels (default: 24)
 * @param height - Icon height in pixels (default: 24)
 * @param rectPath - SVG path for clipping rectangle (default: standard 24x24 rect)
 * @param clipPathTransform - Optional transformation for clip path
 * @param path - SVG path data defining the icon shape
 * @param clipPath - Reference to clipPath element
 * @param clipPathID - Unique identifier for clipPath
 * @param props - Additional SVG properties (color, style, etc.)
 * @returns SVG icon component with clipPath support
 */
export default function BaseIcon({
    width = 24,
    height = 24,
    rectPath = "M0 0H24V24H0z",  // Standard 24x24 rectangle
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
            viewBox="0 0 24 24"        // Standard 24x24 viewBox for all icons
            fill="none"               // Fill controlled by currentColor
            {...props}
        >
            {/* Main icon content with clipping applied */}
            <G clipPath={clipPath}>
                <Path
                    fillRule="evenodd"    // Standard fill rule for complex paths
                    clipRule="evenodd"    // Standard clipping rule
                    d={path}              // The actual icon path data
                    fill="currentColor"   // Use current text color for icon fill
                />
            </G>
            
            {/* ClipPath definition for icon boundaries */}
            <Defs>
                <ClipPath id={clipPathID}>
                    <Path fill="#fff" d={rectPath} transform={clipPathTransform} />
                </ClipPath>
            </Defs>
        </Svg>
    )
}