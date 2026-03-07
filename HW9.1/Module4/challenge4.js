let citiesCoords = {
    Berlin: { lat: 52.52, lon: 13.405 },
    Oslo: { lat: 59.9139, lon: 10.7522 },
    Yakutsk: { lat: 62.0355, lon: 129.6755 }
};

let getWeather = function(location, info) {
    let cities = Array.isArray(location) ? location : [location];
    const maxWindSpeed = 15;
    const minTemp = -20;

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    cities.forEach(city => {
        let coords = citiesCoords[city];
        if(!coords) {
            console.log(`No coordinates found for ${city}`);
            return;
        }
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(`\nCITY: ${city}`);
                let weather = {
                    temp: data.current_weather.temperature,
                    wind: {
                        speed: data.current_weather.windspeed,
                        deg: data.current_weather.winddirection
                    },
                    clouds: data.current_weather.cloudcover ?? 0,
                    precipitation: data.current_weather.precipitation ?? 0
                };

                if(info === 'all') {
                    showWindInfo(weather);
                    showInfo(weather, 'clouds');
                    showInfo(weather, 'temp');
                    showInfo(weather, 'precipitation');
                } else if(info === 'wind') {
                    showWindInfo(weather);
                } else if(info) {
                    showInfo(weather, info);
                }
            })
            .catch(e => console.log(e.message));
    });
};

let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %