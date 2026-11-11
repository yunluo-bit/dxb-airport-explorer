import * as T from 'three';

// Metres in the exterior's original coordinate frame: X aft, Y up, Z port.
// Individually modelled furniture is instanced; photos are references, never the cabin geometry.
export const CABIN={mainY:5.12,upperY:7.78,start:16,end:69,eye:1.62};
export const ZONES={
 premium:{deck:'main',position:[28.6,6.74,1.46],yaw:-Math.PI/2,title:'Premium Economy',media:'cabinPremium',detail:'56 seats · 2–4–2'},
 economy:{deck:'main',position:[45,6.74,1.26],yaw:-Math.PI/2,title:'Economy Class',media:'cabinEconomy',detail:'338 seats · 3–4–3'},
 first:{deck:'upper',position:[28.7,9.4,1.34],yaw:-Math.PI/2,title:'First Class',media:'cabinFirst',detail:'14 suites · upper deck'},
 business:{deck:'upper',position:[45.2,9.4,1.34],yaw:-Math.PI/2,title:'Business Class',media:'cabinBusinessWide',detail:'76 seats · staggered 1–2–1'},
 lounge:{deck:'upper',position:[63.2,9.4,0],yaw:Math.PI/2,title:'Onboard Lounge',media:'cabinLounge',detail:'Upper deck · rear lounge'},
 stairs:{deck:'main',position:[20.1,6.74,0],yaw:-Math.PI/2,title:'Connecting the decks',media:'cabinStairs',detail:'Forward stairway · two passenger decks'}
};
function canvasTexture(draw,size=256){const c=document.createElement('canvas');c.width=c.height=size;draw(c.getContext('2d'),size);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.anisotropy=4;return tex;}
function roundedBox(w,h,d,r=.05){const g=new T.BoxGeometry(w,h,d,4,4,4),p=g.attributes.position,n=g.attributes.normal;r=Math.min(r,w/2-.0001,h/2-.0001,d/2-.0001);const q=new T.Vector3(),v=new T.Vector3();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);q.set(T.MathUtils.clamp(v.x,-w/2+r,w/2-r),T.MathUtils.clamp(v.y,-h/2+r,h/2-r),T.MathUtils.clamp(v.z,-d/2+r,d/2-r));const normal=v.clone().sub(q).normalize();v.copy(q).addScaledVector(normal,r);p.setXYZ(i,v.x,v.y,v.z);n.setXYZ(i,normal.x,normal.y,normal.z);}return g;}
export function buildCabin(group,center){
 const cabin=new T.Group();cabin.name='A380 reconstructed interior';cabin.position.copy(center).negate();group.add(cabin);
 const main=new T.Group(),upper=new T.Group();cabin.add(main,upper);main.position.y=CABIN.mainY;upper.position.y=CABIN.upperY;
 const ceilings={main:new T.Group(),upper:new T.Group()};main.add(ceilings.main);upper.add(ceilings.upper);
 const shells={main:new T.Group(),upper:new T.Group()};main.add(shells.main);upper.add(shells.upper);
 const wood=canvasTexture((c,s)=>{c.fillStyle='#846146';c.fillRect(0,0,s,s);for(let i=0;i<360;i++){c.strokeStyle=`rgba(${i%2?'41,23,15':'210,173,124'},.09)`;c.beginPath();c.moveTo(0,i*.75);c.bezierCurveTo(s*.3,i*.75+5,s*.7,i*.75-3,s,i*.75+1);c.stroke();}});
 const fabric=canvasTexture((c,s)=>{c.fillStyle='#a39989';c.fillRect(0,0,s,s);for(let y=0;y<s;y+=3)for(let x=0;x<s;x+=3){c.fillStyle=(x+y)%2?'#b6ad9b':'#8d8477';c.fillRect(x,y,1,2);}});fabric.repeat.set(4,4);
 const carpet=canvasTexture((c,s)=>{c.fillStyle='#514e53';c.fillRect(0,0,s,s);for(let y=0;y<s;y+=2)for(let x=0;x<s;x+=3){c.fillStyle=((x*17+y*11)%7<3)?'#67606a':'#49464d';c.fillRect(x,y,1,1);}c.strokeStyle='#7d7170';c.lineWidth=2;for(let x=0;x<s;x+=32){c.beginPath();c.moveTo(x,0);c.lineTo(x+10,s);c.stroke();}});carpet.repeat.set(18,3);
 const screen=canvasTexture((c,s)=>{const grad=c.createLinearGradient(0,0,s,s);grad.addColorStop(0,'#233d5a');grad.addColorStop(1,'#091c30');c.fillStyle=grad;c.fillRect(0,0,s,s);c.strokeStyle='#81bed0';c.lineWidth=2;c.beginPath();c.ellipse(s/2,s*.6,s*.31,s*.23,-.2,Math.PI,Math.PI*2);c.stroke();c.fillStyle='#fff';c.font='26px sans-serif';c.fillText('Dubai',20,65);c.font='10px sans-serif';c.fillStyle='#b9d5e0';c.fillText('YOUR JOURNEY CONTINUES',20,91);c.fillStyle='#e1b878';c.fillRect(20,210,100,2);});
 const m={ivory:new T.MeshStandardMaterial({color:0xe6dfd1,roughness:.42}),leather:new T.MeshStandardMaterial({color:0xd9c7ab,roughness:.64,bumpMap:fabric,bumpScale:.007}),cloth:new T.MeshStandardMaterial({color:0x8c7d77,map:fabric,roughness:.95}),shell:new T.MeshStandardMaterial({color:0xcfc8bc,roughness:.42}),wood:new T.MeshStandardMaterial({map:wood,roughness:.32}),gold:new T.MeshStandardMaterial({color:0xbba274,metalness:.75,roughness:.3}),dark:new T.MeshStandardMaterial({color:0x373737,roughness:.8}),carpet:new T.MeshStandardMaterial({map:carpet,roughness:1}),screen:new T.MeshStandardMaterial({map:screen,emissiveMap:screen,emissive:0xffffff,emissiveIntensity:.45,roughness:.18}),light:new T.MeshStandardMaterial({color:0xffefd4,emissive:0xffd5a0,emissiveIntensity:1.8}),window:new T.MeshBasicMaterial({color:0xb9d4df}),seam:new T.MeshStandardMaterial({color:0xefe2c9,roughness:.8})};
 const ao=canvasTexture((c,s)=>{c.clearRect(0,0,s,s);const g=c.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(35,27,30,.38)');g.addColorStop(.5,'rgba(35,27,30,.22)');g.addColorStop(1,'rgba(35,27,30,0)');c.fillStyle=g;c.fillRect(0,0,s,s);});m.ao=new T.MeshBasicMaterial({map:ao,transparent:true,depthWrite:false});
 const batches=new Map(),geometries=new Map(),temp=new T.Object3D(),obstacles={main:[],upper:[]},counts={first:0,business:0,premium:0,economy:0};
 function part(parent,size,p,material,r=.04,rot=[0,0,0]){const key=size.join(',')+':'+r;if(!geometries.has(key))geometries.set(key,roundedBox(...size,r));const id=parent.uuid+':'+key+':'+material;let b=batches.get(id);if(!b){b={parent,g:geometries.get(key),m:m[material],matrices:[]};batches.set(id,b);}temp.position.set(...p);temp.rotation.set(...rot);temp.updateMatrix();b.matrices.push(temp.matrix.clone());}
 function seat(parent,x,z,kind,deck){const premium=kind==='premium',business=kind==='business'||kind==='first',w=business?.66:premium?.49:.44,h=business?1.16:1.04;
  part(parent,[.9,.003,w+.2],[x-.1,.015,z],'ao',.001);
  part(parent,[.47,.14,w],[x-.1,.49,z],kind==='economy'?'cloth':'leather',.065);
  part(parent,[.13,.79,w],[x+.13,.91,z],kind==='economy'?'cloth':'leather',.055,[0,0,-.1]);
  part(parent,[.12,.22,w*.82],[x+.1,h+.19,z],'leather',.06);
  for(const sign of [-1,1]){part(parent,[.13,.19,.07],[x+.06,h+.2,z+sign*w*.4],'leather',.035,[sign*.13,0,0]);part(parent,[.57,.075,.055],[x-.07,.69,z+sign*(w/2+.025)],'wood',.026);part(parent,[.06,.34,.05],[x+.08,.52,z+sign*(w/2+.025)],'gold',.01);part(parent,[.07,.32,.045],[x+.04,.24,z+sign*w*.35],'dark',.01);}
  part(parent,[.028,.26,w*.78],[x+.22,.96,z],'dark',.017);part(parent,[.031,.215,w*.68],[x+.238,.965,z],'screen',.006);
  part(parent,[.035,.24,w*.8],[x+.215,.65,z],'wood',.019);part(parent,[.042,.018,.08],[x+.24,.77,z],'gold',.005);
  part(parent,[.025,.12,w*.7],[x+.21,.43,z],'cloth',.01);
  // Upholstery piping and headrest panel add shape at eye level.
  part(parent,[.023,.51,.012],[x+.054,.91,z-w*.4],'seam',.005,[0,0,-.1]);part(parent,[.023,.51,.012],[x+.054,.91,z+w*.4],'seam',.005,[0,0,-.1]);
  if(premium)part(parent,[.24,.1,w*.75],[x-.42,.25,z],'leather',.03,[0,0,.35]);
  if(business){part(parent,[1.25,.78,.13],[x-.25,.43,z+.5],'wood',.05);part(parent,[1.38,.045,.17],[x-.25,.84,z+.5],'gold',.015);part(parent,[.12,1.2,.99],[x+.4,.65,z+.06],'shell',.07);part(parent,[.48,.42,.5],[x-.9,.25,z],'leather',.06);part(parent,[.06,.38,.56],[x-.88,.94,z],'dark',.025);part(parent,[.065,.32,.49],[x-.84,.94,z],'screen',.01);}
  obstacles[deck].push({x1:x-(business?1.16:.5),x2:x+(business?.49:.28),z1:z-(business?.44:w/2+.07),z2:z+(business?.59:w/2+.07)});counts[kind]++;
 }
 const pz=[-2.64,-2.07,-.855,-.285,.285,.855,2.07,2.64];for(let row=0;row<7;row++)for(const z of pz)seat(main,21.3+row*1.05,z,'premium','main');
 const ez=[-2.8,-2.29,-1.78,-.765,-.255,.255,.765,1.78,2.29,2.8];for(let row=0;row<34;row++){const x=31+row*.85+(row>=12?1.2:0)+(row>=25?1.2:0);for(let col=0;col<10;col++){if(row===33&&(col===0||col===9))continue;seat(main,x,ez[col],'economy','main');}}
 for(let row=0;row<4;row++)for(let col=0;col<4;col++){if(row===3&&(col===1||col===2))continue;const z=[-2.17,-.55,.55,2.17][col],x=21+row*2.1;seat(upper,x,z,'first','upper');part(upper,[1.7,1.18,.07],[x-.3,.62,z-.51],'wood',.035);part(upper,[.03,.025,1.02],[x+.48,1.28,z],'gold',.008);}
 for(let row=0;row<19;row++)for(let col=0;col<4;col++){const z=[-2.17,-.55,.55,2.17][col];seat(upper,30.2+row*1.65+((row+col)%2)*.22,z,'business','upper');}
 // Window openings are real holes; distant photographic scenery is visible through them.
 function rect(path,w,h,r){path.moveTo(-w/2+r,-h/2);path.lineTo(w/2-r,-h/2);path.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);path.lineTo(w/2,h/2-r);path.quadraticCurveTo(w/2,h/2,w/2-r,h/2);path.lineTo(-w/2+r,h/2);path.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);path.lineTo(-w/2,-h/2+r);path.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);return path;}
 const windowShape=rect(new T.Shape(),.6,.88,.11);windowShape.holes.push(rect(new T.Path(),.37,.54,.13));const windowGeometry=new T.ExtrudeGeometry(windowShape,{depth:.065,bevelEnabled:true,bevelThickness:.025,bevelSize:.025,bevelSegments:2,steps:1,curveSegments:8});
 const photoTexture=new T.TextureLoader().load('./assets/v3/dxb-airside-richardson.jpg');photoTexture.colorSpace=T.SRGBColorSpace;const outside=new T.Group();cabin.add(outside);for(const side of [-1,1]){const photo=new T.Mesh(new T.PlaneGeometry(105,60),new T.MeshBasicMaterial({map:photoTexture,side:T.DoubleSide,color:0xe8ebef}));photo.position.set(41,15,side*36);outside.add(photo);}
 // Deck structures, window recesses, overhead stowage and curved ceilings.
 for(const [deck,parent,width]of[['main',main,6.5],['upper',upper,5.85]]){
  const start=16,length=53,mid=42.5,roofStart=deck==='main'?20:16,roofLength=69-roofStart,roofMid=(roofStart+69)/2,roof=ceilings[deck],wall=shells[deck];
  if(deck==='main')part(parent,[length,.14,width],[mid,-.07,0],'carpet',.01);else{part(parent,[49,.14,width],[44.5,-.07,0],'carpet',.01);part(parent,[.35,.14,width],[16.175,-.07,0],'carpet',.01);for(const side of [-1,1])part(parent,[3.65,.14,(width-1.25)/2],[18.175,-.07,side*(width+1.25)/4],'carpet',.01);}
  for(const z of deck==='main'?[-1.28,1.28]:[-1.34,1.34])part(parent,[length,.009,.018],[mid,.012,z],'gold',.002);
  for(const side of [-1,1]){
   const z=side*(width/2-.06);part(wall,[length,.58,.12],[mid,.29,z],'ivory',.035);part(wall,[length,.28,.12],[mid,1.62,z],'ivory',.05);
   const frames=[];for(let x=start+.4;x<68.8;x+=.79){part(wall,[.25,.95,.12],[x,1.03,z],'ivory',.02);part(wall,[.6,.22,.12],[x+.39,.49,z],'ivory',.02);part(wall,[.6,.2,.12],[x+.39,1.56,z],'ivory',.02);frames.push([x+.39,1.03,z-side*.06]);part(wall,[.44,.055,.2],[x+.39,.72,z-side*.06],'ivory',.02);}const windows=new T.InstancedMesh(windowGeometry,m.ivory,frames.length);frames.forEach((p,i)=>{temp.position.set(...p);temp.rotation.set(0,0,0);temp.updateMatrix();windows.setMatrixAt(i,temp.matrix);});wall.add(windows);
   for(let x=roofStart+.62;x<68.5;x+=1.2){part(roof,[1.17,.43,.65],[x,1.95,side*(width/2-.43)],'ivory',.16,[side*.12,0,0]);part(roof,[.18,.025,.025],[x,1.76,side*(width/2-.73)],'gold',.008);}
   part(roof,[roofLength,.024,.06],[roofMid,2.16,side*(width/2-.8)],'light',.007);
   part(roof,[roofLength,.02,.035],[roofMid,2.31,side*.55],'light',.005);
  }
  const vertices=[],indices=[];for(let i=0;i<=32;i++){const t=i/32*Math.PI,z=Math.cos(t)*width/2,y=1.75+Math.sin(t)*.6;vertices.push(roofStart,y,z,69,y,z);if(i<32){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}}const arch=new T.BufferGeometry();arch.setAttribute('position',new T.Float32BufferAttribute(vertices,3));arch.setIndex(indices);arch.computeVertexNormals();const archMat=m.ivory.clone();archMat.side=T.DoubleSide;roof.add(new T.Mesh(arch,archMat));
  for(const x of [start,69])part(wall,[.12,2.3,width],[x,1.15,0],'ivory',.03);
  // Galley and entry vestibules, with open passages rather than solid partitions.
  for(const x of deck==='main'?[19.4,29.2,41.05,53.3,65.5]:[20,28.9,62.4,68.5]){
   for(const z of [-width/2+.32,width/2-.32]){part(parent,[.5,1.78,.52],[x,.89,z],'ivory',.055);part(parent,[.53,1.27,.4],[x+.02,.74,z],'wood',.035);for(let i=0;i<4;i++)part(parent,[.54,.018,.32],[x+.03,.26+i*.27,z],'gold',.004);}
  }
 }
 for(const side of [-1,1]){part(shells.main,[4,2.66,.1],[18,1.33,side*3.2],'ivory',.025);part(shells.main,[4,.06,.4],[18,2.64,side*3.08],'ivory',.01);part(shells.upper,[3.65,.05,2.3],[18.175,-.165,side*1.775],'ivory',.01);}part(shells.main,[.12,2.66,6.5],[16,1.33,0],'ivory',.01);
 // Forward stair geometry connects the true floor levels (not a photograph).
 for(let i=0;i<16;i++){const x=19.7-i*.225,h=(i+1)*(CABIN.upperY-CABIN.mainY)/16;part(main,[.225,h,1.05],[x,h/2,0],'wood',.015);part(main,[.23,.025,1.06],[x,h+.012,0],'carpet',.006);}
 for(const z of [-.59,.59]){part(main,[4.27,.065,.065],[18,2.15,z],'gold',.025,[0,0,-.637]);for(let i=0;i<7;i++)part(main,[.035,.85,.035],[19.7-i*.5,.6+i*.37,z],'gold',.012);}
 // Rear upper-deck lounge: sculpted bar, worktop, banquettes and cocktail tables.
 part(upper,[1.05,1.02,2.2],[67.5,.51,0],'wood',.24);part(upper,[1.26,.09,2.38],[67.45,1.06,0],'ivory',.17);part(upper,[.035,.04,1.9],[66.86,.92,0],'light',.014);
 for(const side of [-1,1]){part(upper,[2.25,.28,.57],[65.1,.38,side*2.28],'leather',.13);part(upper,[2.3,.72,.2],[65.1,.7,side*2.57],'leather',.1);for(const x of [64.25,65.95]){part(upper,[.57,.055,.49],[x,.69,side*1.58],'wood',.12);part(upper,[.05,.65,.05],[x,.34,side*1.58],'gold',.015);}}
 for(const z of [-.7,-.35,0,.35,.7]){part(upper,[.07,.24,.07],[67.4,1.24,z],'gold',.025);part(upper,[.09,.04,.09],[67.4,1.12,z],'ivory',.01);}
 for(const b of batches.values()){const mesh=new T.InstancedMesh(b.g,b.m,b.matrices.length);b.matrices.forEach((matrix,i)=>mesh.setMatrixAt(i,matrix));mesh.castShadow=b.m!==m.ao&&b.m!==m.light;mesh.receiveShadow=true;mesh.frustumCulled=false;b.parent.add(mesh);}
 // Lighting is shared by the scene; extra hemisphere lights would wash out upholstery.
 return{cabin,main,upper,ceilings,shells,counts,obstacles,setView(view,deck='main',opening=1){outside.visible=view==='walk';cabin.visible=view!=='exterior'||opening>.05;upper.position.y=CABIN.upperY+(view==='cutaway'?opening*5:0);main.visible=true;upper.visible=true;for(const d of ['main','upper']){ceilings[d].visible=view==='walk';shells[d].visible=view==='walk';}}};
}
