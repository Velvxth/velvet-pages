/*=========================================
            VELV PAGES
          JavaScript v2
=========================================*/

// Fade in sections when scrolling

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{
observer.observe(section);
});

// Smooth scrolling

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});

// Floating particles

const particleCount = 40;

for(let i=0;i<particleCount;i++){

const particle=document.createElement("span");

particle.classList.add("particle");

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=
(10+Math.random()*20)+"s";

particle.style.animationDelay=
Math.random()*10+"s";

particle.style.opacity=Math.random()*0.5;

particle.style.transform=
`scale(${Math.random()+0.2})`;

document.body.appendChild(particle);

}

// Hero parallax

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

hero.style.backgroundPosition=
`center ${scroll*0.35}px`;

});

// Button ripple

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(
this.clientWidth,
this.clientHeight
);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=
e.offsetX-diameter/2+"px";

circle.style.top=
e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// Footer year

const footer=document.querySelector("footer");

if(footer){

const year=document.createElement("p");

year.innerHTML=
`© ${new Date().getFullYear()} Velv Pages`;

year.style.marginTop="20px";

footer.appendChild(year);

}