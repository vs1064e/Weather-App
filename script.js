const button = document.getElementById("butt")
const input = document.getElementById("city")
const yelo = document.getElementById("real")
const fir = document.getElementById("cityname")
const tempvalueE1 = document.getElementById("temp-value")
const weatherdescriptionE1 = document.getElementById("weatherdescription")

const apikey = "6c6e853568d2951c3d3bc4da187b963a"

button.addEventListener("click",()=>{
    const bar = input.value.trim()
    if (bar === ""){
    return;}
    weatherdisplay(bar)
})

async function weatherdisplay(bar) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${bar}&appid=${apikey}&units=metric`;

    try{
        const response = await fetch(apiurl);
        if(!response.ok){
            throw new Error("City does not exist");
        }
        const data = await response.json()
        actualweather(data)
    }catch(error){
        console.error("DATA NOT RECIEVED",error.message)
        alert(error.message)
    }
}
function actualweather(data){
    if(data && data.main && data.weather && data.name){
        fir.innerText = data.name;
        tempvalueE1.innerText = Math.round(data.main.temp);
        weatherdescriptionE1.innerText = data.weather[0].description;

        yelo.style.display = "block";
    }
}
