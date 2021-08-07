const ddown = document.querySelector('#ddown')


var x =0
setInterval(()=>{
    if(x%2===0){

        ddown.style.color = "black"
        x = x +1;
    }
    else if(x%2 === 1){
        ddown.style.color = "white"
        x = x +1;
    }
},2000)


const menu = document.querySelector('#menu')
const nav = document.querySelector('#nav')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const name1 = document.querySelector('#name')

var c = 1;
menu.addEventListener('click',()=>{
    console.log("clicked")
    if(c%2 === 1){
        nav.style.height = '30vh'
        upper.style.height = '20%'
        lower.style.height = '80%'
        name1.style.display = 'inline-block'
        c = c+1;
        console.log(c)
    }
    else if (c%2 === 0){
        nav.style.height = '10vh'
        upper.style.height = '100%'
        lower.style.height = '0px'
        name1.style.display = 'none'

        c = c+1;

    }
})