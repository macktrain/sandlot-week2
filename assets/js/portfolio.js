var show = "hide";
/*var prevScreenSize = 1000;
var currScreenSize = 0;

currScreenSize == document.documentElement.clientWidth;

window.addEventListener("resize", resizeFunction);

function resizeFunction() {
    prevScreenSize = currScreenSize;
    currScreenSize = document.documentElement.clientWidth;
    //console.log (document.documentElement.clientWidth);

    if (prevScreenSize > currScreenSize)
    {
        if (currScreenSize <= 782)
        {
            moreLessFunction();
        }   
    }
    if (prevScreenSize < currScreenSize)
    {
        if (currScreenSize >= 782)
        {
            //alert ("Inside If-Then #2 " + document.documentElement.clientWidth);
            moreLessFunction();
        }   
    }
}*/

function moreLessFunction() {
    var moreLessDots = document.getElementById("moreLessDots");
    var moreLessText = document.getElementById("moreLessText");
    var moreLessBtn = document.getElementById("moreLessBtn");
    
    if (show==="hide") {
        moreLessDots.style.display = "inline";
        moreLessBtn.innerHTML = "Read more";
        moreLessText.style.display = "none";
        show = "show";
    } else {
        moreLessDots.style.display = "none";
        moreLessBtn.innerHTML = "Read less";
        moreLessText.style.display = "inline";
        show = "hide";
    }
}