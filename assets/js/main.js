
function zoomImage(image) {
    var zoomedImg = document.createElement('img');
    zoomedImg.src = image.src;
    zoomedImg.alt = image.alt;
    zoomedImg.classList.add('zoomed-image');

    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.appendChild(zoomedImg);

    overlay.onclick = function () {
        overlay.remove();
    };

    document.body.appendChild(overlay);
}
