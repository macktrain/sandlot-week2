var xhr = new XMLHttpRequest();

xhr.open("GET", "../assets/js/portfolioXML.txt", true);
xhr.onload = function(){
    alert("hello");
};
xhr.send();


function buildHTML(x) 
{
    var html = "";
    var i;
    
    for(i = 0; i < x.length; i++) 
    {
        html += "   <div class='workDiv'>";
        html += "       <div class='exampleName'>";
        html += "           " +   x.example[i].exName;
        html += "        </div>";
        html += "       <div class='description'>";
        html += "           " +   x.example[i].description;
        html += "       </div>";
        html += "       <div class='techUsed'>";
        html += "           " +   x.example[i].techUsed;
        html += "       </div>";
        html += "       <div class='url'>";
        html += "           " +   x.example[i].url;
        html += "       </div>";
        html += "   </div>";
    }
    //alert ("*"+ html + "*");
}
