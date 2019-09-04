var token = '899354552.dec2564.b42f33dd198f4c3197892e2973f4bd80',
    num_photos = 8, // maximum 20
    container = document.getElementById('instafeed'), // it is our <ul id="rudr_instafeed">
    scrElement = document.createElement('script');

window.mishaProcessResult = function (data) {
    for (x in data.data) {
        container.innerHTML += '<li class="igPost"><img src="' + data.data[x].images.low_resolution.url + '" ></li>';
    }
    container.innerHTML += '<li> <a href="https://www.instagram.com/awesomeinclex/"><i class="fa fa-angle-double-right fa-4x" id="cont-icon"></i></a></li>';
}

scrElement.setAttribute('src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult');
document.body.appendChild(scrElement);