new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    
    // afterLoad: function(o, d, dir){
    //     // switch statement for JS
    //     // put the counterup as another function
    //     // make it work first, refactor later (checking if d.anchor is the section the user is looking at)
    //     if(d.anchor == 'section3' || d.anchor == 'section4'){
    //         $('.counter').counterUp({
    //             delay: 10,
    //             time: 2000
    //         });
    //         $('.counter').addClass('animated fadeInDownBig');
    //         $('h3').addClass('animated fadeIn');
    //     }
    // }
    
    afterLoad: function(origin, destination, direction){
        // switch statement for JS
        // put the counterup as another function
        // make it work first, refactor later (checking if d.anchor is the section the user is looking at)
        switch(destination.anchor){
            case 'section3':
                counterMethod("s3");
                break;
            case 'section4':
                counterMethod("s4");
                break;
            case 'section5':
                counterMethod("s5");
                break;
            case 'section6':
                counterMethod("s6");
                break;
            case 'section7':
                counterMethod("s7");
                break;
            case 'section8':
                counterMethod("s8");
                break;       
        }
        
        function counterMethod(sectionNum) {
            $(`.${sectionNum}.counter`).counterUp({
                delay: 10,
                time: 2000
            });
            $(`.${sectionNum}.counter`).addClass('animated fadeInDownBig');
            $('h3').addClass('animated fadeIn');
        }
    }
});

