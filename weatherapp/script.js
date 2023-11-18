const apiKey="604774a3e67288c66c1a47a435376c27";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=604774a3e67288c66c1a47a435376c27&q=";
async function checkWheather(city){
    const response=await fetch(apiurl+city);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

}

const searchBtn=document.querySelector(".search button");
searchBtn.addEventListener("click",()=>{
    const searchBox=document.querySelector(".search input");
    checkWheather(searchBox.value);
});