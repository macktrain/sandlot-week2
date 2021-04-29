

/*[
    {
        "Example": "1",
        "Example Name": "Example 1",
        "Description": "HTML",
        "Technologies Used": "HTML/CSS/js",
        "URL": "www.gitLee.com/ex1"
    },
    {
        "Example": "2",
        "Example Name": "Example 2",
        "Description": "CSS",
        "Technologies Used": "HTML/CSS/js",
        "URL": "www.gitLee.com/ex2"
    },
    {
        "Example": "3",
        "Example Name": "Example 3",
        "Description": "Javasctipt",
        "Technologies Used": "HTML/CSS/js",
        "URL": "www.gitLee.com/ex3"
    }
]*/
/*Pulled myFunction code from CSS Tricks */
var show = "hide";

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