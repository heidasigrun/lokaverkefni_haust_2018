/******************************************** 
 * ANNAÐ SÍÐA *
 ******************************************+*/

document.querySelector(".navannad").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg annad_bg01"></section>
    <section id="annad">
        <h2>Annað</h2>
        <div id="annad_div"></div>
    </section>
    <section class="bg annad_bg02"></section>
    `
}