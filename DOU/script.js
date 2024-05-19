function cursor() {
    var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
var vdo = document.querySelector("video")

main.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})

vdo.addEventListener("mouseenter", ()=>{

    cursor.style.width = "100px"
    cursor.style.height = "30px"
})
vdo.addEventListener("mouseenter", ()=>{
    cursor.style.width = "0"
    cursor.style.height = "0"
    cursor.style.fontSize = "5vw"
    cursor.style.fontWeight = "600"
    cursor.innerHTML = "PLAY VIDEO"

})
vdo.addEventListener("mouseleave", ()=>{
    cursor.innerHTML = ""
    cursor.style.width = "20px"
    cursor.style.height = "20px"
})

}
cursor()

function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()


var tl =gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-100,  
},"p1")

tl.to(".page1 h2",{
    x:100,  
},"p1")

tl.to(".page1 video",{
    width:"90%"
},"p1")


//page2 timeline function

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        markers:true,
        start:"top -10%",
        end:"top 0%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})




//page3 timeline function

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor: "#0F0D0D"
})
