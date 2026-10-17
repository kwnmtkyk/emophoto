#version 300 es
precision highp float;
in vec2 uv;out vec4 fragColor;uniform sampler2D uImage;uniform vec2 uTexel;uniform float uBloom;
void main(){vec3 c=texture(uImage,uv).rgb;vec3 blur=vec3(0.);for(int x=-2;x<=2;x++)for(int y=-2;y<=2;y++){vec3 v=texture(uImage,uv+vec2(float(x),float(y))*uTexel*3.).rgb;blur+=max(v-.7,0.); }c+=blur/25.*uBloom;fragColor=vec4(clamp(c,0.,1.),1.);}
