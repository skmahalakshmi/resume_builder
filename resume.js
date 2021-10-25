/*
function loadJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
//usage:
loadJSON("resources/data.json", function(text) {
  let data = JSON.parse(text);
  console.log(data);
});
*/
var main = document.getElementById("maindiv")
main.classList.add("maindiv");

//var divf = document.createElement("div1");
//main.appendChild(divf);
//var img1 = document.createElement("img");
//img1.src=("images/image1.png");
//divf.appendChild(img1);
//var head1 = document.createElement("h2");
//var Node = document.createTextNode("heading2");
//head1.appendChild(Node);
//divf.appendChild(head1);
//var para = document.createElement("p");
//var Node = document.createTextNode("This is new dynamic  java script file");
//para.appendChild(Node);
//divf.appendChild(para);
//para.innerHTML="fjskdfskjhfkjsdfks";
//console.log(main);
//document.getElementById("para").style.color = "blue";
//var body = document.getElementsByTagName('body')[0].style.background="green";
//para.classList.add("p");
//head1.classList.add("h2");
//img1.classList.add("img");
//main.classList.add("divf");

fetch("real.json")
.then(res=>res.json())
.then(made=>{
  console.log(made);
  var divL=document.createElement("div");
  divL.classList.add("ldiv");
  main.appendChild(divL);

  var image=document.createElement("img");
  image.src=made.basics.picture;
  image.classList.add("img")
  divL.appendChild(image);

  var head=document.createElement("h3");
  head.textContent=made.basics.name;
  head.classList.add("h3")
  divL.appendChild(head);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divL.appendChild(para);

  var divR=document.createElement("div");
  divR.classList.add("rdiv");
  main.appendChild(divR);

  var head1=document.createElement("h2");
  head1.textContent="CARRIER OBJECTIVE";
  divR.appendChild(head1);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

for(var i in made.education)
{  var head2=document.createElement("h2");
  head2.textContent=made.education[i].type;
  divR.appendChild(head2);
  for(var j in made.education[i].des)
  {
    var para=document.createElement("p");
    para.textContent=made.education[i].des[j];
    divR.appendChild(para);
  }
}
for(var i in made.skills)
{
  var head3=document.createElement("h2");
  head3.textContent=made.skills[i].name;
  divR.appendChild(head3);
  for(var j in made.skills[i].keywords)
  {
    var unorder=document.createElement("ul");
    divR.appendChild(unorder);
    var list=document.createElement("li");
    list.textContent=made.skills[i].keywords[j];
    unorder.appendChild(list);
  }

}







/*  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);

  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);
  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);
  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);
  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);
  var para=document.createElement("p");
  para.textContent=made.basics.label;
  para.classList.add("p")
  divR.appendChild(para);
  var horizontal=document.createElement("hr");
  divR.appendChild(horizontal);*/














})
