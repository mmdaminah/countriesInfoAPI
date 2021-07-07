function counrtyOptionAdd(country){
    const value = `<option value=${country}>${country}</option>`;
    $('#countries').append(value);  
}
function showCountryInfo(info){
    $("#info").html(
        `
        <div>name:${info.name}</div>
        <div>population:${info.population}</div>
        <div>captial:${info.capital}</div>
        <img class="countryFlag" src="${info.flag}" alt="">
        ` 
    );
}
function showCapitalWeather(temp){
    $("#info").append(
        `
        <div>temp:${temp}centigrades</div>
        ` 
    );
}
function showCountryBySearch(countryInfo){
    $("#info").html(
        `
        <div>name:${countryInfo.name}</div>
        <div>population:${countryInfo.population}</div>
        <div>captial:${countryInfo.capital}</div>
        <img class="countryFlag" src="${countryInfo.flag}" alt="">
        ` 
    );
}