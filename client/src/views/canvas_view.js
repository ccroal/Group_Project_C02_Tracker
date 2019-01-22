const CanvasView = function(){
}

CanvasView.prototype.render = function () {
  const canvas = document.querySelector('#main-canvas');
  console.log('canvas', canvas);
  const context = canvas.getContext('2d');

  const img = document.createElement('img');
  img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"

  const drawCircle = function(x, y){
  context.drawImage(img, x, y, 90, 90)
}

  canvas.addEventListener('mousemove', (event) => {
    console.log('move', event);
    drawCircle(event.x, event.y);
  })




  const drawDoge = function(){

  }

  img.addEventListener('load', drawDoge);

  const changeColor = function(){
  context.strokeStyle = this.value;

  }


};

module.exports = CanvasView;
