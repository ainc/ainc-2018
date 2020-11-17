new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    anchors: ['section s1, section s2, section s3, section s4, section s5']
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    
    afterLoad: function(origin, destination, direction){
        if(origin.anchor == 'section s3'){
            alert("HELLO!!! IT WORKS!")
        }
    }
});

