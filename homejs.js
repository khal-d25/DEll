const lmenu = document.querySelector('#lmenu')
const headerimg = document.querySelector('#headerimg')
const callbtn = document.querySelector('#headercall')
const scroll = document.querySelector('#scroll')
const picture = document.querySelectorAll('.picture')


var lmenu_style = window.getComputedStyle(lmenu)
var height =  lmenu_style.getPropertyValue('height')
var scroll_style = window.getComputedStyle(scroll)
var width =  scroll_style.getPropertyValue('width')
console.log(width)


lmenu.style.width = height;
headerimg.style.height=height;
callbtn.style.width=height;
callbtn.style.height=height;


picture.forEach((e)=>{
    e.style.width = width;
})

const n = document.querySelector('#n')
const p = document.querySelector('#p')
const catcat =document.querySelector('#catcat')

var x =0 ;

n.addEventListener('click',()=>{
    if(x<11){
        console.log("left")
        x = x+width;
        catcat.style.transform = `translate(-${x}px,0)`;
        
    }
    
})

p.addEventListener('click',()=>{
    if(x>0){
        console.log("right")

        x = x-width;
        catcat.style.transform = `translate(-${x}px,0)`;

    }
    
})
