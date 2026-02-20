
    let images = new Array();
    images[0] = "slike/kalemegdan.jfif";
    images[1] = "slike/hram.jpeg";
    images[2] = "slike/gardos.jfif";

    let texts = new Array();
    texts[0] = "Kalemegdan je istorijska tvrđava i najveći gradski park u Beogradu, sa bogatom prošlošću koja seže vekovima unazad. Sa njegovih zidina pruža se prelep pogled na ušće Save u Dunav i panoramu čitavog grada. U parku se nalaze spomenici, muzeji, kafići i prostrani travnjaci za šetnju i odmor. Kalemegdan je mesto gde se priroda i istorija savršeno spajaju, idealno za porodične izlete ili romantične šetnje. Poseta ovom mestu pruža jedinstvenu priliku da se oseti duh Beograda.";
    texts[1] = "Hram Svetog Save je jedan od najvećih pravoslavnih hramova na svetu i simbol Beograda. Njegova impozantna kupola dominira gradskim horizontom i može se videti sa mnogih delova grada. Unutrašnjost hrama krase raskošni mozaici i freske sa bogatom ikonografijom, a mir i atmosfera prostora ostavljaju snažan utisak. Hram je mesto duhovnosti, kulturnog nasleđa i umetničke vrednosti. Poseta Hramu Svetog Save pruža ne samo vizuelni užitak, već i inspiraciju i osećaj povezanosti sa istorijom i tradicijom Srbije.";
    texts[2] = "Gardoš je istorijski deo Zemuna, poznat po uskim, kaldrmisanim ulicama i šarmantnoj starogradskoj atmosferi. Sa vidikovca Gardoša pruža se impresivan pogled na Dunav i moderne delove Beograda. U ovom kraju nalaze se autentične kafane, galerije i spomenici koji pričaju priče iz prošlosti. Šetnja Gardošom je poput putovanja kroz vreme, sa svakim korakom koji otkriva deo istorije i kulture. Idealno je mesto za one koji žele mirnu, ali inspirativnu šetnju i lokalni duh grada.";
    let klub = new Array();
    klub[0] = "slike/fri.jfif";
    klub[1] = "slike/kartel.jfif";
    klub[2] = "slike/komitet.jfif";

    let kafana = new Array();
    kafana[0] = "slike/bajka.jfif";
    kafana[1] = "slike/tarapana.jfif";
    kafana[2] = "slike/zoro.jfif";

    let opis = new Array();
    opis[0] = "Radno vreme: Pon-Ned  23:00-4:00 ";
    opis[1] = "Radno vreme: Pon-Ned  23:00-4:00";
    opis[2] = "Radno vreme: Pon-Ned  23:00-4:00";

    let opis1 = new Array();
opis1[0] = "Radno vreme: Pon-Ned  23:00-4:00";
opis1[1] = "Radno vreme: Pon-Ned  23:00-4:00";
opis1[2] = "Radno vreme: Pon-Ned  23:00-4:00";
    
    let index = 0;
    let index1 = 0;
    let index2 = 0;
    const kfel = document.getElementById("kafanas");
    const op1el = document.getElementById("kafana");
    const klel = document.getElementById("klubs");
    const opel = document.getElementById("klub");
    const imgEl = document.getElementById("slideImage");
    const textEl = document.getElementById("slideText");
    
function prikaz1(i) {
    kfel.src = kafana[i];
    op1el.textContent = opis1[i];
}
function sldc1() {
    index2++;
    if (index2 >= kafana.length) {
        index2 = 0;
    }
    prikaz1(index2);
}
function prosli1() {
    index2--;
    if (index2 < 0) {
        index2 = kafana.length - 1;
    }
    prikaz1(index2);
}
prikaz1(index2)
    function prikaz(i){
        klel.src=klub[i];
        opel.textContent=opis[i];
    }
    function sldc(){
        index1++;
        if(index1 >=klub.length){
            index1=0;
        }
        prikaz(index1);
    }
    function prosli(){
        index1--;
        if (index1<0){
            index1=klub.length - 1;
        }
        prikaz(index1);
    }
prikaz(index1)
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

  
    const map = L.map('map').setView([44.8176, 20.4633], 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

   
    L.marker([44.8176, 20.4633])
    .addTo(map)
    .bindPopup('SmartBelgrade 📍')
    .openPopup();

const locations = [
    { name: "Kalemegdan", coords: [44.8231, 20.4504] },
    { name: "Beograd na vodi", coords: [44.8106, 20.4489] },
    { name: "Zemun – Gardoš", coords: [44.8483, 20.4029] },
    { name: "Hram Svetog Save", coords: [44.7980, 20.4691] },
    { name: "Ada Ciganlija", coords: [44.7866, 20.4136] }
];

locations.forEach(loc => {
    L.marker(loc.coords)
        .addTo(map)
        .bindPopup(loc.name);
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

let frans=new Array
frans[0]="slike/fran1.png";
frans[1] = "slike/fran2.png";
frans[2] = "slike/fran3.png";
let index3 = 0;

let domace=new Array
domace[0]= "slike/domace1.png";
domace[1] = "slike/domace2.png";
domace[2] = "slike/domace3.png";
let index4 = 0;
 
function promeniFran() {
    index3 = (index3 + 1) % frans.length;
    document.getElementById("frans").src = frans[index3];
}
function promeniDomace() {
    index4 = (index4 + 1) % domace.length;
    document.getElementById("domace1").src = domace[index4];
}
setInterval(promeniFran, 3000);
setInterval(promeniDomace, 3000);



