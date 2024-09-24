        const apiKey="47656b0ec1ae8b86c697cef51ee433d1";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const wheaterIcon=document.querySelector(".weather-icon");


        async function checkWheater(city) {
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{


            let data=await response.json();

           // console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

            //it can with switch too
            if(data.weather[0].main=="Clouds")
                wheaterIcon.src="images/clouds.png";
            if(data.weather[0].main=="Clear")
                wheaterIcon.src="images/clear.png";
            if(data.weather[0].main=="Rain")
                wheaterIcon.src="images/rain.png";
            if(data.weather[0].main=="Drizzle")
                wheaterIcon.src="images/drizzle.png";
            if(data.weather[0].main=="Mist")
                wheaterIcon.src="images/mist.png";

                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
            }
        }
        searchBtn.addEventListener("click",()=>{
            checkWheater(searchBox.value);
        }
    
        );
       
       