let powerup = document.getElementById('powerup');
let interval_id;
let x_incr = 1;
let y_incr = 3;

function init() {
    update_color();
    powerup.style.position = 'absolute';
    //document.body.style.background = '#4d4d4d';
    setInterval(frame, 5); //run frame every 5 ms
}

function update_color() {
    let color = Math.round((Math.random() * 100));
    powerup.style.fill = `hsl(${color},100%,50%)`;
}

function handle_collision() {
    let powerup_height = powerup.offsetHeight; 
    //offsetHeight returns the height of an element, including vertical padding and borders, as an integer
    let powerup_width = powerup.offsetWidth;
    let left = powerup.offsetLeft; 
    //returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.
    let top = powerup.offsetTop;
    const container = document.querySelector(".container");
    console.log(container.innerHeight);
    let win_height = container.offsetHeight; //window.innerHeight;
    let win_width = container.offsetWidth//window.innerWidth;
  
    if (left <= 0 || left + powerup_width >= win_width) { //if doesnt got out of bound on left or on the right
      x_incr = ~x_incr + 1;
      //x_incr += 1;
      update_color();
    }
    if (top <= 0 || top + powerup_height >= win_height) { //if doesnt got out of bound on bottom or on the top
      y_incr = ~y_incr + 1;
      //y_incr += 1;
      update_color();
    }
  }

function frame() {
    handle_collision();
    // console.log("x", powerup.offsetTop);
    // console.log("y", powerup.offsetLeft);
    powerup.style.top = powerup.offsetTop + y_incr;
    powerup.style.left = powerup.offsetLeft + x_incr;
}

init();