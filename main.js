const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});


menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});


const data = [
  {
    title: "HTML",
    info: "html is the basic of the web world so you have to learn it ",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    link: "/pages/htmlCoursePage.html",
  },
  {
    title: "CSS",
    info: "soon",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    link: "/pages/htmlCoursePage.html",
  },
  {
    title: "JS",
    info: "soon",
    img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    link: "/pages/htmlCoursePage.html",
  },
];


//loop on my data on course section
let courses_contsiner = document.querySelector(".courses-cards");

for (let i = 0; i < data.length; i++) {
    let card = `
        <div class="card">
                <img src=${data[i].img} alt="">
                <div class="card-body">
                    <h1>${data[i].title}</h1>
                    <p>${data[i].info}</p>
                    <button><a href="${data[i].link}">start tour</a></button>
                </div>
            </div>
    `;
    courses_contsiner.innerHTML+=card;
}



let projectsData = [
  {
    dataSet: 2,
    title: "Sign in",
    info: "lorem wef newfnewfn oewfn oewn",
    img: "./img/sign1.jpg",
    siteLink: "https://y-as-7.github.io/sign-up-1/",
    gitHub: "https://github.com/y-as-7/sign-up-1",
    icons: {
      html: "fa-brands fa-html5",
      css: "fa-brands fa-css3-alt",
      js: "none",
    },
  },
  {
    dataSet: 3,
    title: "Train Gym",
    info: "lorem wef newfnewfn oewfn oewn",
    img: "./img/train-gym.jpg",
    siteLink: "https://y-as-7.github.io/train-gym/",
    gitHub: "https://github.com/y-as-7/train-gym",
    icons: {
      html: "fa-brands fa-html5",
      css: "fa-brands fa-css3-alt",
      js: "fa-brands fa-js",
    },
  },
  {
    dataSet: 2,
    title: "Sign in to G-Lab",
    info: "lorem wef newfnewfn oewfn oewn",
    img: "./img/sign2.jpg",
    siteLink: "https://y-as-7.github.io/sign-up-2/",
    gitHub: "https://github.com/y-as-7/sign-up-2",
    icons: {
      html: "fa-brands fa-html5",
      css: "fa-brands fa-css3-alt",
      js: "none",
    },
  },
  {
    dataSet: 3,
    title: "password Generator",
    info: "lorem wef newfnewfn oewfn oewn",
    img: "./img/pass-gen.jpg",
    siteLink: "https://y-as-7.github.io/password-generator/",
    gitHub: "https://github.com/y-as-7/password-generator",
    icons: {
      html: "fa-brands fa-html5",
      css: "fa-brands fa-css3-alt",
      js: "fa-brands fa-js",
    },
  },
  {
    dataSet: 3,
    title: "birth Day counter",
    info: "lorem wef newfnewfn oewfn oewn",
    img: "./img/timer.jpg",
    siteLink: "https://y-as-7.github.io/birthday-counter-down/",
    gitHub: "https://github.com/y-as-7/birthday-counter-down",
    icons: {
      html: "fa-brands fa-html5",
      css: "fa-brands fa-css3-alt",
      js: "fa-brands fa-js",
    },
  },
];


//loop on data on the project
let projectsPlace=document.querySelector("#projects .cards");
for(let i=0 ; i<projectsData.length;i++){
  let projectCard = `
  <div class="card" data-img="${projectsData[i].dataSet}">
                <img src=${projectsData[i].img}  />
                <div class="card-body">
                  <div class="icons">
                    <i class="${projectsData[i].icons.html}"></i>
                    <i class="${projectsData[i].icons.css}"></i>
                    <i class="${projectsData[i].icons.js}"></i>
                  </div>
                  <h1>${projectsData[i].title}</h1>
                  <p>${projectsData[i].info}</p>
                  <div class="links">
                    <a target="_blank" href=${projectsData[i].siteLink}> <i class="fa-solid fa-link"></i> visit the site</a>
                    <a target="_blank" href=${projectsData[i].gitHub}><i class="fa-brands fa-github"></i> git hub</a>
                  </div>
                </div>
            </div>
  
  `;
  projectsPlace.innerHTML+=projectCard;
}






// projects filter 
let btns = document.querySelectorAll("#projects .buttons button");
let imgs = document.querySelectorAll("#projects .cards .card");

for(let i=1 ; i<btns.length; i++){
    btns[i].addEventListener("click", FilterImg);
}

function setActiveBtn(e){
    btns.forEach(btn=>{
        btn.classList.remove("btn-clicked")
    });

    e.target.classList.add("btn-clicked")

}

function FilterImg(e){
    setActiveBtn(e)
    imgs.forEach(img=>{
        img.classList.remove("img-shrink");
        img.classList.add("img-expand")

        const imgType=parseInt(img.dataset.img)
        const btnType=parseInt(e.target.dataset.btn);

        if(imgType!==btnType){
            img.classList.remove("img-expand")
            img.classList.add("img-shrink")
        }
    });

}
btns[0].addEventListener("click",(e)=>{
    setActiveBtn(e);
    imgs.forEach(img=>{
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");
    });
});






















//scrollreveal

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(" #courses h1 ", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal("#courses  p ", {
  delay: 200,
  origin: "top",
});

ScrollReveal().reveal("#courses  p ", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal("   .card ", {
  delay: 200,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal("#projects  h1 ", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal("#projects  button ", {
  delay: 200,
  origin: "left",
});


ScrollReveal().reveal("#aboutMe .con .about h1 ", {
  delay: 200,
  origin: "left",

});
ScrollReveal().reveal("#aboutMe .con .about h2", {
  delay: 200,
  origin: "left",
});

ScrollReveal().reveal("#aboutMe .con .about p", {
  delay: 200,
  origin: "bottom",
});

ScrollReveal().reveal("#aboutMe   h1 ", {
  delay: 200,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(" .skill-con span  ", {
  delay: 200,
  origin: "left",
  interval: 200,
});

ScrollReveal().reveal("#contact   h1 ", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal("#contact   .contact-item", {
  interval: 200,
  delay: 200,
  origin: "left",
});
