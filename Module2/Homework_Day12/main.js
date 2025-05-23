let getCity = document.getElementById('city');
let getWeather = document.getElementById('info');
let Icon = document.getElementById('icon');
let city = prompt("Nhập tên thành phố: ");
let getTime = document.createElement('p');
let getTemp = document.createElement('p');
let getIcon = document.createElement('img');
let getDescrip = document.createElement('p');
getWeather.append(getTime);
getWeather.append(getTemp);
getWeather.append(getDescrip);
Icon.append(getIcon);
getCity.style = "border: 1px solid black; width: fit-content; padding: 3%; display: flex;";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`)
    .then(response => response.json())
    .then(data => {
        const item = data.list[0];
        getTime.innerHTML = item.dt_txt;
        getTemp.innerHTML = `${item.main.temp}°C`;
        getDescrip.innerHTML = item.weather[0].description;
        getIcon.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    });
