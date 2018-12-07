/******************************************** 
 * JÓGASETRIÐ SÍÐA *
 ******************************************+*/

document.querySelector(".navjogasetrid").onclick = function () {
    document.querySelector("main").innerHTML =
        `
    <section class="bg jogasetrid_bg01"></section>
    <section id="jogasetrid">
        <h2>Jógasetrið</h2>
        <div id="jogasetrid_div"></div>
    </section>
    <section class="bg jogasetrid_bg02"></section>
    `
}