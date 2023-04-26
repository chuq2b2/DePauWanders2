   
//Xu ly file csv    
var countryData = {};
d3.csv("data_country1.csv").then(function(data) {
        data.forEach(function(d) {
        var country = d.country;
        var hoverdes = d.hoverDes;
        var clickdes = d.clickDes;
        countryData[country] = {'hover_Des':hoverdes, 'click_Des': clickdes};
    });
});

for (var countryCode in countryData) {
    if (countryData.hasOwnProperty(countryCode)) {
      var country = countryData[countryCode];
      console.log("Country Code: " + countryCode);
      console.log("Description: " + country.hover_Des);
      console.log("Link: " + country.click_Des);
    }
  }


//--------------------------------------------------------------------------------//

//Xu ly hover and click
var paths = document.querySelectorAll(".allPaths");                 //access all countries in the svg map
var hoverTooltip = document.querySelector('#hovername');                      //access the box of description when hovering in ->>> it appear
var clickTooltip = document.querySelector('#clickname');
//var hovering = false;

paths.forEach(function(path){                                       //access each single country when mouseover
    //hover
    path.addEventListener("mouseover", function(){
        var countryName = path.getAttribute('id');                  //get the name of the country through the id section
        if (countryName in countryData){                            //check if the country was in the DePauw list or not
            /*
            Display the box: countryName + countryDescription taken from the countryData that we get above
            */
            //var hoverDes = countryData[countryName]['hover_Des'];      
            hoverTooltip.innerHTML = "<h2>" + countryName + "</h2>";// <p>" + hoverDes + "</p>";
            hoverTooltip.style.left = (event.pageX + 10) + "px";         //the position of the box calculated from the position of the mouse
            hoverTooltip.style.top = (event.pageY + 10) + "px";
            // Show the tooltip -> opacity to 1
            hoverTooltip.style.opacity = 1;


            //hovering = true;
        }
    });
    path.addEventListener("mouseout", function() {
    // // Hide the tooltip
        hoverTooltip.style.opacity = 0;
    }); 

    //----------------------------------------------//
    //click
    path.addEventListener("click", function(){
        var countryName = path.getAttribute('id');                  //get the name of the country through the id section
        if (countryName in countryData){                            //check if the country was in the DePauw list or not
            /*
            Display the box: countryName + countryDescription taken from the countryData that we get above
            */
            var clickDes = countryData[countryName['click_Des']];      
            clickTooltip.innerHTML = "<h2>" + countryName + "</h2><p>" + clickDes + "</p>";
            // Show the tooltip -> opacity to 1
            clickTooltip.style.opacity = 1;

            //hovering = true;
        }
    });

    //clickoutside to hide
    d3.select("body")
        .on("click", function() {
            if (!clickTooltip.empty()) {
                clickTooltip.style("display", "none");
            }
        });



    // setInterval(function() {
    //     if (!hovering) {
    //         tooltip.style("opacity", 0);
    //     }
    // }, 100);


//-----------------------------------------------------------------------------//
//xu ly click
    });
