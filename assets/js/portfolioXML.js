var url = "https://macktrain.github.io/sandlot-week2/assets/json/portfolio.json";
var xhro = new XMLHttpRequest();

xhro.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        //alert(this.responseText);
        var json = JSON.parse(this.responseText);
        buildHTML(json);
    }
};
xhro.open("GET", url, true);
xhro.send();

function buildHTML(x) 
{
    var html = "";
    var i;
    
    for(i = 0; i < x.example.length; i++) 
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
    document.getElementById("workHTML").innerHTML = html;
}
