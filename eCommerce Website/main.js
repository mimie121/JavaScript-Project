const bar = document.getElementById('bar');
const close = document.getElementById('close-bar');
const nav = document.getElementById('navigation');


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  
})
}

if (close) {
  close.addEventListener('click', () => {
      nav.classList.remove('active');

})
}


const mainImg = document.getElementById('main-img');
const smailImg = document.getElementsByClassName('smail-img');

smailImg[0].onclick = function(){
  mainImg.src = smailImg[0].src;
}

smailImg[1].onclick = function(){
  mainImg.src = smailImg[1].src;
}

smailImg[2].onclick = function(){
  mainImg.src = smailImg[2].src;
}

smailImg[3].onclick = function(){
  mainImg.src = smailImg[3].src;
}