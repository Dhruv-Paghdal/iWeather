let dayOrnight;
let icon;
let icon1;
let str1;
let str2;
let str3;
let staticData1;
let staticData2;
let staticData3;
let aqi;
let date;
let latitude;
let longitude;
let mainData;
let aqiData;

function staticWeather(){
    
    document.getElementById("aqiButton").disabled=True;
    
    const api1=`https://api.weatherapi.com/v1/current.json?key=600665fe54fb4b51897145813210707&q=london&aqi=no`;
    const api2=`https://api.weatherapi.com/v1/current.json?key=600665fe54fb4b51897145813210707&q=new_york&aqi=no`;
    const api3=`https://api.weatherapi.com/v1/current.json?key=600665fe54fb4b51897145813210707&q=paris&aqi=no`;

    fetch(api1).then((response)=>{
        return response.json()
    }).then((result)=>{
        staticData1=result;
        if((result["current"]["is_day"])==1){
            dayOrnight="Day";
            icon='<i class="fas fa-sun" style="color: rgba(255, 225, 0, 0.838)"></i>';
        }
        else{
            dayOrnight="Night";
            icon='<i class="fas fa-moon" style="color:rgba(0, 0, 0, 0.580);"></i>';
        }

        str1=`${result["current"]["condition"]["icon"]}`;

        document.getElementById("statiCity1").innerHTML="London";
        document.getElementById("statiCountry1").innerHTML=`${result["location"]["country"]}`;
        document.getElementById("staticTemp1").innerHTML=`${result["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                         "<img src="+str1+">";
        document.getElementById("staticWeather1").innerHTML=`${result["current"]["condition"]["text"]}`;
        document.getElementById("don1").innerHTML=icon+" "+dayOrnight;                                                 
    })

    fetch(api2).then((response)=>{
        return response.json()
    }).then((result)=>{
        staticData2=result;
        if((result["current"]["is_day"])==1){
            dayOrnight="Day";
            icon='<i class="fas fa-sun" style="color: rgba(255, 225, 0, 0.838)"></i>';
        }
        else{
            dayOrnight="Night";
            icon='<i class="fas fa-moon" style="color:rgba(0, 0, 0, 0.580);"></i>';
        }

        str2=`${result["current"]["condition"]["icon"]}`;
        
        document.getElementById("statiCity2").innerHTML="New York";
        document.getElementById("statiCountry2").innerHTML=`${result["location"]["country"]}`;
        document.getElementById("staticTemp2").innerHTML=`${result["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                         "<img src="+str2+">";
        document.getElementById("staticWeather2").innerHTML=`${result["current"]["condition"]["text"]}`;
        document.getElementById("don2").innerHTML=icon+" "+dayOrnight;
    })
    
    fetch(api3).then((response)=>{
        return response.json()
    }).then((result)=>{
        staticData3=result;
        if((result["current"]["is_day"])==1){
            dayOrnight="Day";
            icon='<i class="fas fa-sun" style="color: rgba(255, 225, 0, 0.838)"></i>';
        }
        else{
            dayOrnight="Night";
            icon='<i class="fas fa-moon" style="color:rgba(0, 0, 0, 0.580);"></i>';
        }

        str3=`${result["current"]["condition"]["icon"]}`;
        
        document.getElementById("statiCity3").innerHTML="Paris";
        document.getElementById("statiCountry3").innerHTML=`${result["location"]["country"]}`;
        document.getElementById("staticTemp3").innerHTML=`${result["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                         "<img src="+str3+">";
        document.getElementById("staticWeather3").innerHTML=`${result["current"]["condition"]["text"]}`;
        document.getElementById("don3").innerHTML=icon+" "+dayOrnight;
    })     
}

function getWeather(){
    
    document.getElementById("aqiButton").disables=False;
    
    let location=document.getElementById("place").value;
    let location1=location.toLowerCase();

    document.getElementById("lable1").innerHTML="";
    document.getElementById("detailAQI").innerHTML="";
    
    const apiUser=`https://api.weatherapi.com/v1/current.json?key=600665fe54fb4b51897145813210707&q=${location1}&aqi=yes`;
    
    fetch(apiUser).then((response)=>{
        return response.json()
    }).then((result)=>{
        mainData=result;
        if((result["current"]["is_day"])==1){
            dayOrnight="Day";
            icon='<i class="fas fa-sun" style="color: rgba(255, 225, 0, 0.838)"></i>';
        }
        else{
            dayOrnight="Night";
            icon='<i class="fas fa-moon" style="color:rgba(0, 0, 0, 0.580);"></i>';
        }

        let str4=`${result["current"]["air_quality"]["us-epa-index"]}`;

        if(str4==1){
            aqi="Good";
        }
        else if(str4==2){
            aqi="Moderate";
        }
        else if(str4==3){
            aqi="Unhealthy for sensitive group";
        }
        else if(str4==4){
            aqi="Unhealthy";
        }
        else if(str4==5){
            aqi="Very Unhealthy";
        }
        else if(str4==6){
            aqi="Hazardous";
        }
        else{
            aqi="Undefined";            
        }
        
        let str5=`${result["current"]["condition"]["icon"]}`;

        date=`${result["location"]["localtime"]}`;
        date=date.slice(0, 10);

        let weather=`${result["current"]["condition"]["text"]}`;

        if(weather.length <= 5){
            weather="&nbsp;&nbsp;"+weather+"&nbsp;&nbsp;";
        }

        icon1='<i class="fas fa-leaf" style="color: rgba(45, 201, 45, 0.804)"></i>';

        document.getElementById("location").innerHTML=`${result["location"]["name"]}`;
        document.getElementById("cityTemp").innerHTML=`${result["current"]["temp_c"]}`+"<span>&#176;</span>C";
        document.getElementById("weatherImage").innerHTML="<img src="+str5+">"+weather;
        document.getElementById("date").innerHTML=date;
        document.getElementById("cityName").innerHTML=`${result["location"]["name"]}`;
        document.getElementById("country").innerHTML=`${result["location"]["region"]}`+","+`${result["location"]["country"]}`;
        document.getElementById("cityWeather").innerHTML="Wind: "+`${result["current"]["wind_kph"]}`+"km/h"+","+`${result["current"]["wind_dir"]}`+"<br>"+
                                                          "Pressure: "+`${result["current"]["pressure_mb"]}`+"hPa"+"<br>"+
                                                          "Humidity: "+`${result["current"]["humidity"]}`+"%"+"<br>"+
                                                          "Feelslike: "+`${result["current"]["feelslike_c"]}`+"<span>&#176;</span>C"+"<br>"+
                                                          icon1+"AQI: "+aqi+"<br>"+
                                                          icon+" "+dayOrnight;
    })
}

function getPosition(){
    
    document.getElementById("aqiButton").disabled=False;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Your browser doesn't support Geolocation.")
    }
}

function showPosition(position){
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    document.getElementById("lable1").innerHTML="";
    document.getElementById("detailAQI").innerHTML="";

    const apiUserLocation=`https://api.weatherapi.com/v1/current.json?key=600665fe54fb4b51897145813210707&q=${latitude},${longitude}&aqi=yes`;
    
    fetch(apiUserLocation).then((response)=>{
        return response.json()
    }).then((result)=>{
        mainData=result;
        if((result["current"]["is_day"])==1){
            dayOrnight="Day";
            icon='<i class="fas fa-sun" style="color: rgba(255, 225, 0, 0.838)"></i>';
        }
        else{
            dayOrnight="Night";
            icon='<i class="fas fa-moon" style="color:rgba(0, 0, 0, 0.580);"></i>';
        }

        let str4=`${result["current"]["air_quality"]["us-epa-index"]}`;

        if(str4==1){
            aqi="Good";
        }
        else if(str4==2){
            aqi="Moderate";
        }
        else if(str4==3){
            aqi="Unhealthy for sensitive group";
        }
        else if(str4==4){
            aqi="Unhealthy";
        }
        else if(str4==5){
            aqi="Very Unhealthy";
        }
        else if(str4==6){
            aqi="Hazardous";
        }
        else{
            aqi="Undefined";            
        }
        
        let str5=`${result["current"]["condition"]["icon"]}`;
        document.getElementById("place").value=result["location"]["name"];

        date=`${result["location"]["localtime"]}`;
        date=date.slice(0, 10);

        let weather=`${result["current"]["condition"]["text"]}`;

        if(weather.length <= 5){
            weather="&nbsp;&nbsp;"+weather+"&nbsp;&nbsp;";
        }

        icon1='<i class="fas fa-leaf" style="color: rgba(45, 201, 45, 0.804)"></i>';

        document.getElementById("location").innerHTML=`${result["location"]["name"]}`;
        document.getElementById("cityTemp").innerHTML=`${result["current"]["temp_c"]}`+"<span>&#176;</span>C";
        document.getElementById("weatherImage").innerHTML="<img src="+str5+">"+weather;
        document.getElementById("date").innerHTML=date;
        document.getElementById("cityName").innerHTML=`${result["location"]["name"]}`;
        document.getElementById("country").innerHTML=`${result["location"]["region"]}`+","+`${result["location"]["country"]}`;
        document.getElementById("cityWeather").innerHTML="Wind: "+`${result["current"]["wind_kph"]}`+"km/h"+","+`${result["current"]["wind_dir"]}`+"<br>"+
                                                         "Pressure: "+`${result["current"]["pressure_mb"]}`+"hPa"+"<br>"+
                                                         "Humidity: "+`${result["current"]["humidity"]}`+"%"+"<br>"+
                                                         "Feelslike: "+`${result["current"]["feelslike_c"]}`+"<span>&#176;</span>C"+"<br>"+
                                                         icon1+"AQI: "+aqi+"<br>"+
                                                         icon+" "+dayOrnight;
    })
}

function toCelcius(){
    document.getElementById("cityTemp").innerHTML=`${mainData["current"]["temp_c"]}`+"<span>&#176;</span>C";   
    document.getElementById("cityWeather").innerHTML="Wind: "+`${mainData["current"]["wind_kph"]}`+"km/h"+","+`${mainData["current"]["wind_dir"]}`+"<br>"+
                                                     "Pressure: "+`${mainData["current"]["pressure_mb"]}`+"hPa"+"<br>"+
                                                     "Humidity: "+`${mainData["current"]["humidity"]}`+"%"+"<br>"+
                                                     "Feelslike: "+`${mainData["current"]["feelslike_c"]}`+"<span>&#176;</span>C"+"<br>"+
                                                     icon1+"AQI: "+aqi+"<br>"+
                                                     icon+" "+dayOrnight;
    document.getElementById("staticTemp1").innerHTML=`${staticData1["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                     "<img src="+str1+">";
    document.getElementById("staticTemp2").innerHTML=`${staticData2["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                     "<img src="+str2+">";
    document.getElementById("staticTemp3").innerHTML=`${staticData3["current"]["temp_c"]}`+"<span>&#176;</span>C"+
                                                     "<img src="+str3+">";
   
}

function toFarenheit(){
    document.getElementById("cityTemp").innerHTML=`${mainData["current"]["temp_f"]}`+"<span>&#176;</span>F";
    document.getElementById("cityWeather").innerHTML="Wind: "+`${mainData["current"]["wind_kph"]}`+"km/h"+","+`${mainData["current"]["wind_dir"]}`+"<br>"+
                                                     "Pressure: "+`${mainData["current"]["pressure_mb"]}`+"hPa"+"<br>"+
                                                     "Humidity: "+`${mainData["current"]["humidity"]}`+"%"+"<br>"+
                                                     "Feelslike: "+`${mainData["current"]["feelslike_f"]}`+"<span>&#176;</span>F"+"<br>"+
                                                     icon1+"AQI: "+aqi+"<br>"+
                                                     icon+" "+dayOrnight;
    document.getElementById("staticTemp1").innerHTML=`${staticData1["current"]["temp_f"]}`+"<span>&#176;</span>F"+
                                                     "<img src="+str1+">";
    document.getElementById("staticTemp2").innerHTML=`${staticData2["current"]["temp_f"]}`+"<span>&#176;</span>F"+
                                                     "<img src="+str2+">";
    document.getElementById("staticTemp3").innerHTML=`${staticData3["current"]["temp_f"]}`+"<span>&#176;</span>F"+
                                                     "<img src="+str3+">";
}

function aqiDetail(){
    document.getElementById("lable1").innerHTML="Detail AQI";
    aqiData=`<div class="card m-3" 
                style="width: 18rem;
                      max-width: 640px;
                      border:0px solid transparent; 
                      border-radius:10px; 
                      box-shadow:0px 0px 20px rgba(0, 0, 0, 0.199);"
                >
                <img src="images/img3.png" class="card-img-top">
                <div class="card-body">
                <p> <b>O<sub>3</sub></b> &nbsp;${parseInt(mainData["current"]["air_quality"]["o3"]) }μg/m<sup>3</sup></p>
                <p> <b>NO<sub>2</sub></b> &nbsp;${parseInt(mainData["current"]["air_quality"]["no2"]) }μg/m<sup>3</sup></p>
                <p> <b>SO<sub>2</sub></b> &nbsp;${parseInt(mainData["current"]["air_quality"]["so2"]) }μg/m<sup>3</sup></p>
                <p> <b>CO</b> &nbsp;${parseInt(mainData["current"]["air_quality"]["co"]) }μg/m<sup>3</sup></p>
                </div>
            </div>`;
    document.getElementById("detailAQI").innerHTML=aqiData;
}
