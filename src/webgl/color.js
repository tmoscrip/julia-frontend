//
// color SPACE FUNCTIONS
//
const hsv2rgb = `
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
}
`

//
// JULIA ITERATIONS HSV COLORING FUNCTIONS
//
const huefn = `
float huefn(float iterations) {
  float max_iter = float(maxIterations);
  return .1 + .3*(iterations / max_iter);
}
`

const satfn = `
float satfn(float iterations) {
  float max_iter = float(maxIterations);
  return .5 + .5*(iterations / max_iter);
}
`

const valfn = `
float valfn(float iterations) {
  float max_iter = float(maxIterations);
  return .5 + 2.*(iterations / max_iter);
}
`

export const color = `
${hsv2rgb}
${huefn}
${satfn}
${valfn}
`
