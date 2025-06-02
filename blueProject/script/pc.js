//header 영역의 title이 오ㅡㄹㄴ쪽에서 왼쪽으로

const $header = document.querySelectorAll("header .title li");
gsap.from($header, {
  x: 300,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
//화살표가 위에서 아래로 이동, 1번 화살표가 실행 후 2번 화살표 실행
gsap.set(".arrow > p", { y: 0 });
const tl = gsap.timeline({ repeat: -1 });
tl.to(".arrow > p", {
  y: 10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out",
}).to(".arrow > p", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out",
});
//h1태그는 scale이 변경, bounce.out 처리
gsap.from("header>h1",{
    scale:0.7,
    opacity:0,
    duration:1,
    ease: "bounce.out"
});

const $project = document.querySelectorAll("#projects>.nomal");
$project.forEach((article)=>{
    const $item = article.querySelectorAll(".item");
    $item.forEach((item,idx)=>{
    let posY = 90 - idx*15;
    gsap.from(item,{
        y:200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:item,
            start: `top ${posY}%`,
            end: "top 40%",
            scrub: true,
        }
    })
});
});
