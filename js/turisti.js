
    let images = new Array();
    images[0] = "slike/kalemegdan.jfif";
    images[1] = "slike/hram.jpeg";
    images[2] = "slike/gardos.jfif";

    let texts = new Array();
    texts[0] = "Kalemegdan je istorijska tvrđava i najveći gradski park u Beogradu, sa bogatom prošlošću koja seže vekovima unazad. Sa njegovih zidina pruža se prelep pogled na ušće Save u Dunav i panoramu čitavog grada. U parku se nalaze spomenici, muzeji, kafići i prostrani travnjaci za šetnju i odmor. Kalemegdan je mesto gde se priroda i istorija savršeno spajaju, idealno za porodične izlete ili romantične šetnje. Poseta ovom mestu pruža jedinstvenu priliku da se oseti duh Beograda.";
    texts[1] = "Gardoš je istorijski deo Zemuna, poznat po uskim, kaldrmisanim ulicama i šarmantnoj starogradskoj atmosferi. Sa vidikovca Gardoša pruža se impresivan pogled na Dunav i moderne delove Beograda. U ovom kraju nalaze se autentične kafane, galerije i spomenici koji pričaju priče iz prošlosti. Šetnja Gardošom je poput putovanja kroz vreme, sa svakim korakom koji otkriva deo istorije i kulture. Idealno je mesto za one koji žele mirnu, ali inspirativnu šetnju i lokalni duh grada.";
    texts[2] = "Hram Svetog Save je jedan od najvećih pravoslavnih hramova na svetu i simbol Beograda. Njegova impozantna kupola dominira gradskim horizontom i može se videti sa mnogih delova grada. Unutrašnjost hrama krase raskošni mozaici i freske sa bogatom ikonografijom, a mir i atmosfera prostora ostavljaju snažan utisak. Hram je mesto duhovnosti, kulturnog nasleđa i umetničke vrednosti. Poseta Hramu Svetog Save pruža ne samo vizuelni užitak, već i inspiraciju i osećaj povezanosti sa istorijom i tradicijom Srbije.";

    let index = 0;

    const imgEl = document.getElementById("slideImage");
    const textEl = document.getElementById("slideText");

    function showSlide(i) {
        imgEl.src = images[i];
    textEl.textContent = texts[i];
}

    function nextSlide() {
        index++;
  if (index >= images.length) {
        index = 0;
  }
    showSlide(index);
}

    function prevSlide() {
        index--;
    if (index < 0) {
        index = images.length - 1;
  }
    showSlide(index);
}

    showSlide(index);
 function ture(){
    let x=prompt("unesite ime i prezime");
    let y = prompt("unesite broj telefona");
    if(x,y){
        alert("postovani" + x + "uspesno ste rezervisali vasu turu,vodic ce vas uskoro kontaktirati");
    } else{
        alert("unesite ime,prezime i broj telefona");
    }
 }