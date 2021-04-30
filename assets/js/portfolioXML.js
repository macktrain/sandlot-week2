var url = "https://macktrain.github.io/sandlot-week2/assets/json/portfolio.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() 
{
    
    if (this.readyState == 4 && this.status == 200) 
    {
        var portfolioArr = JSON.parse(this.responseText);
        buildHTML(portfolioArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function buildHTML(x) 
{
    var html = "";
    var i;
    
    for(i = 0; i < x.length; i++) 
    {
        alert (x.example[i].exName);
        html += "   <div class='workDiv'>";
        html += "       <div class='exampleName'>";
        html += "           " +   x[i].exName;
        html += "        </div>";
        html += "       <div class='description'>";
        html += "           " +   x[i].description;
        html += "       </div>";
        html += "       <div class='techUsed'>";
        html += "           " +   x[i].techUsed;
        html += "       </div>";
        html += "       <div class='url'>";
        html += "           " +   x[i].url;
        html += "       </div>";
        html += "   </div>";
    }
    document.getElementById("workHTML").innerHTML = html;
    alert ("*"+ html + "*");
}
