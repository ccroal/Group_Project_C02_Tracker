const CanvasView = function(){
}

CanvasView.prototype.render = function () {
  const canvas = document.querySelector('#main-canvas');
  if (!canvas) return;
  console.log('canvas', canvas);
  const context = canvas.getContext('2d');
  context.font = '40pt Nanum Brush Script';
  context.textAlign = "left";

  context.fillText('You are becoming more green!', 150, 100);


  console.log('context', context);


  const img = document.createElement('img');

  img.src = "images/leaf.png"
  console.log('img', img);
  context.drawImage(img, 50, 50);


  // const drawCircle = function(x, y){
  //   context.beginPath();
  //   context.arc(x, y, 50, 0, Math.PI*2, true);
  //   context.stroke()
  // }

  canvas.addEventListener('mousemove', (evt) => {
    console.log('clicked', evt);
    drawImage(evt.x, evt.y);
    canvas.onclick = function (evt) {
        var offX = evt.layerX - canvas.offsetLeft;
        var offY = evt.layerY - canvas.offsetTop;
    }

  })

  const drawImage = function(x, y){
    context.drawImage(img, x, y, 100, 100)

  }
//   $('#main-canvas').mousedown(function(e){
//   var mouseX = e.pageX - this.offsetLeft;
//   var mouseY = e.pageY - this.offsetTop;
//
//   paint = true;
//   addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//   redraw();
// });
//
// $('#main-canvas').mousemove(function(e){
//   if(paint){
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//     redraw();
//   }
// });

  // canvas.addEventListener('click', (event) => {
  //   console.log('clicked', event);
  //   drawImage(event.x, event.y);
//     var posX = canvas.offsetLeft+30;
// var posY = canvas.offsetTop+500;
  // })
};

module.exports = CanvasView;
