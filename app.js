const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const PORTFOLIO = document.querySelector(".PORTFOLIO");


const t1 = new TimelineMax();

t1.fromTo(hero,1, {height:"0%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero,1.2, {width:"100%"}, {width: "70%", ease: Power2.easeInOut})
.fromTo(slider,1.2, {x: "-100%"}, {x: '0%',ease: Power2.easeInOut}, "-=1.2")
.fromTo(PORTFOLIO,0.5,{opacity: 0, x:30}, {opacity: 1, x: 0}, "-=1")