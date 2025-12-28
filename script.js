function part2(){
    var part1 = document.getElementById("cast_1");
    var part2 = document.getElementById("cast_2");

    var dobaspolu = document.getElementById("doba_spolu");
    var dobaspolu2 = document.getElementById("doba_spolu2");

    var text_button = document.getElementById("text_button");

    var mysicka1 = document.getElementById("text_mysicka");
    var mysicka2 = document.getElementById("text_mysicka2");

    console.log("Přepínám na část 2");
    part1.style.animation = "zavri_p1 1s forwards";
    part2.style.visibility = "visible";
    part2.style.animation = "otevri_p2 2s forwards";


    dobaspolu.style.animation = "doba_spolu 4s forwards";
    dobaspolu2.style.animation = "doba_spolu2 5s forwards";

    text_button.style.animation = "zobrazeni_tlacitka 5s forwards";

    mysicka1.style.animation = "zobrazeni_mysicek 6s forwards";
    mysicka2.style.animation = "zobrazeni_mysicek 6.5s forwards";
}

function part3(){
    var text_body = document.getElementById("text_body");

    console.log("Spouštím část 3");
    text_body.style.animation = "roztahnuti_textu 1.5s forwards";
}