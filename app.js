const toCelecius = (temp)=> Math.round(temp - 273.15)
_getAllCountriesInformation().then((countries)=>{
    countries.map((item)=> counrtyOptionAdd(item.name))
})
$('#countries').change(function (event) { 
    event.preventDefault();
    _showCountryInfo(this.value).then((info)=>{
        lat =info.latlng[0]
        lang =info.latlng[1] 
        initMap(lat,lang)
        showCountryInfo(info)
        _getCapitalWeather(info.capital).then((temp)=>{
            temp = toCelecius(temp)
            showCapitalWeather(temp)
        })
    });
});
let map;
function initMap(lat,lang) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lang },
    zoom: 6,
  });
}
$('#search-country').click(function (e) { 
  e.preventDefault();
  const country = $('#search-country-input').val();
  _searchCountryByName(country).then((countryInfo)=>{
    showCountryBySearch(countryInfo[0])
    lat =countryInfo[0].latlng[0]
    lang =countryInfo[0].latlng[1] 
    initMap(lat,lang)
    _getCapitalWeather(country).then((temp)=>{
      temp = toCelecius(temp)
      showCapitalWeather(temp)
  })
  })
});