// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter()
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


function applyFilter(filterFunction){
  for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[i].length; j++) {
          let rgbString = image[i][j]; 
          let rgbNumbers = rgbStringToArray(rgbString); // Step 2b
          filterFunction(rgbNumbers); 
          rgbString = rgbArrayToString(rgbNumbers); // Step 2d
          image[i][j] = rgbString; // Step 2e
      }
  }
}

applyFilter(reddify);


function applyFilterNoBackground(filterFunction){
  let backgroundColor = image[0][0];

  for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[i].length; j++) {
          if (image[i][j] !== backgroundColor) {
              let rgbString = image[i][j]; // Step 2a
              let rgbNumbers = rgbStringToArray(rgbString); // Step 2b
              filterFunction(rgbNumbers); // Step 4c
              rgbString = rgbArrayToString(rgbNumbers); // Step 2d
              image[i][j] = rgbString; // Step 2e
          }
      }
  }
}

function applyAndRender() {
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  render($("#display"), image);
}


function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}

// TODO 3: Create reddify function
function reddify(rgbNumbers){
  rgbNumbers[RED] = 200;
}


function decreaseBlue(rgbNumbers) {
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50);
}

function increaseGreenByBlue(rgbNumbers) {
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[GREEN] + rgbNumbers[BLUE]);
}

function applyAndRender() {
  applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  render($("#display"), image);
}


