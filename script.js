function toggleNav(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  if(getComputedStyle(nav).display === 'none') nav.style.display = 'flex';
  else nav.style.display = 'none';
}

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    if(!id) return window.scrollTo({top:0,behavior:'smooth'});
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  })
});