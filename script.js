sendApiRequest()

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){

  let todayDate = new Date();

  let modifieddate = "";

  modifieddate += todayDate.getFullYear() + "-" + todayDate.getMonth() + "-" + todayDate.getDate();

  //note API key; must renew every so often
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=D52GrrGbtuaqFg0YE8YQkvOPKHRhfaX219kA1Qih&date=`+modifieddate);

  let data = await response.json();

  //loop over json object
  for(const key in data){

    //console.log(`${key}: ${data[key]}`)

    const url = data[key];

    if(key == "url"){
      const url = data[key];


      pictureShow(url);

      //console.log(url);
    }
    
  }

}

function pictureShow(linkData){

  var imageData = "<div><img src=" + linkData + "></div>";

  console.log(imageData);

  document.querySelector(".container").innerHTML = imageData;

}