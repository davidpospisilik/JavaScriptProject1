var celkem;

function Spocitej(){
    celkem = 0;
    let cenaZaZnacku = document.querySelector("#znacka").value;
    celkem = Number(cenaZaZnacku);

    let barva = document.getElementsByName("barva")
    let cenaZaBarvu = 0;

    for (let i = 0; i < barva.length; i++) {
        if(barva[i].checked){
            let typBarvy = barva[i].value;

            switch (typBarvy){
                case "paleny":
                    cenaZaBarvu = cenaZaZnacku * 0.05;
                break;
                case "metalicky":
                    cenaZaBarvu = cenaZaZnacku * 0.07;
                 break;
                default:
                    cenaZaBarvu = 0.0;
            }
        }
    }
    celkem += cenaZaBarvu;

    let priplatek = document.getElementsByName("vybava");
    let cenaZaPriplatky = 0;

    for (let a = 0; a < priplatek.length; a++) {
        if (priplatek[a].checked) {
            let typPriplatku = priplatek[a].value;

            switch (typPriplatku) {
                case "kamera":
                    cenaZaPriplatky += 10000;
                break;
                case "kola":
                    cenaZaPriplatky += 20000;
                break;
                case "sedacky":
                    cenaZaPriplatky += 50000;
                break;
                case "tuning":
                    cenaZaPriplatky += (cenaZaZnacku / 100) * 20;
                break;
                default:
                    cenaZaPriplatky = Number(0);
            }
        }
    }
    celkem += cenaZaPriplatky;
    document.querySelector('.suma').innerHTML=`${Math.round(celkem)} Kč`;

    maxCena = parseInt(document.getElementById("maxCena").value);

    if (celkem == 0) {
        document.querySelector('.vyslednaZprava').innerHTML='Neni nic vybrano!';
    }
    else if (maxCena >= celkem){
        document.querySelector('.vyslednaZprava').innerHTML='Zadana castka bude stacit na porizeni vozu!';
    } else {
        document.querySelector('.vyslednaZprava').innerHTML='Zadana castka nestaci na porizeni vozu!';
    }

}

function odesli(){
    emailInput = document.getElementById("emailID").value;
    if( !emailInput.includes('@') || !emailInput.includes('.') ){
        document.querySelector('.msg').innerHTML='Špatný formát emailu, neodeslano!!'
    } else {
        document.querySelector('.msg').innerHTML='Odeslano'
    }
}
