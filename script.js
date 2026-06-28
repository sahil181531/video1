
function startCountdown(id,nextUrl){
 const btn=document.getElementById(id);
 const bar=document.querySelector('.bar');
 let s=8;
 btn.disabled=true;
 btn.textContent=`Wait ${s}s`;
 const t=setInterval(()=>{
   s--;
   bar.style.width=((8-s)/8*100)+'%';
   if(s>0){btn.textContent=`Wait ${s}s`;}
   else{
     clearInterval(t);
     btn.disabled=false;
     btn.textContent=btn.dataset.label;
     btn.onclick=()=>location.href=nextUrl;
   }
 },1000);
}
