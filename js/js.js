function getWeather(){
    console.log('clock');

    fetch(url).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    ).then(res => {
        weather = res.data;
        console.log(weather);

        $('.weather').html(weather.name);
    }));
}


//Pre loadup


//Post loadup
$( '.content_wrapper' ).ready(function() {
    
    	
    $('.content_wrapper').fadeIn(1500);
    setTimeout(
    function() {
        $('.content_container').fadeIn(700);
    }, 1000);
    
    

    url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ddf15dd83be7fa8348b59aa11092c850';

    console.log( "ready!" );

    

    request.send();
    console.log(data);
});