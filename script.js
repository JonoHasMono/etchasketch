const gridContainer = document.querySelector(`#grid`)
const colorPalette = document.querySelector(`#palette`)

let mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}


function colors() {

  // Black Color
  let color_black = document.createElement("a");
  color_black.className = "colorBlack";
  color_black.addEventListener('click', () => {
    chosenColor = "black";
  })
  palette.appendChild(color_black);

  // White Color
  let color_white = document.createElement("a");
  color_white.className = "colorWhite";
  color_white.addEventListener('click', () => {
    chosenColor = "white";
  })
  palette.appendChild(color_white);

  // Red Color
  let color_red = document.createElement("a");
  color_red.className = "colorRed";
  color_red.addEventListener('click', () => {
    chosenColor = "red";
  })
  palette.appendChild(color_red);

  // Blue Color
  let color_blue = document.createElement("a");
  color_blue.className = "colorBlue";
  color_blue.addEventListener('click', () => {
    chosenColor = "blue";
  })
  palette.appendChild(color_blue);

  // Green Color
  let color_green = document.createElement("a");
  color_green.className = "colorGreen";
  color_green.addEventListener('click', () => {
    chosenColor = "green";
  })
  palette.appendChild(color_green);

  // Yellow Color
  let color_yellow = document.createElement("a");
  color_yellow.className = "colorYellow";
  color_yellow.addEventListener('click', () => {
    chosenColor = "yellow";
  })
  palette.appendChild(color_yellow);

  // Rainbow Color
  let color_rainbow = document.createElement("a");
  color_rainbow.className = "colorRainbow";
  color_rainbow.style.animation = 'rainbow 3s infinite';
  color_rainbow.addEventListener('click', () => {
    chosenColor = "rainbow";
  })
  palette.appendChild(color_rainbow);
}

colors();


function randomColorGenerator () {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function makeGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
      let cell = document.createElement("span");
      // cell.innerText = (c + 1);
      cell.className = "grid-item"
      cell.addEventListener('mousemove', () => {
        if (mouseDown == 1) {
          if (chosenColor == "rainbow" ) {
            cell.style.backgroundColor = randomColorGenerator();
          } else {
            cell.style.backgroundColor = chosenColor;
          }
        }
      });
      grid.appendChild(cell)
    };
    
  };

  
  makeGrid(32, 32);
