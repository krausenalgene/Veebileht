function vahetaPilti(kategooria, sugu){
    var pilt = document.getElementById("kostüümipilt")

    if (kategooria === "multikad") {
        pilt.src = sugu === "tüdruk" ? "images/Minny.jpg": "images/micky-mouse.jpg";
    } else  if (kategooria === "toidud") {
        pilt.src = "images/hamburger.jpg";
    } else  if (kategooria === "halloween") {
        pilt.src = sugu === "tüdruk" ? "images/arst.jpg": "images/capten.jpg";
    } else  if (kategooria === "jõulud") {
        pilt.src = "images/christmas.jpg";
    } else  if (kategooria === "ajalugu") {
        pilt.src = sugu === "tüdruk" ? "images/fHistory.jpg": "images/mhistory.jpg";
    } else  if (kategooria === "kangelased") {
        pilt.src = sugu === "poiss" ? "images/spiderman.jpg": "images/female_hero.jpg";
    } else {
        pilt.src = "images/readmejaoks.png";
    }
}
