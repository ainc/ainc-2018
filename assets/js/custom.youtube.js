(function () {

    //Source: https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
    //script to load videos exclusively when the user chooses to watch them
    //cuts down on load time and total http requests by page

    //retrieves all youtube elements that should be lazy loaded
    var youtube = document.querySelectorAll(".youtube");
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        //retrieve and set all initial video frames to make it appear as "loaded"
        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));

        //when a video is opened and clicked, load it instead of with the rest of the page
        youtube[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");
            //load like normal embeded video
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };

})();