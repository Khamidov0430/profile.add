// let hemisbtn = document.querySelector(".hemisbutn");
// let modal_hemis = document.querySelector(".modal_hemis");
// hemisbtn.addEventListener("click", () => {
//   modal_hemis.classList.add(".modal_show");
// });

const hemisbtn = document.querySelector(".hemisbutn");
const modal_hemis = document.querySelector(".modal_hemis");

function hemisFunction() {
  modal_hemis.classList.add("modal_show");
}
let exit = document.querySelector(".modal_exit")
exit.addEventListener("click" , ()=>{
  modal_hemis.classList.remove("modal_show");
})