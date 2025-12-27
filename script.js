function part2(){
    var part1 = document.getElementById("cast_1");
    var part2 = document.getElementById("cast_2");

    var dobaspolu = document.getElementById("doba_spolu");
    var dobaspolu2 = document.getElementById("doba_spolu2");

    console.log("Přepínám na část 2");
    part1.style.animation = "zavri_p1 1s forwards";
    part2.style.visibility = "visible";
    part2.style.animation = "otevri_p2 2s forwards";


    dobaspolu.style.animation = "doba_spolu 4s forwards";
    dobaspolu2.style.animation = "doba_spolu2 5s forwards";


}