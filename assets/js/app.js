const mario = document.querySelector('#avatar');
const coin = document.querySelector('#coin');

let score = 0;

const body = document.querySelector('body');
const header = document.createElement('h1');
body.insertBefore(header, mario);
header.innerHTML = `Score: ${score}`

const clientRectMario = mario.getBoundingClientRect();
const clientRectCoin= coin.getBoundingClientRect();
let x = clientRectMario.left;
let y = clientRectMario.top;

let coinX = clientRectCoin.left + 100;
let coinY = clientRectCoin.top + 100;

coin.style.top = coinY + 'px';
coin.style.left = coinX + 'px';

const isMoving = (e) => {
  e.preventDefault();
  
  if(e.which === 37){
    console.log('go left')
    x -= 50;
    mario.style.transform = `scale(-1, 1)`;
  }else if(e.which === 38){
    y -= 50;
    console.log('go top')
    
  }else if(e.which === 39){
      console.log('go right')
      x += 50;
      mario.style.transform = `scale(1, 1)`;
    
  }else if(e.which === 40){
    console.log('go down')
    y += 50;
  }else{
    x = x;
    y = y;
  }

  mario.style.left = x + 'px';
  mario.style.top = y + 'px';

    if(y + clientRectMario.height > coinY && y < coinY + clientRectCoin.height && x + clientRectMario.width > coinX && x < coinX + clientRectCoin.width){
      score += 1;
      coinX = Math.floor(Math.random() * (screen.width - clientRectCoin.width));
      coinY = Math.floor(Math.random() * (screen.height - clientRectCoin.height));
      coin.style.left = coinX + 'px';
      coin.style.top = coinY + 'px';
    }

  header.innerHTML = `Score: ${score}`
}

window.addEventListener('keydown', isMoving);

