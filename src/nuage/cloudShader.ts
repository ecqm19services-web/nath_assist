// Shader des nuages : bruit fractal (fbm) déformé par les paramètres d'état.
export const SKY_FRAG = /* glsl */ `
precision mediump float;
uniform float uTime, uAltitude, uLuminosite, uTurbulence;
uniform vec3 uCol1, uCol2, uCol3;
varying vec2 vUv;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.1+uTurbulence; a*=0.5; }
  return v;
}
void main(){
  vec2 uv = vUv;
  float t = uTime * 0.03;
  float clouds = fbm(uv * 3.0 + vec2(t, t * 0.4));
  clouds = smoothstep(0.55 - uAltitude * 0.45, 0.95, clouds);
  vec3 sky = mix(uCol1, uCol2, uv.y);
  vec3 col = mix(sky, uCol3 * uLuminosite, clouds);
  gl_FragColor = vec4(col, 1.0);
}`;

export const SKY_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
