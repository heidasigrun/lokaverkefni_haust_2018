/******************************************** 
 * TÍMATAFLA SÍÐA *
 ******************************************+*/

document.querySelector(".navtimatafla").onclick=function(){
    document.querySelector("main").innerHTML=
    `
    <section class="bg timatafla_bg01"></section>
        <section id="timatafla">
            <h2>Tímatafla</h2>
            <div id="timatafla_div"></div>
        </section>
    <section class="bg timatafla_bg02"></section>
    `
}

/*************  TÍMATAFLA *************/
document.getElementById("navtimatafla").addEventListener("click", function () {

var timaElement = document.getElementById('timatafla_div');

/*TIMATAFLA ER Í js/arraytimatafla.js*/

    for (var i = 0; i < timataflaArray.length; i++) {

        var stakurDagur = "<div class='stundatafla_dagur'>"

        var dagur = 
            `
            <div id="dagur">
                <h3 id="day">${timataflaArray[i].weekday}</h3>
            </div>
            `

        stakurDagur += dagur;


        for (var u = 0; u < timataflaArray[i].classesArray.length; u++) {
            
            stakurDagur +=
                `
                <div>
                    <div class="collapsible">
                        <h4 class="timi">${timataflaArray[i].classesArray[u].timi}</h4>
                        <h4 class="nafn">${timataflaArray[i].classesArray[u].nafn}</h4>
                        <h4 class="kennari">${timataflaArray[i].classesArray[u].kennari}</h4>
                    </div>    
                    <div class="content">
                        <div class="timatafla_info">
                            <h4>${timataflaArray[i].classesArray[u].nafn}</h4>
                            <p>${timataflaArray[i].classesArray[u].tegund}</p>
                        </div>
                        <div class="timatafla_staff">
                            <img class="staffimg" src="${timataflaArray[i].classesArray[u].img}" url="" alt="kennari" title="kennari">
                        </div>
                    </div>
                <div>
                `
                
            
        }
        stakurDagur += "</div>"
        
        timaElement.innerHTML += stakurDagur;
    }

    /********** TÍMATAFLA - INFO FALIÐ *********/

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

});    


