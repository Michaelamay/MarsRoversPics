sendApiRequest()

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=D52GrrGbtuaqFg0YE8YQkvOPKHRhfaX219kA1Qih`);
  console.log(response)
  let data = await response.json()
  console.log(data);
  useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  var i = 0;
  myLoop(i, data);
}

//do functions below multiple times to simulate new images on screen
function myLoop(num, data) {

  //create function inside of parameter.
  setTimeout(function () {
      console.log(num);
      //recursive function called num x.
      num++;
      //optimal num = 38.
      if (num < 38) {
          myLoop(num, data);
          pictureShow(data);
      }
  }, 3500)
}

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//creates the syntax send to grid-container for pictures to being show
function pictureShow(data) {

  var randomNum = randomIntFromInterval(0, 855);
  var randomNum2 = randomIntFromInterval(0, 855);
  var randomNum3 = randomIntFromInterval(0, 855);
  console.log(randomNum);

  var linkData = data.photos[randomNum].img_src;
  var linkData2 = data.photos[randomNum2].img_src;
  var linkData3 = data.photos[randomNum3].img_src;

  var imageData = "<div><img src=" + linkData + "></div>";
  var imageData2 = "<div><img src=" + linkData2 + "></div>";
  var imageData3 = "<div><img src=" + linkData3 + "></div>";

  document.querySelector(".grid-container").innerHTML = imageData;
  document.querySelector(".grid-container").innerHTML += imageData2;
  document.querySelector(".grid-container").innerHTML += imageData3;
}



