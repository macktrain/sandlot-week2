function buildHTML(jsonArr) 
{
    var html = "";
    var i;
    for(i = 0; i < jsonArr.length; i++) 
    {
        html += "<div class='workDiv'>";
        html += "     <div class='exampleName'>";
        html += "          " +   jsonArr[i].exName;
        html += "     </div>";
        html += "     <div class='description'>";
        html += "          " +   jsonArr[i].description;
        html += "     </div>";
        html += "     <div class='techUsed'>";
        html += "          " +   jsonArr[i].techUsed;
        html += "     </div>";
        html += "     <div class='url'>";
        html += "          " +   jsonArr[i].url;
        html += "     </div>";
        html += "</div>";
    }
    document.getElementById("work").innerHTML = html;
    console.log(html);
}

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
