'use strict';
(() => {
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],M=window.DXB_MEDIA;
 const pressed=(selector,key,value)=>$$(selector).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[key]===value)));
 const motionOff=()=>document.documentElement.classList.contains('paused')||matchMedia('(prefers-reduced-motion:reduce)').matches;
 const filmSource='https://media.dubaiairports.ae/dubai-airports-celebrates-unified-service-and-service-excellence-in-an-entertaining-new-film/';
 // Real footage is played only while visible; the photo remains as a reliable fallback.
 const videoRegistry=new Map();
 function registerVideo(video){
  const record={visible:false,userPaused:false,blocked:false};videoRegistry.set(video,record);video.muted=true;
  const sync=()=>{if(record.visible&&!record.userPaused&&!motionOff()&&!document.hidden&&!video.closest('[hidden]')){video.play().catch(()=>{record.blocked=true;syncLabel();});}else video.pause();};
  function syncLabel(){const parent=video.closest('.film-scene,.closing-film')||$('.hero');const b=parent?.querySelector('[data-video-target="'+video.id+'"]');if(b){b.textContent=video.paused?'▶ Play film':'Ⅱ Pause film';b.setAttribute('aria-pressed',String(!video.paused));}parent?.classList.toggle('film-playing',!video.paused);}
  const observer=new IntersectionObserver(entries=>{record.visible=entries[0].isIntersecting;sync();},{threshold:.15});observer.observe(video);
  video.addEventListener('play',syncLabel);video.addEventListener('pause',syncLabel);video.addEventListener('loadeddata',()=>{video.classList.add('film-ready');sync();});
  video.addEventListener('error',()=>{video.closest('.film-scene,.closing-film,.hero')?.classList.add('film-unavailable');});
  document.addEventListener('dxb-motion',sync);document.addEventListener('visibilitychange',sync);record.sync=sync;
  return record;
 }
 document.addEventListener('click',e=>{const button=e.target.closest('[data-video-target]');if(!button)return;const video=document.getElementById(button.dataset.videoTarget),rec=videoRegistry.get(video);if(!rec)return;if(video.paused){rec.userPaused=false;if(motionOff())$('#motion-toggle').click();video.play().catch(()=>{button.textContent='▶ Try film again';});}else{rec.userPaused=true;video.pause();}});
 // The hero can alternate between the actual moving concourse and the airport-wide photograph.
 const hero=$('.hero'),heroVideo=$('#hero-video');
 hero.insertAdjacentHTML('beforeend','<div class="hero-film-credit"><span>FILMED AT DXB / oneDXB · 2024</span><button class="film-toggle" data-video-target="hero-video" aria-pressed="false">Ⅱ Pause film</button></div>');
 $$('[data-hero-view]').forEach(b=>b.addEventListener('click',()=>{const aerial=b.dataset.heroView==='aerial';hero.classList.toggle('aerial-view',aerial);$('.hero-bottom>span').textContent=aerial?'AERIAL ARCHIVE / 17 DECEMBER 2013':'DXB / A REAL PLACE, IN MOTION';pressed('[data-hero-view]','heroView',b.dataset.heroView);const rec=videoRegistry.get(heroVideo);if(rec){rec.userPaused=aerial;rec.sync();}}));
 // The film strip sits next to the original photographic task, never claiming that a different filmed facility is the same one.
 function filmScene(section,id,src,title,copy,tags){
  const target=$(section);const panel=document.createElement('div');panel.className='film-scene';panel.innerHTML=`<div class="film-stage"><video id="${id}" muted loop playsinline preload="none" aria-label="${title}"><source src="assets/v4/${src}.mp4" type="video/mp4"></video><div class="film-vignette"></div><div class="film-caption"><span class="film-kicker">DXB IN MOTION</span><h3>${title}</h3><p>${copy}</p></div><div class="film-tags">${tags.map((x,i)=>`<span style="--delay:${i*1.5}s">${x}</span>`).join('')}</div><button class="film-toggle" data-video-target="${id}" aria-pressed="false">Ⅱ Pause film</button><span class="film-timeline" aria-hidden="true"></span></div><div class="film-source"><span>Real airport footage · oneDXB / 2024</span><a href="${filmSource}" target="_blank" rel="noopener noreferrer">Film source ↗</a></div></div>`;
  target.append(panel);const video=panel.querySelector('video');video.addEventListener('timeupdate',()=>panel.style.setProperty('--film-progress',video.duration?video.currentTime/video.duration:0));return video;
 }
 filmScene('#scene-04 .scene-width','journey-film','people','People make the connection.','Watch how a question becomes a direction.',['ASK','LISTEN','FIND YOUR WAY']);
 filmScene('#scene-08 .scene-width','dining-film','dining','More than a place to pass through.','A moving glimpse of dining and waiting at DXB.',['PAUSE','EXPLORE','CONNECT']);
 filmScene('#scene-13 .scene-width','perspective-film','journey','See the journey from another angle.','Movement, people and the spaces between them.',['CLARITY','COMFORT','INCLUSION']);
 $$('video').forEach(registerVideo);
 // Image-based scenes get controlled cinematic framing. Hotspot tasks retain stable geometry.
 const motionImages=$$('.map-context-photo img,.observation-photo>img,.rest-inside img,.support-photo>img,.passenger-stage>img,.lens-layout>figure>img,.discussion-photo img');
 motionImages.forEach(img=>{img.classList.add('living-photo');img.parentElement.classList.add('living-frame');new IntersectionObserver(es=>img.classList.toggle('in-view',es[0].isIntersecting),{threshold:.1}).observe(img);});
 $('#reset-all').addEventListener('click',()=>{hero.classList.remove('aerial-view');$('.hero-bottom>span').textContent='DXB / A REAL PLACE, IN MOTION';pressed('[data-hero-view]','heroView','film');videoRegistry.forEach((r,v)=>{r.userPaused=false;v.currentTime=0;r.sync();});});
 const sources=$('#fact-sources');sources.insertAdjacentHTML('beforeend',`<li><a href="${filmSource}" target="_blank" rel="noopener noreferrer">oneDXB film / Dubai Airports ↗</a><p>October 2024 campaign. Real-location filming with a staged story. Excerpts are muted, trimmed and compressed at original speed; photographs are animated only through framing and transitions. Film remains copyright Dubai Airports. Local educational preview; public reuse permission is not established.</p></li>`);
})();
