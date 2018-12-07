/******************************************** 
 * VERÐSKRÁ SÍÐA *
 ******************************************+*/

document.querySelector(".navverdskra").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg verdskra_bg01"></section>
    <section id="verdskra">
        <h2>Verðskrá</h2>
        <div id="verdskra_div"></div>
    </section>
    <section class="bg verdskra_bg02"></section>
    `
}