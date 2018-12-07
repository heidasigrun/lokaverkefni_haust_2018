/******************************************** 
 * INDEX SÍÐA *
 ******************************************+*/

    document.querySelector("main").innerHTML =
        `
    <section class="bg indexbg01"><div class="bg_txt_holder"><h1></h1></div></section>
    <section id="section01">
        <h2>Tímar í Dag</h2>
        <div id="timarcarousel">
        <button class="timat_btn" onclick="changeDay(1, 0)">&#10094;</button>
        <div id="timar">
            <div id="timatcarousel"></div>
        </div>
        <button class="timat_btn" onclick="changeDay(-1, 0)">&#10095;</button>
        </div>
    </section>
    <section class="bg indexbg02"></section>
    <section id="section02">
        <h2>Næstu Námskeið</h2>
        <div id="namskcarousel">
        <button class="namsk_btn" onclick="changeCard(1,0)">&#10094;</button>
        <div id="namskeidContainer">
        <div id="naestunamskeid"></div>
        </div>
        <button class="namsk_btn" onclick="changeCard(-1,0)">&#10095;</button>
        </div>
    </section>
    <section class="bg indexbg03"></section>
    <section id="section03">
        <h2>Skráðu þig á póstlistann okkar</h2>
        <div id="postlisti">
            <form>
                <input class="emailinput" type="email" name="email" placeholder="Netfang">
                <input id="postlistiBtn" type="button" value="senda" onclick="msg()">
            </form>
        </div>    
            <div id="postlistiModal" class="modal">              
                <div class="modal_content">
                    <span class="close">&times;</span>
                    <h2>Takk fyrir að skrá þig á póstlistann okkar!</h2>
                </div>
            </div>
        
    </section>
    <section class="bg indexbg04"></section>
    `

/******************************************** 
 * TÍMATAFLA *
 ******************************************+*/

var timatDiv = document.getElementById('timatcarousel');

/*TIMATAFLA = js/arraytimatafla.js*/

timataflaArray.push(timataflaArray[0]);
        



for (var i = 0; i < timataflaArray.length; i++) {

    var stakurDagur = "<div class='timatafla_dagur'>"

    var dagur =
        `
        <div id="dagur">
        <h3 id="day">${timataflaArray[i].weekday}</h3>
        </div>
        `

    stakurDagur += dagur;


    for (let u = 0; u < timataflaArray[i].classesArray.length; u++) {
            
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
                </div>
                `
    }
    stakurDagur += "</div>"

    timatDiv.innerHTML += stakurDagur;

}

/********** TÍMATAFLA - FALIÐ INFO *********/

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
/******************************************** 
 * CAROUSEL TÍMATAFLA *
 ******************************************+*/

var today = new Date()
var dayOfWeek = today.getDay()
var lengthOnRender;

if (window.innerWidth < 860) {
    lengthOnRender = 300;
} else {
    lengthOnRender = 700
}

var moveOneDay = [dayOfWeek * lengthOnRender * -1, 0];
timatDiv.style.left = dayOfWeek * lengthOnRender * -1 + "px";

var changeDay = function(direction, startIndex) {
    
    if (window.innerWidth < 860) {
        lengthOnRender = 300;
    }

    moveOneDay[startIndex] += lengthOnRender * direction;

    if (moveOneDay[startIndex] <= timataflaArray.length * lengthOnRender * -1) {
        timatDiv.style.transition = "all 0s";
        timatDiv.style.left = "0px";
        moveOneDay[startIndex] = 0;

        setTimeout(() => {
            timatDiv.style.transition = "all 0.7s";
            moveOneDay[startIndex] += lengthOnRender * direction;
            timatDiv.style.left = moveOneDay[startIndex] + "px";
        }, 7000);
    } else if (moveOneDay[startIndex] === lengthOnRender) {
        timatDiv.style.transition = "all 0s";
        timatDiv.style.left = "0px";
        moveOneDay[startIndex] = 0;
        setTimeout(() => {
            timatDiv.style.transition = "all 0.7s";
            moveOneDay[startIndex] += lengthOnRender * direction;
            timatDiv.style.left = -((timataflaArray.lengt - 2) * lengthOnRender) + "px";
        }, 2000);
    }

    timatDiv.style.left = moveOneDay[startIndex] + "px";
}

/******************************************** 
 * NÁMSKEIÐ *
 ******************************************+*/

var namskDiv = document.getElementById('naestunamskeid');

/*NÁMSKEIÐ CARDS = js/arraynamskeid.js*/

for (var i = 0; i < namskeidArray.length; i++) {

    var namskeidItem =
        `
        <div class="namskeid_card">
            <ul>
                <li><img src="${namskeidArray[i].img}"/></li>
                <li><h4 class="title">${namskeidArray[i].title}</h4></li>
                <li><p>${namskeidArray[i].day}. ${namskeidArray[i].month} ${namskeidArray[i].year}</p></li>
            </ul>
            <a class="skraning" href="#"><h4>Skráðu þig</h4></a> 
        </div>
        `
    namskDiv.innerHTML += namskeidItem;
}

/******************************************** 
 * CAROUSEL NÁMSKEIÐ *
 ******************************************+*/

var moveOneCard = 0;
namskDiv.style.left = "0px";

var changeCard = function (direction) {

    moveOneCard += 312 * direction;
    namskDiv.style.left = moveOneCard + "px";

    if (moveOneCard <= namskeidArray.length * 312 * -1){
        namskDiv.style.transition = "all 0s";
        namskDiv.style.left = "0px";
        moveOneCard = 0;

        setTimeout(() => {
            namskDiv.style.transition = "all 0.7s";
            moveOneCard += 312 * direction;
            namskDiv.style.left = moveOneCard + "px";
        }, 7000);
    }
}

/******************************************** 
 * PÓSTLISTI *
 ******************************************+*/

var modal = document.getElementById('postlistiModal');
var btn = document.getElementById("postlistiBtn");
var span = document.getElementsByClassName("close")[0];
var text = document.querySelector(".emailinput")

btn.onclick = function () {
    modal.style.display = "block";
    text.value="";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
