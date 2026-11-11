'use strict';
(() => {
 const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)], M=window.DXB_MEDIA;
 const press=(selector,key,value)=>$$(selector).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[key]===value)));
 function photo(img,key,credit,expand){const m=M[key];img.src=m.src;img.dataset.media=key;img.alt=m.alt;img.width=m.size[0];img.height=m.size[1];if(credit){credit.dataset.credit=key;credit.textContent=`${m.title} · ${m.credit} ↗`;}if(expand)expand.dataset.zoom=key;}
 const atlas={wholeAirport:['AERIAL ARCHIVE / 17 DECEMBER 2013','An actual airport-wide view: parallel runways frame the terminal and concourse complex. This dated photograph shows the scale of DXB; it is not a live navigation map.'],satellite:['DUBAISAT-1 / 26 NOVEMBER 2010','A satellite view of the airport and its city surroundings. This 2010 archive predates later expansions, so use the official map for present-day navigation.'],panorama:['DUBAI AIRPORTS / TERMINAL 3','Move closer to the terminal and its aircraft stands. The airport-wide view and this terminal photograph show different scales and photographic moments.']};
 $$('[data-atlas]').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.atlas;press('[data-atlas]','atlas',k);photo($('#atlas-image'),k,$('#atlas-credit'),$('#atlas-expand'));$('#atlas-date').textContent=atlas[k][0];$('#atlas-description').textContent=atlas[k][1];}));
 const discussion={clarity:['wayfinding','CLARITY / FINDING YOUR WAY'],comfort:['restCabin','COMFORT / TIME TO RECHARGE'],inclusion:['support','INCLUSION / A PLACE FOR SUPPORT']};
 $$('[data-priority]').forEach(b=>b.addEventListener('click',()=>{const item=discussion[b.dataset.priority];if(item&&M[item[0]]){photo($('#discussion-image'),item[0]);$('#discussion-photo-label').textContent=item[1];}}));
 // Reuse the original, full-resolution viewer on every large photographic scene.
 for(const selector of ['.journey-photo','.rest-inside figure','.discussion-photo','.lens-layout>figure']){
  const figure=$(selector);if(!figure||figure.querySelector('[data-zoom]'))continue;const img=figure.querySelector('img');const button=document.createElement('button');button.className='image-expand';button.textContent='⤢ Explore photograph';button.dataset.zoom=img.dataset.media;figure.append(button);new MutationObserver(()=>{button.dataset.zoom=img.dataset.media;}).observe(img,{attributes:true,attributeFilter:['src']});
 }
 // A short camera-like dissolve when an actual photograph changes, never fabricated motion.
 const changing=$$('img').filter(img=>!img.classList.contains('hero-photo'));
 const animate=img=>{if(document.documentElement.classList.contains('paused')||matchMedia('(prefers-reduced-motion:reduce)').matches)return;img.classList.remove('photo-shift');requestAnimationFrame(()=>{img.classList.add('photo-shift');});};
 changing.forEach(img=>{new MutationObserver(()=>animate(img)).observe(img,{attributes:true,attributeFilter:['src']});img.addEventListener('animationend',()=>img.classList.remove('photo-shift'));});
 // Inspector magnifies the photographed sign without changing the underlying target regions.
 const sign=$('.sign-stage'),lens=document.createElement('div');lens.className='photo-loupe';lens.setAttribute('aria-hidden','true');sign.append(lens);
 sign.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const rect=sign.getBoundingClientRect(),img=$('#sign-image'),x=e.clientX-rect.left,y=e.clientY-rect.top;const fit=Math.min(rect.width/img.naturalWidth,rect.height/img.naturalHeight),iw=img.naturalWidth*fit,ih=img.naturalHeight*fit,ox=(rect.width-iw)/2,oy=(rect.height-ih)/2;if(x<ox||x>ox+iw||y<oy||y>oy+ih){lens.hidden=true;return;}lens.hidden=false;lens.style.left=Math.min(rect.width-78,Math.max(78,x))+'px';lens.style.top=Math.max(80,y-90)+'px';lens.style.backgroundImage=`url("${img.src}")`;lens.style.backgroundSize=`${iw*2}px ${ih*2}px`;lens.style.backgroundPosition=`${75-(x-ox)*2}px ${75-(y-oy)*2}px`;sign.classList.add('inspecting');});
 sign.addEventListener('pointerleave',()=>sign.classList.remove('inspecting'));
 $('#scene-index').querySelectorAll('a').forEach(a=>{const n=a.dataset.index;if(n==='2')a.lastChild.textContent='Inside the A380';if(n==='3')a.lastChild.textContent='The whole airport';});
 const resetDiscussionPhoto=()=>{photo($('#discussion-image'),'wayfinding');$('#discussion-photo-label').textContent=discussion.clarity[1];};
 $('#discussion-reset').addEventListener('click',resetDiscussionPhoto);
 $('#reset-all').addEventListener('click',()=>{
  press('[data-atlas]','atlas','wholeAirport');photo($('#atlas-image'),'wholeAirport',$('#atlas-credit'),$('#atlas-expand'));$('#atlas-date').textContent=atlas.wholeAirport[0];$('#atlas-description').textContent=atlas.wholeAirport[1];
  resetDiscussionPhoto();
 });
})();
