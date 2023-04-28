window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('header');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });

const container = document.querySelector('.container');
const links = document.querySelector('.links');

//-------------------------------------------------------------//

d3.csv("timeLine/timeline_data.csv").then(function(data) {
  var timeLine = {};
  data.forEach(function(d) {
      var date = d.Date;
      var title = d.Title;
      var descrip = d.Description;
      var img = d.Img;

      timeLine[date] = {'title':title, 'descrip': descrip, 'img': img};
  });

  console.log(timeLine);

  
  const keyDate = Object.keys(timeLine);

  keyDate.sort(function(a,b){
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA-dateB;
  });

  console.log(keyDate);

  var lr = "left";
  var event = document.getElementsByClassName("timeline")[0];
  keyDate.forEach(function(date){
    var title = timeLine[date]["title"];  
    var des = timeLine[date]["descrip"];
    var img = timeLine[date]["img"];
  
    event.innerHTML += `<div class ="timeline-container ${lr}-container">
                          <img src = "assets/pictures/organizations/${img}"/>
                          <div class="text-box">
                            <h2>${title} </h2>
                            <small>${date} </small> 
                            <p>${des}</p>
                            <span class="${lr}-container-arrow"></span>
                          </div>
                        </div>
                    `
    if (lr == "left")
      lr = "right";
    else
      lr = "left";
                        ;
})
});

