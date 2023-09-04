


let title = document.getElementsByClassName('title')[0];
let block = document.getElementsByClassName('block');

for (var i=1; i<100; i++){
    title.innerHTML +=  "<div class='block'></div>";
    block[i].style.transform  = "rotate("+ 3.6* i +"deg)";
    block[i].style.animationDelay=`${i/30}s`;

}

let body = document.querySelector('.body');
body.innerText=0;

let target  =+body.getAttribute('data-target');

let numberBody = ()=> {
    let value= +body.innerText;

    if(value <target){
        body.innerText = Math.ceil(value +1);
        setTimeout(()=>{
            numberBody()
        },30)
    }
      
    }
    numberBody()
    
