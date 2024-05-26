function cursor() {
    var cursor = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    var vdo = document.querySelector("video")
    var img = document.querySelector(".image")

document.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.x+10 +"px"
    cursor.style.top = dets.y-5 +"px"
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
        // markers:true,
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
        // markers:true,
        start:"top -5%",
        end:"top 0%",
        scrub:2
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})


//page3 timeline function

var tl3 = gsap.timeline({
    x:-100,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 15%",
        end:"top 10%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor: "#0F0D0D"
})



var tl4 = gsap.timeline({
    duration:"10s",
    scrollTrigger:{
        trigger:".page3-part1",
        scroller:".main",
        // markers:true,
        start: "top 0%",
        end: "top -100%",
        scrub:3
    }
})

tl4.from(".page3-part1 img",{
    x: 100,
    y: -100   
},"p4")
tl4.from(".page3-part2 img",{
    x: -100, 
    y: -100   
},"p4")
tl4.from(".page3-part1 video",{
    x: -100, 
    y: 100   
},"p4")
tl4.from(".page3-part2 video",{
    x: 100, 
    y: -200   
},"p4")
tl4.from(".page3-part3-btn",{
    duration:2,
    x:200,
    y:200
})

gsap.to(".footer",{
    y: -400,
    scrollTrigger:{
        trigger:".footer",
        scroller:".main",
        // markers:true,
        start: "top 30%",
        end: "top 0%",
        scrub:3
    }
})



var cursor = document.querySelector(".cursor")
var boxes = document.querySelectorAll(".page5-box");
boxes.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        var att = elem.getAttribute("data-image")
        cursor.style.width = "300px"
        cursor.style.height = "250px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
        cursor.style.mixBlendMode= "normal";
    })
    elem.addEventListener("mouseleave",()=>{
        elem.style.backgroundColor= "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        cursor.style.mixBlendMode= "difference";
    })
})

var h4 = document.querySelectorAll(".nav h4")
var purple = document.querySelector(".purple")

h4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        purple.style.display = "block"
        purple.style.opacity = "1"

    })
    elem.addEventListener("mouseleave",()=>{
        purple.style.display = "none"
        purple.style.opacity = "0"

    })
})


var img = document.querySelectorAll(".img")
var crsr = document.querySelector(".cursor")

img.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.width = "40px"
        crsr.style.height = "40px"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.width = "20px"
        crsr.style.height = "20px"
    })
})
