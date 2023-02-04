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

// learn html page
let listBtn = document.querySelector(".list-btn");
let htmlList = document.querySelector("#learn-here-con .con .list");

listBtn.addEventListener("click", () => {
  htmlList.classList.toggle("open");
});
// learn html page
let btn = document.querySelector(".list-btn");
let list = document.querySelector(" .list");
let icon = document.querySelector(".icon i");
btn.addEventListener("click", () => {
  list.classList.toggle("open");
  icon.classList.toggle("icon-closed");
    listBtns.forEach((e) => {
      e.style.color = "#fff";
    });
});

let data = [
  {
    id: 0,
    name: "Introduction",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vPaumzgRNKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    lesson: `
    <article>
                <h1> <span> HTML ما هي ال</span></h1>
                <h2>hypertext markup language -</h2>
                <h2>    تعتبر الهيكل االعظمي بتاع الموقع بتاعك -</h2>
                <h2>هي اساس اي موقع ومن غيرها مش هنعرف نعمل اي حاجه -</h2>
            </article>

            <article>
                <h1> <span> Why HTML</span></h1>
                <h2>front-end بنستخدمها في ال -</h2>
                <h2>back-end بنستخدمها في ال -</h2>
                <h2>mobile dev بنستخدمها في ال -</h2>
                <h2>reports بنستخدمها في ال -</h2>
                <h2></h2>
                <h2></h2>
            </article>
    `,
  },
  {
    id: 1,
    name: "Set the enviroment",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eEh87kw1HqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    lesson: `
    <article>
      <h1> <span> text editors</span></h1>
        <h2>برامج بنستخدمها عشان نكتب الكود بتاعنا وفي اضافات كتيرة بتسهل الشغل بتاعنا -</h2>
        <h2>  
         <a target=_blank href="https://atom.en.uptodown.com/windows">Atom</a> وتاني برنامج هو  <a target=_blank href="https://code.visualstudio.com/download">VS Code</a> عندك برنامجين حلويين جدا اول برنامج -
        </h2>
        <h2><a target=_blank href="https://code.visualstudio.com/download">للتحميل اضغط هنا</a> VS Code في الشرح بتاعنا هنستخدم -</h2>
        <h2>زي الفيديو وبعد نفتح البرنامج عادي install بعد كدا هنعمل -</h2>
    </article>

    <article>
      <h1> <span>الاضافات</span></h1>
      <h2><mark>live server</mark> اول اضافة معانا هي -</h2>
      <h2>بتسهل شغلنا جدا مش كل شويه هنعمل ريفرش للصفحة بتاعتنا <mark>Live server</mark> -</h2>
      <h2><mark>material icon</mark> تاني اضافة معانا هي -</h2>
      <h2>بتخلي صورة الملفات اللي هنعملها شكلها حلو ونعرف نميز بسرعة بين الملفات بتاعتنا -</h2>
      <h2><mark>Prettier</mark> تالت اضافة هي -</h2>
      <h2>بتخلي الكود بتاعنا منظم وفيه الوان من الاخر بيخلي شكلو حلو وسهل للقراءة -</h2>
    </article>
    <article>
      <h1> <span>HTML انشاء ملف</span></h1>
      <h2>هتختار مكان في الويندوز بتاعك وتعمل فيه فولدر عشان تحط فيه كل الملفات -</h2>
      <h2>VS Code بعد كدا نفتحو جوا -</h2>
      <h2><mark>filename.html</mark> وننشاء ملف باسم -</h2>
      <h2>زي ما هنشوف في الفيديو <mark>live server</mark> وبعد كدا نفتح الملف بتاعنا بال -</h2>
    </article>
    `,
  },
  {
    id: 2,
    name: "DocType & HTML Tags",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NNlWdra38Wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    lesson: `
    <article>
                <h1> <span> HTML ما هي ال</span></h1>
                <h2>hypertext markup language -</h2>
                <h2>    تعتبر الهيكل االعظمي بتاع الموقع بتاعك -</h2>
                <h2>هي اساس اي موقع ومن غيرها مش هنعرف نعمل اي حاجه -</h2>
            </article>

            <article>
                <h1> <span> Why HTML</span></h1>
                <h2>front-end بنستخدمها في ال -</h2>
                <h2>back-end بنستخدمها في ال -</h2>
                <h2>mobile dev بنستخدمها في ال -</h2>
                <h2>reports بنستخدمها في ال -</h2>
                <h2></h2>
                <h2></h2>
            </article>
    `,
  },
];

let dataPlace = document.querySelector(".con");
let listPutOn = document.querySelector(".list-items");

for (let i = 0; i < data.length; i++) {
  let video = `
  <div  id="html-video-${i}" class="html-video">
        <div class="title">
          <h1>${data[i].name}</h1>
          <div class="video">
          ${data[i].link}
          </div>
          <div class="lesson">
            ${data[i].lesson}
          </div>
            </div>
        </div>
  `;
  let listItem = `
    <h2><button><a href="#html-video-${i}">${i}- ${data[i].name}</a></button></h2>
  `;
  dataPlace.innerHTML+=video;
  listPutOn.innerHTML+=listItem;
}

//make the active

let listBtns =document.querySelectorAll(".list-items h2 button a");
let area = document.querySelectorAll(".html-video");

listBtns.forEach(e=>{
  e.addEventListener("click",()=>{
    
      listBtns.forEach((e) => {
        e.style.color = "#fff";
        list.classList.toggle("open");
        icon.classList.toggle("icon-closed");
      });
      e.style.color = "crimson";
  })
})











