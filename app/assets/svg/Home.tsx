import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={18} viewBox="0 0 16 18" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 7.588 8 1l7 6.588V17H1V7.588Z"
    />
  </Svg>
)
export default SvgComponent
