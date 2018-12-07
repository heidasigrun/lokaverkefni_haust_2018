/******************************************** 
 * KENNARANÁM SÍÐA *
 ******************************************+*/

document.querySelector(".navkennaranam").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg kennaranam_bg01"></section>
    <section id="kennaranam">
        <h2>Kennaranám</h2>
        <div id="kennaranam_div"></div>
    </section>
    <section class="bg kennaranam_bg02"></section>
    `
}


/********************** KENNARANÁM CARDS *******************+*/
document.getElementById("navkennaranam").addEventListener("click", function () {
    
    var kennaranamDiv = document.getElementById('kennaranam_div');

    var kennaranam = [
        {
            img: 'img/kennaranam01.jpg',
            title: 'Hatha Jóga Kennaranám',
        },
        {
            img: 'img/kennaranam02.png',
            title: 'Krakkajóga Kennaranám',
        },
        {
            img: 'img/kennaranam03.jpg',
            title: 'Kundalini Kennaranám',
        },
    ];

    for (var i = 0; i < kennaranam.length; i++) {

        var kennaranamItem =
            `
            <div class="kennaranam_card">
                <img src="${kennaranam[i].img}"/>
                <div class="namtitle">
                    <div><h4>${kennaranam[i].title}</h4></div>
                    <a class="nammeira" href="#"><h4>Meira</h4></a>
                </div>
            </div>
            `
        kennaranamDiv.innerHTML += kennaranamItem;
}

});
