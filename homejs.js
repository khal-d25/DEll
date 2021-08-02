const lmenu = document.querySelector('#lmenu')
const headerimg = document.querySelector('#headerimg')
const callbtn = document.querySelector('#headercall')
const scroll = document.querySelector('#scroll')
const picture = document.querySelectorAll('.picture')


const lmenu_style = window.getComputedStyle(lmenu)
const height =  lmenu_style.getPropertyValue('height')
console.log(height)
var scroll_style = window.getComputedStyle(scroll)
var width =  scroll_style.getPropertyValue('width')
// console.log(width)


lmenu.style.width = height;
lmenu.style.height = height;
headerimg.style.height=height;
callbtn.style.width=height;
callbtn.style.height=height;


picture.forEach((e)=>{
    e.style.width = width/2;
})

