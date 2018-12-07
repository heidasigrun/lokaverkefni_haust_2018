/******************************************** 
 * HEADER *
 ******************************************+*/

var header = document.querySelector("header");
var headerContent =
    `
    <nav>
        <div id="navlogo">
            <a href="index.html">
                <img id="logo" alt="JogasetridLogo" title="JogasetridLogo" src="img/logo_all_white.svg">
            </a>
        </div>

        <div id="main_nav">
            <ul id="navlink">
                <li class="dispnone">
                    <a class="navtimatafla" id="navtimatafla" href="#" title="timatafla"><h4>Tímatafla</h4></a>
                </li>
                <li class="dispnone">
                    <a class="navnamskeid" id="navnamskeid" href="#" title="namskeid"><h4>Námskeið</h4></a>
                </li>
                <li class="dispnone">
                    <a class="navkennaranam" id="navkennaranam" href="#" title="kennaranam"><h4>Kennaranám</h4></a>
                </li>
                <li class="dispnone">
                    <a class="navverdskra" id="navverdskra" href="#" title="verdskra"><h4>Verðskrá</h4></a>
                </li>
                <li class="dispnone">
                    <div class="dropdown">
                        <a class="dropbtn" href="#" title="umokkur"><h4>Um Okkur</h4></a>
                        <div class="dropdown-content">
                            <a class="navkennarar" id="navkennarar" href="#" title="kennarar"><h4>Kennarar</h4></a>
                            <a class="navjogasetrid" id="navjogasetrid" href="#" title="jogasetrid"><h4>Jógasetrið</h4></a>
                            <a class="navannad" id="navannad" href="#" title="annad"><h4>Annað</h4></a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" title="search"><img class="searchicon" src="img/search_white.svg"></a>
                </li>
                <li>
                    <div id="hamburgermenu">
                        <div class="burgerContainer">
                            <div class="burger"></div>
                            <div class="burger"></div>
                            <div class="burger"></div>
                        </div>
                        <div class="menu">
                            <img id="burgerlogo" alt="JogasetridLogo" title="JogasetridLogo" src="img/logo_all_white.svg">
                            <ul id="burgerlink">
                                <li>
                                    <a class="navtimatafla" id="navtimatafla" href="#" title="timatafla"><h3>Tímatafla</h3></a>
                                </li>
                                <li>
                                    <a class="navnamskeid" id="navnamskeid" href="#" title="namskeid"><h3>Námskeið</h3></a>
                                </li>
                                <li>
                                    <a class="navkennaranam" id="navkennaranam" href="#" title="kennaranam"><h3>Kennaranám</h3></a>
                                </li>
                                <li>
                                    <a class="navverdskra" id="navverdskra" href="#" title="verdskra"><h3>Verðskrá</h3></a>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn" href="#" title="umokkur"><h3>Um Okkur</h3></a>
                                        <div class="dropdown-content">
                                            <a class="navkennarar" id="navkennarar" href="#" title="kennarar"><h4>Kennarar</h4></a>
                                            <a class="navjogasetrid" id="navjogasetrid" href="#" title="jogasetrid"><h4>Jógasetrið</h4></a>
                                            <a class="navannad" id="navannad" href="#" title="annad"><h4>Annað</h4></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>    
            </ul>
        </div>
        
    </nav>
    `

header.innerHTML = headerContent; 

/********************* HEADER MINNKAR VIÐ SKROLL **********************/

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "90px";
        document.getElementById("logo").style.marginTop = "20px";
        document.getElementById("main_nav").style.paddingTop = "10px";
    } else {
        document.getElementById("logo").style.width = "120px";
        document.getElementById("logo").style.marginTop = "40px";
        document.getElementById("main_nav").style.paddingTop = "80px";
    }
}

/********************* NAV DROPDOWN **********************/

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/********************* hamburger menu **********************/
var burger = document.querySelector(".burgerContainer");
var menu = document.querySelector(".menu");
var burgerLines = document.getElementsByClassName("burger");
var navIsOpen = false;

burger.onclick = function () {
    if (!navIsOpen) {
        menu.classList.add("show-menu");
        burgerLines[0].classList.add("tilt-right");
        burgerLines[2].classList.add("tilt-left");
        for (var i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.add("change-to-x")
        }
        navIsOpen = true;
    }
    else {
        menu.classList.remove("show-menu");
        burgerLines[0].classList.remove("tilt-right");
        burgerLines[2].classList.remove("tilt-left");
        for (var i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.remove("change-to-x")
        }
        navIsOpen = false;
    }
}

