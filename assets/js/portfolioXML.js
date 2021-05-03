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
    var isLive = 0;
    
    for(i = 0; i < x.example.length; i++) 
    {
        (x.example[i].status==="Live") ? isLive = 1 :isLive = 0;
/* This allows the coming soon image to be displayed via css comingSoon class */
        
        html += "   <div class='example' id='exampleOrder"+ (i+1) +"'>";
        if (!isLive)
        {
            html += "       <div class='comingSoon'>";  
            html += "           <div class='exampleName' >";
            html += "               " +   x.example[i].exName;
            html += "           </div>";
            html += "           <div class='description'>";
            html += "               " +   x.example[i].description;
            html += "           </div>";
            html += "           <div class='exampleName' >";
            html += "               <p> COMING SOON!</p>";
            html += "           </div>";
            html += "       </div>";
        }
        else
        {
            html += "       <div class='exampleName'>";
            html += "           " +   x.example[i].exName;
            html += "       </div>";
            html += "       <div class='description'>";
            html += "           " +   x.example[i].description;
            html += "       </div>";
            html += "       <div class='techUsed'>";
            html += "           " +   x.example[i].techUsed;
            html += "       </div>";
            html += "       <div class='url'>";
            html += "           " +   x.example[i].url;
            html += "       </div>";
        }
        html += "   </div>";
    }
    document.getElementById("portfolioWin").innerHTML = html;
}
