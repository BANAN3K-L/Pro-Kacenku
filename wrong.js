

function check_date(){
    const ram = document.getElementById("ram");
    const text = document.getElementById("wrong_text");
    const mys = document.getElementById("mysicka");

    var datum = document.getElementById("date").value;

    if (datum === "2025-10-21"){
        pokracuj();
    }
    else{
        spatna_odpoved(ram,text,mys);
    }
}

function spatna_odpoved(ram,text,mys){
    ram.style.animation = "none";
    text.style.animation = "none";
    mys.style.animation = "none";

    ram.offsetHeight;
    text.offsetHeight;
    mys.offsetHeight;

    ram.style.animation = "zcervenej_ram 2s ease-out";
    text.style.animation = "zobraz_wrong_txt 2s ease-out";
    mys.style.animation = "zobraz_mys 2s ease-out";



    
}


function pokracuj(){
    console.log("Správné datum!");
    var part2 = document.getElementById("part2");

    part2.style.animation = "open_p2 1.5s forwards";
}