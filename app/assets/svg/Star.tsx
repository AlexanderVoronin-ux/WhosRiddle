import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg width={18} height={17} viewBox="0 0 18 17" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 13.444-5.333 2.667L5 10.778 1 6.333l5.778-.444L9 1l2.222 4.889L17 6.333l-4 4.445 1.333 5.333L9 13.444Z"
    />
  </Svg>
)
export default SvgComponent
