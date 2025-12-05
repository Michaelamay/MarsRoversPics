sendApiRequest()

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){

  let todayDate = new Date();
  let modifieddate = "";
  modifieddate += todayDate.getFullYear() + "-" + todayDate.getMonth() + "-" + todayDate.getDate();

  const temp = `https://api.nasa.gov/planetary/apod?api_key=D52GrrGbtuaqFg0YE8YQkvOPKHRhfaX219kA1Qih&date=`+modifieddate;

  console.log("temp: " + temp);

  //note API key; must renew every so often
  let response = await fetch(temp);

  console.log("response: " + response)

  let data = await response.json();

  console.log("data: " + data)

  //loop over json object
  for(const key in data){

      //console.log(`${key}: ${data[key]}`)

      const url = data[key];

      if(key == "url"){

        const url = data[key];

        console.log("url: "+ url);

        pictureShow(url);

      }
  }
}

function pictureShow(linkData){

  var imageData = "<div><img src=" + linkData + "></div>";

  console.log("imageData: "+ imageData);

  document.querySelector(".container").innerHTML = imageData;

}