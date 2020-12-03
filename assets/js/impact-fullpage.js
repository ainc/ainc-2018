new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    
    afterLoad: function(o, d, dir){
        // const allSections = ('section1' || 'section2' || 'section3' || 'section4' || 'section5')
        if(d.anchor == 'section3' && d.anchor == 'section4'){
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
            $('.counter').addClass('animated fadeInDownBig');
            $('h3').addClass('animated fadeIn');
        }
    }
});

