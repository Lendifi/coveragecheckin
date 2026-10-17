/* CoverageCheckin: nav toggle, header tone, scroll reveal. No tracking. */
(function(){
  var d=document,h=d.querySelector('.hdr'),b=d.querySelector('.menu-btn'),n=d.querySelector('.nav');
  d.documentElement.classList.remove('no-js');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
  var dark=d.querySelector('.hero,.page-hero');
  function tone(){if(!h||!dark)return;var r=dark.getBoundingClientRect();h.classList.toggle('on-dark',r.bottom>70)}
  tone();addEventListener('scroll',tone,{passive:true});
  var els=d.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e)});
})();
