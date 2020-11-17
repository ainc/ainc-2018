new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    
    afterLoad: function(destination){
        if(destination.anchor == 'section3'){
            alert("HELLO!!! IT WORKS!")
        }
    }
});

