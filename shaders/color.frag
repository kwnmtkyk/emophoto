#version 300 es
precision highp float;
in vec2 uv;out vec4 fragColor;
uniform sampler2D uImage;uniform sampler3D uLut;
uniform int uUseLut;uniform vec4 uTone;uniform vec3 uColor;uniform vec4 uBasic; // exposure, contrast, saturation, temperature
uniform vec4 uExtra; // tint, highlights, shadows, strength
uniform vec4 uFx; // grain, fade, halation, vignette
uniform float uGrainSize;uniform float uMono;uniform vec2 uResolution;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
vec3 grade(vec3 c){
 c*=exp2(uBasic.x);
 c=clamp(c,0.,1.);
 float l=dot(c,vec3(.2126,.7152,.0722));
 c+=(1.-l)*uExtra.z*.22 - l*uExtra.y*.22;
 c=clamp(c,0.,1.);
 c=(c-.5)*(1.+uBasic.y+uTone.y)+.5+uTone.x;
 c=clamp(c,0.,1.);
 c=mix(c,vec3(dot(c,vec3(.2126,.7152,.0722))),uMono);
 float lum=dot(c,vec3(.2126,.7152,.0722));
 c=mix(vec3(lum),c,1.+uBasic.z+uTone.z);
 c+=vec3(uBasic.w*.09+uColor.r, uExtra.x*.065+uColor.g, -uBasic.w*.09+uColor.b);
 c=mix(c,vec3(.13),clamp(uFx.y*.45+uTone.w,0.,.65));
 return clamp(c,0.,1.);
}
void main(){
 vec3 src=texture(uImage,uv).rgb;
 vec3 c=grade(src);
 if(uUseLut==1)c=texture(uLut,clamp(c,0.,1.)).rgb;
 float glow=max(max(src.r,src.g),src.b);
 float halo=smoothstep(.68,1.,glow)*uFx.z*.18;
 c+=vec3(halo,halo*.28,halo*.12);
 vec2 d=(uv-.5)*vec2(uResolution.x/uResolution.y,1.);
 float v=clamp(dot(d,d)*1.4,0.,1.);
 c*=1.-uFx.w*v*.75;
 vec2 p=floor(gl_FragCoord.xy/max(uGrainSize,1.));
 float n=hash(p)-.5;
 c+=n*uFx.x*.28*(.65+.35*(1.-dot(c,vec3(.2126,.7152,.0722))));
 c=mix(src,clamp(c,0.,1.),uExtra.w);
 fragColor=vec4(clamp(c,0.,1.),1.);
}
