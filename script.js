// ======= Contact form demo =======
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(contactForm);
    const email = fd.get('email');
    const subject = fd.get('subject');
    const message = fd.get('message');
    const note = document.getElementById('contactNote');
    if(!email || !subject || !message){
      note.textContent = 'Please complete all fields.';
      return;
    }
    note.textContent = 'Thanks! Your message has been queued. (Connect to your email service/back-end.)';
    contactForm.reset();
  });
}

// ======= Cookie consent =======
const cookieEl = document.getElementById('cookie');
const COOKIE_KEY = 'kkh_cookie_choice';
function setCookieChoice(val){try{localStorage.setItem(COOKIE_KEY,val);}catch(e){}}
function getCookieChoice(){try{return localStorage.getItem(COOKIE_KEY);}catch(e){return null}}
function maybeShowCookie(){if(cookieEl && !getCookieChoice()) cookieEl.style.display='grid'}
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');
if(cookieAccept) cookieAccept.onclick = ()=>{setCookieChoice('accepted'); cookieEl.style.display='none';}
if(cookieDecline) cookieDecline.onclick = ()=>{setCookieChoice('declined'); cookieEl.style.display='none';}
maybeShowCookie();
