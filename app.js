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