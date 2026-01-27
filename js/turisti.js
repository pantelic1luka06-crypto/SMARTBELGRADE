
    let images = new Array();
    images[0] = "slike/kalemegdan.jfif";
    images[1] = "slike/hram.jpeg";
    images[2] = "slike/gardos.jfif";

    let texts = new Array();
    texts[0] = "Tekst za prvi slajd";
    texts[1] = "Tekst za drugi slajd";
    texts[2] = "Tekst za treći slajd";

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