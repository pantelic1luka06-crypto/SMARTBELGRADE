
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
const map1 = L.map('map1').setView([44.8176, 20.4633], 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map1);

   
    L.marker([44.8176, 20.4633])
    .addTo(map)
    .bindPopup('SmartBelgrade 📍')
    .openPopup();

const smestaji = [
    { name: "Hotel Moskva", coords: [44.8149, 20.4620] },
    { name: "Hyatt Regency Belgrade", coords: [44.8125, 20.4324] },
    { name: "Crowne Plaza Belgrade", coords: [44.8122, 20.4313] },
    { name: "Apartman Palilula", coords: [44.8178, 20.4849] },
    { name: "Apartman Dorćol", coords: [44.8260, 20.4633] },
    { name: "Apartman Zemun", coords: [44.8483, 20.4029] }
];

smestaji.forEach(loc => {
    L.marker(loc.coords)
        .addTo(map1)
        .bindPopup(loc.name);
});

const locations = [
    { name: "Kalemegdan", coords: [44.8231, 20.4504] },
    { name: "Beograd na vodi", coords: [44.8106, 20.4489] },
    { name: "Zemun – Gardoš", coords: [44.8483, 20.4029] },
    { name: "Hram Svetog Save", coords: [44.7980, 20.4691] },
    { name: "Ada Ciganlija", coords: [44.7866, 20.4136] },
    { name: "Hotel Moskva", coords: [44.8149, 20.4620] },
    { name: "Hyatt Regency Belgrade", coords: [44.8125, 20.4324] },
    { name: "Crowne Plaza Belgrade", coords: [44.8122, 20.4313] },
    { name: "Apartman Palilula", coords: [44.8178, 20.4849] },
    { name: "Apartman Dorćol", coords: [44.8260, 20.4633] },
    { name: "Apartman Zemun", coords: [44.8483, 20.4029] },
    { name: "Freestyler", coords: [44.8201, 20.4485] },
    { name: "Kafana Bajka", coords: [44.7575, 20.4346] },
    { name: "Klub Komitet", coords: [44.8205, 20.4483] },
    { name: "Kafana Pukni Zoro", coords: [44.8450, 20.4157] },
    { name: "Kafana Tarapana", coords: [44.8093, 20.4651] },
    { name: "Poncho", coords: [44.8236, 20.4132] },
    { name: "McDonald's", coords: [44.8149, 20.4612] },
    { name: "KFC", coords: [44.8159, 20.4604] },
    { name: "Walter", coords: [44.8154, 20.4631] },
    { name: "Bucko", coords: [44.8099, 20.4705] }


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


let hoteli = new Array();
hoteli[0]="slike/hotel1.png";
hoteli[1] = "slike/hotel2.png";
hoteli[2] = "slike/hotel3.png";

let opho=new Array();
opho[0] ="Istorijski hotel sa klasičnim enterijerom pruža autentično iskustvo i centralnu lokaciju u samom srcu grada. Gostima je na raspolaganju restoranska tradicija, luksuzno opremljene sobe i neposredna blizina kulturnih znamenitosti.";
opho[1] = "Elegantni hotel nudi udobne i moderne sobe sa panoramskim pogledom, idealan za poslovna putovanja i turističke posete. U okviru hotela se nalaze restorani, barovi i profesionalni konferencijski kapaciteti svetskog nivoa.";
opho[2] = "Luksuzni hotel u centru grada kombinuje savremeni dizajn sa vrhunskim sadržajima za poslovne i privatne goste. Gostima su na raspolaganju elegantne sobe, spa centar, restoran sa internacionalnom kuhinjom i konferencijske sale.";

let apartmani = new Array();
apartmani[0] = "slike/ap1.png";
apartmani[1] = "slike/ap2.png";
apartmani[2] = "slike/ap3.png";

let opap = new Array();
opap[0] = "Komforan apartman sa modernim nameštajem i potpuno opremljenom kuhinjom pruža miran boravak u prijatnoj okolini. Idealno je mesto za odmor, ali i za one koji žele brz pristup centru grada.";
opap[1] = "Šarmantan apartman u vibrantnom delu grada omogućava lak pristup restoranima, kafićima i kulturnim sadržajima. Prostrane sobe i prirodno osvetljenje čine boravak prijatnim i udobnim.";
opap[2] = "Prostran apartman sa panoramskim pogledom na reku nudi mir i opuštanje u blizini istorijskog jezgra Zemuna. Gostima je dostupna potpuno opremljena kuhinja i udobni prostori za odmor i druženje.";

let h=0;
let a=0;
const hs=document.getElementById("hoteli");
const ho=document.getElementById("hotelio");
const as = document.getElementById("apartmani");
const ao = document.getElementById("apartmanio");

function prikaz2(i) {
    hs.src = hoteli[i];
    ho.textContent = opho[i];
}
function sldc2() {
    h++;
    if (h >= hoteli.length) {
        h = 0;
    }
    prikaz2(h);
}
function prosli2() {
    h--;
    if (h < 0) {
        h = hoteli.length - 1;
    }
    prikaz2(h);

}
prikaz2(h);

function prikaz3(i) {
    as.src = apartmani[i];
    ao.textContent = opap[i];
}
function sldc3() {
    a++;
    if (a >= apartmani.length) {
        a = 0;
    }
    prikaz3(a);
}
function prosli3() {
    a--;
    if (a < 0) {
        a = apartmani.length - 1;
    }
    prikaz3(a);

}
prikaz3(a);