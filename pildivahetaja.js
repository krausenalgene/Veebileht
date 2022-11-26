function vahetaPilti(kategooria, sugu){
    var pilt1 = document.getElementById("kostüümipilt-1")
    var pilt2 = document.getElementById("kostüümipilt-2")
    var pilt3 = document.getElementById("kostüümipilt-3")

    if (kategooria === "multikad") {
        pilt1.src = sugu === "tüdruk" ? "images/multikad/Minny.jpg": "images/multikad/micky-mouse.jpg";
        pilt2.src = sugu === "tüdruk" ? "images/multikad/minions.jpg": "images/multikad/cars.jpg";
        pilt3.src = sugu === "tüdruk" ? "images/multikad/princess.jpg": "images/multikad/toystory.jpg";
    } else  if (kategooria === "toidud") {
        pilt1.src = "images/toidud/hamburger.jpg";
        pilt2.src = "images/toidud/banana.jpg";
        pilt3.src = "images/toidud/icecream.jpg";
    } else  if (kategooria === "halloween") {
        pilt1.src = sugu === "tüdruk" ? "images/halloween/arst.jpg": "images/halloween/capten.jpg";
        pilt2.src = sugu === "tüdruk" ? "images/halloween/devil.jpg": "images/halloween/ghost.jpg";
        pilt3.src = sugu === "tüdruk" ? "images/halloween/mexico.jpg": "images/halloween/skeleton.jpg";
    } else  if (kategooria === "jõulud") {
        pilt1.src = "images/jõulud/christmas.jpg";
        pilt2.src = "images/jõulud/elf.jpg";
        pilt3.src = "images/jõulud/santa.jpg";
    } else  if (kategooria === "ajalugu") {
        pilt1.src = sugu === "tüdruk" ? "images/ajalugu/fHistory.jpg": "images/ajalugu/mhistory.jpg";
        pilt2.src = sugu === "tüdruk" ? "images/ajalugu/woman.jpg": "images/ajalugu/rome.jpg";
        pilt3.src = sugu === "tüdruk" ? "images/ajalugu/femalehistory.jpg": "images/ajalugu/man.jpg";
    } else  if (kategooria === "kangelased") {
        pilt1.src = sugu === "poiss" ? "images/kangelased/spiderman.jpg": "images/kangelased/female_hero.jpg";
        pilt2.src = sugu === "poiss" ? "images/kangelased/batman.jpg": "images/kangelased/ninja.jpg";
        pilt3.src = sugu === "poiss" ? "images/kangelased/maleninja.jpg": "images/kangelased/superhero.jpg";
    }
}
