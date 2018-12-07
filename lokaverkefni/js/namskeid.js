/******************************************** 
 * NÁMSKEIÐ SÍÐA *
 ******************************************+*/

document.querySelector(".navnamskeid").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg namskeid_bg01"></section>
    <section id="namskeid">
        <h2>Námskeið</h2>
        <div id="filterDiv">
            <button id="jan" class="filterbtn" onclick="filterFunction('janúar')"><h4>Janúar</h4></button>
            <button id="feb" class="filterbtn" onclick="filterFunction('febrúar')"><h4>Febrúar</h4></button>
            <button id="mar" class="filterbtn" onclick="filterFunction('mars')"><h4>Mars</h4></button>
            <button id="apr" class="filterbtn" onclick="filterFunction('apríl')"><h4>Apríl</h4></button>
            <button id="mai" class="filterbtn" onclick="filterFunction('maí')"><h4>Maí</h4></button>
            <button id="jun" class="filterbtn" onclick="filterFunction('júní')"><h4>Júní</h4></button>
            <button id="jul" class="filterbtn" onclick="filterFunction('júlí')"><h4>Júlí</h4></button>
            <button id="agu" class="filterbtn" onclick="filterFunction('ágúst')"><h4>Ágúst</h4></button>
            <button id="sep" class="filterbtn" onclick="filterFunction('september')"><h4>September</h4></button>
            <button id="okt" class="filterbtn" onclick="filterFunction('október')"><h4>Október</h4></button>
            <button id="nov" class="filterbtn" onclick="filterFunction('nóvember')"><h4>Nóvember</h4></button>
            <button id="des" class="filterbtn" onclick="filterFunction('desember')"><h4>Desember</h4></button>
        </div>
        <div id="namskdiv"></div>
    </section>
    <section class="bg namskeid_bg02"></section>
    `
}

/*************  NÁMSKEIÐ CARDS *************/

document.getElementById("navnamskeid").addEventListener("click", function() {
    displayCards(namskeidArray)
});

var displayCards = function(namskeidArray) { 

    namskdiv.innerHTML = "";

    console.log(namskeidArray)

    var namskDiv = document.getElementById('namskdiv');

    /*NÁMSKEIÐ CARDS = js/arraynamskeid.js*/

    for (var i = 0; i < namskeidArray.length; i++) {

        var namskeidItem =
            `
            <div class="namskeid_card">
                <ul>
                    <li><img src="${namskeidArray[i].img}"/></li>
                    <li><h4 class="title">${namskeidArray[i].title}</h4></li>
                    <li><p class="date">${namskeidArray[i].day}. ${namskeidArray[i].month} ${namskeidArray[i].year}</p></li>
                </ul>
                <a class="skraning" href="#"><h4>Skráðu þig</h4></a>  
            </div>
            `
        namskDiv.innerHTML += namskeidItem;
    }

}
/*************  FILTERA EFTIR MÁNUÐUM  *************/

var filterFunction = function(monthParameter) {
    var filteredArray = filterArray(monthParameter);
    displayCards(filteredArray) 
}

var filterArray = function(monthParameter) {
    var month = []
    for (i = 0; i < namskeidArray.length; i++) {
        var monthVariable = namskeidArray[i]

        if (monthVariable.month === monthParameter) {
            month.push(monthVariable)
        }
    }
    return month
}
