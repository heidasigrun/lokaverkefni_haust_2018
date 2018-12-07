/******************************************** 
 * FOOTER *
******************************************+*/

var footer = document.querySelector("footer");
var footerContent =
    `
    <div id="footerDiv">
        <div class="footerleft">
            <img id="footerlogo" alt="JogasetridLogo" title="JogasetridLogo" src="img/logo_white.png">
            
            
        </div>
        <div class="footermiddle">
        <h4>Jógasetrið | Skipholt 50C | Sími 778-1000 | jogasetrid@jogasetrid.is</h4>
        <p>© 2018 Jógasetrið</p>
        </div>
        <div class="footerright">
            <div class="socialmedia">
                <a href="mailto:jogasetrid@jogasetrid.is"><img class="footer_icon" src="img/email.svg"></a>
                <a href="https://www.facebook.com/jogasetrid/?fref=ts" target="_blank"><img class="footer_icon" src="img/facebook.svg"></a>
            </div>
            
        </div>
    </div>
    
    `
footer.innerHTML = footerContent;    
