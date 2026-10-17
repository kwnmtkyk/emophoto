// Artistic approximations, NOT measured manufacturer profiles.
export const presets=[
{id:'original',name:'Original',kind:'Neutral',tone:[0,0,0,0],color:[0,0,0],grain:0,fade:0,halation:0,vignette:0,mono:0,lut:'none'},
{id:'portra',name:'Portra 400',kind:'Color negative',tone:[.05,-.08,-.09,.07],color:[.07,-.025,-.055],grain:18,fade:10,halation:10,vignette:6,mono:0,lut:'portra400'},
{id:'gold',name:'Gold 200',kind:'Color negative',tone:[.07,.10,-.08,.04],color:[.12,.015,-.075],grain:22,fade:7,halation:14,vignette:12,mono:0,lut:'gold200'},
{id:'ektar',name:'Ektar 100',kind:'Color negative',tone:[.02,.19,-.07,.01],color:[.04,.03,-.02],grain:9,fade:0,halation:7,vignette:5,mono:0,lut:'none'},
{id:'fuji',name:'Fujifilm 400',kind:'Color negative',tone:[.01,.02,-.07,.05],color:[-.04,.045,.035],grain:20,fade:6,halation:8,vignette:8,mono:0,lut:'none'},
{id:'velvia',name:'Velvia 50',kind:'Slide film',tone:[-.05,.22,-.12,.01],color:[-.02,.07,.08],grain:5,fade:0,halation:5,vignette:7,mono:0,lut:'none'},
{id:'hp5',name:'HP5 Plus',kind:'Black & white',tone:[.01,.11,-.05,.03],color:[0,0,0],grain:34,fade:3,halation:6,vignette:12,mono:1,lut:'hp5'},
{id:'trix',name:'Tri-X 400',kind:'Black & white',tone:[-.04,.23,-.09,.01],color:[0,0,0],grain:44,fade:4,halation:9,vignette:15,mono:1,lut:'hp5'}
];
export const controls=[['exposure','露出',-2,2,.01,0],['contrast','コントラスト',-100,100,1,0],['saturation','彩度',-100,100,1,0],['temperature','色温度',-100,100,1,0],['tint','色かぶり',-100,100,1,0],['highlights','ハイライト',-100,100,1,0],['shadows','シャドウ',-100,100,1,0],['grain','粒状感',0,100,1,0],['grainSize','粒子サイズ',1,5,.1,1.5],['fade','フェード',0,100,1,0],['halation','ハレーション',0,100,1,0],['vignette','周辺減光',0,100,1,0],['strength','フィルム効果',0,100,1,100]];
export function defaults(){return Object.fromEntries(controls.map(([k,,,,v])=>[k,v]));}
