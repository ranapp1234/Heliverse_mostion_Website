
let colors = [
  "red",
  "yellow",
  "brown",
  "blue",
  "green",
  "orange",
  "pink",
  "violet",
];
let i = 0;

document.onmousemove = function (e) {
  i++;
  let x = e.pageX;
  let y = e.pageY;

  let span = document.createElement("span");
  span.classList.add("follower");
  span.style.top = y + "px";
  span.style.left = x + "px";
  span.style.backgroundColor = colors[i - 1];
  document.body.appendChild(span);
  
   if(i == colors.length)
   {
    i =0;
   }

   setTimeout(()=>{
   span.remove();
   },1000);

}