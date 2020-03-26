(function () {

    var youtube = document.querySelectorAll("#workspace .modal-body");

    for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[0].dataset.embed + "/sddefault.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[0].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };

})();
