function _getAllCountriesInformation(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/all",
            success: function (response) {
                resolve(response)
            },
            fail: function (error) {
                reject(error)
            }
        });
    })
}
function _showCountryInfo(country){
    return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: `https://restcountries.eu/rest/v2/name/${country}`,
            success: function (response) {
                resolve(response[0])
            },
            fail: function (error) {
                reject(error)
            }
        });
    })
}
function _getCapitalWeather(capital){
    return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=44b1fe8a6c0207544cdd674445971577`,
            success: function (response) {
                resolve(response.main.temp)
            },
            fail: function (error) {
                reject(error)
            }
        });
    })
}
function _searchCountryByName(name){
    return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: `https://restcountries.eu/rest/v2/name/${name}`,
            success: function (response) {
                resolve(response)
            },
            fail: function (error) {
                reject(error)
            }
        });
    })
}