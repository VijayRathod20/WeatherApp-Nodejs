const submit = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const cityname = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    console.log("city name"+cityval);
    
    if(cityval === ""){
        cityname.innerText = `please write name of city before search`;
        datahide.classList.add("data_hide");
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=9a9b59224eb964497d4c07ef82c55aeb`;
            const data = await fetch(url);
            const jsondata = await data.json();
            const arrData = [jsondata];
            console.log(jsondata);
            cityname.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:#eccc68"></i>'
            }else if(tempMood == "Clouds"){
                 temp_status.innerHTML = '<i class="fa fa-cloud" style="color:#f1f2f6"></i>'
            }else if(tempMood == "Rain"){
                 temp_status.innerHTML = '<i class="fa fa-cloud-rain" style="color:#a4b0be"></i>'
            }else{
                 temp_status.innerHTML = '<i class="fa fa-cloud" style="color:#fff"></i>'
            }
           datahide.classList.remove("data_hide");
        }catch{
            cityname.innerText = `please enter city name properly!`;
            datahide.classList.add("data_hide");

        }
    }

}

submit.addEventListener("click",getInfo);