lucide.createIcons();

let observer=new IntersectionObserver((entries)=>{
 entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } })
},{threshold:0.15});
document.querySelectorAll('.slide-in,.slide-right,.slide-left').forEach(el=>observer.observe(el));

let clinicWhatsApp="218923761737";
let selectedDay=""; let selectedHour="";
let cal=document.getElementById("cal");

["السبت 21-09","الاحد 22-09","الاثنين 23-09","الثلاثاء 24-09","الاربعاء 25-09","الخميس 26-09"].forEach(d=>{
 let col=document.createElement("div"); col.className="col-4";
 col.innerHTML=`<div class="day">${d}</div>`;
 col.onclick=()=>{
  document.querySelectorAll(".day").forEach(x=>x.classList.remove("active"));
  col.querySelector(".day").classList.add("active");
  selectedDay=d;
 };
 cal.appendChild(col);
});

let hoursDiv=document.getElementById("hours");
["10:00","10:30","11:00","11:30","12:00","02:00","02:30","03:00"].forEach(h=>{
 let b=document.createElement("div"); b.className="hour"; b.innerText=h;
 b.onclick=()=>{
  document.querySelectorAll(".hour").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  selectedHour=h;
 };
 hoursDiv.appendChild(b);
});

function book(){
 let name=document.getElementById("name").value.trim();
 let phone=document.getElementById("phone").value.trim();
 let service=document.getElementById("service").value;
 let doctor=document.getElementById("doctor").value;
 if(!selectedDay||!selectedHour||!name||!phone){
  alert("اختار اليوم والساعة واكتب اسمك ورقمك");
  return;
 }
 let msg=`حجز جديد - عيادة الابتسامة%0A%0Aالمريض: ${name}%0Aالخدمة: ${service}%0Aالدكتور: ${doctor}%0Aاليوم: ${selectedDay}%0Aالساعة: ${selectedHour}%0Aرقمه: ${phone}`;
 window.open(`https://wa.me/${clinicWhatsApp}?text=${msg}`,"_blank");
}