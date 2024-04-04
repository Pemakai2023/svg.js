import * as svg from './src/main.js'
import { SVG } from './src/main.js'

for(var k in svg ) {
  if(k !== "SVG") {
    SVG[k] = svg[k]
  }
}

export default SVG
