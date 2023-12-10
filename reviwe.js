const review=[
    {
        id:1,
        name:"sarah jones",
        job:" ui/ux designer",
        img: "/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
    },
{
    id:2,
    name:"stephanie john",
    job:" contactor",
    img: "/img/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:3,
    name:"peter servoic" ,
    job:" Software Engineer ",
    img:"/img/petr-sevcovic-e12wQLAjQi0-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:4,
    name:"loreta nackos" ,
    job:" web designer",
    img:"/img/jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:5,
    name:"stephanie john" ,
    job:" contactor",
    img:"/img/brooke-cagle-NoRsyXmHGpI-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:6,
    name:"lagundoye juwon",
    job:"font-end developer",
    img:"/img/cropeed.jpeg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
}
];
//select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const randomBtn = document.querySelector(".random");

//set starting items
let currentItem = 0;

//load initial item 

window.addEventListener("DOMContentLoaded", () => {
   
    showPerson();
});
// show person based on item 

function showPerson() {
    const item = review[currentItem];
    img.alt = item.name;
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", () => {
    currentItem++;

    if(currentItem >= review.length){
        currentItem = 0;
    }

    showPerson()
});

prevBtn.addEventListener("click", () => {
    currentItem--;
//
    if(currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson()
})

//show random person 
randomBtn.addEventListener("click", () => {
     currentItem = Math.floor(Math.random() * review.length);

     showPerson();
})