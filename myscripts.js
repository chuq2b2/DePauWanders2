window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('header');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });

const container = document.querySelector('.container');
const links = document.querySelector('.links');
