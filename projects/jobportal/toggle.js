const bar = document.getElementById("bar");
const menu = document.getElementById("menu");


// if(bar){
//     bar.addEventListener("click",()=>{
//         menu.classList.toggle("active");
//     });
// }

if (bar) {
    bar.addEventListener("click", () => {
      menu.classList.toggle("active");

      // Toggle between the hamburger and X icon
      if (bar.classList.contains("bx-menu")) {
        bar.classList.remove("bx-menu");
        bar.classList.add("bx-x");
      } else {
        bar.classList.remove("bx-x");
        bar.classList.add("bx-menu");
      }
    });
  }


  