/******************************************** 
 * KENNARAR SÍÐA *
 ******************************************+*/

document.querySelector(".navkennarar").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg kennarar_bg01"></section>
    <section id="kennarar">
        <h2>Kennarar</h2>
        <div id="kennarar_div"></div>
    </section>
    <section class="bg kennarar_bg02"></section>
    `
}

document.getElementById("navkennarar").addEventListener("click", function () {

var kennararDiv = document.getElementById('kennarar_div');

/*KENNARAR ER Í js/arraykennarar.js*/

    for (var i = 0; i < kennarar.length; i++) {

        var kennararItem =
            `
        <div class="kennarar_card">
            <img src="${kennarar[i].img}" alt="Avatar" class="kennimg">
            <div class="kennarar_info">
                <div class="kennname"><h3>${kennarar[i].name}</h3></div>
            </div> 
        </div>
        `
        kennararDiv.innerHTML += kennararItem;
    }

});
