
"use strict";
document.addEventListener('DOMContentLoaded',()=>{

  /* Navbar scroll */
  const nav=document.getElementById('navbar');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50),{passive:true});

  /* Reveal */
  const ro=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
  },{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

  /* Hero reveals on load */
  window.addEventListener('load',()=>{
    document.querySelectorAll('.hero .reveal').forEach(el=>el.classList.add('visible'));
  });

  /* Hamburger */
  const ham=document.getElementById('hamburger');
  const mob=document.getElementById('mobileMenu');
  if(ham&&mob){
    ham.addEventListener('click',()=>{
      const open=mob.classList.toggle('open');
      ham.setAttribute('aria-expanded',open);
    });
    window.addEventListener('keydown',e=>{if(e.key==='Escape')mob.classList.remove('open')});
  }

  /* Animate bar chart heights */
  setTimeout(()=>{
    document.querySelectorAll('.hv-chart .bar').forEach(b=>{
      const h=b.style.height;
      b.style.height='0%';
      setTimeout(()=>{ b.style.transition='height 0.9s cubic-bezier(.4,0,.2,1)'; b.style.height=h; },200);
    });
  },500);

  /* Swipers */
  if(typeof Swiper!=='undefined'){
    new Swiper('.servicesSwiper',{
      loop:true, grabCursor:true, spaceBetween:24,
      navigation:{nextEl:'.servicesSwiper .swiper-button-next',prevEl:'.servicesSwiper .swiper-button-prev'},
      pagination:{el:'.servicesSwiper .swiper-pagination',clickable:true},
      slidesPerView:1,
      breakpoints:{ 560:{slidesPerView:2}, 900:{slidesPerView:3} }
    });
    new Swiper('.workSwiper',{
      loop:true, grabCursor:true, spaceBetween:24,
      navigation:{nextEl:'.workSwiper .swiper-button-next',prevEl:'.workSwiper .swiper-button-prev'},
      pagination:{el:'.workSwiper .swiper-pagination',clickable:true},
      slidesPerView:1,
      breakpoints:{ 640:{slidesPerView:2} }
    });
    new Swiper('.testiSwiper',{
      loop:true, grabCursor:true,
      autoplay:{delay:4800,disableOnInteraction:false},
      spaceBetween:24,
      navigation:{nextEl:'.testiSwiper .swiper-button-next',prevEl:'.testiSwiper .swiper-button-prev'},
      pagination:{el:'.testiSwiper .swiper-pagination',clickable:true},
      slidesPerView:1,
      breakpoints:{ 640:{slidesPerView:2}, 1024:{slidesPerView:3} }
    });
  }
});
function closeMob(){
  const m=document.getElementById('mobileMenu');
  if(m)m.classList.remove('open');
}
