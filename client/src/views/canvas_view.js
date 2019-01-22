const CanvasView = function(){
}

CanvasView.prototype.render = function () {
  const canvas = document.querySelector('#main-canvas');
  console.log('canvas', canvas);
  const context = canvas.getContext('2d');



  context.font = "20px Avenir";
context.fillText("You are one step closer to becoming more green...", 10, 50);

  const img = document.createElement('img');
  img.src = "images/leaf_vector.png"

  const drawCircle = function(x, y){
  context.drawImage(img, x, y, 90, 90)
}

  canvas.addEventListener('click', (event) => {
    console.log('clicked', event);
    drawCircle(event.x, event.y);
  })




  const draw = function(){

  }

  img.addEventListener('load', draw);

  const changeColor = function(){
  context.strokeStyle = this.value;

  }



};

module.exports = CanvasView;
