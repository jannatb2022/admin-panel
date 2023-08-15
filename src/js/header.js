//image___overlay___
let overlay = document.getElementById('overlay');
let overlay_img = document.getElementById('overlay-img');
let hide_overlay = document.getElementById('hide-overlay');
let show_overlay = false;

(()=>{
    function toggle(){
        show_overlay=!show_overlay;
        if(show_overlay){
            overlay.style.transform = "scaleY(1)";
            overlay.style.display = "block";
            hide_overlay.style.display = "block";
        }
        else{
            overlay.style.transform = "scaleY(0)";
            overlay.style.display = "none";
            hide_overlay.style.display = "none";
        }
    }
    overlay_img.addEventListener('click', () =>{
        toggle();
        
    })   
    hide_overlay.addEventListener('click', () =>{
        toggle();
        
    })   

        
})();
    
 ////__show_____search____ 
 
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btnss = document.getElementById('btnss');
let show_btn = false;
(()=>{
    function toggle(){
        show_btn=!show_btn;
        if(show_btn){
            btn2.style.display = "block";
            btn2.style.transform = "scaleY(1)"
            btn2.style.transition = "transform"
            btnss.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>`;
        }
        else{
            btn2.style.display = "none";
            btn2.style.transform = "scaleY(0)"
            btn2.style.transition = "transform"
            btnss.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>`;
        }
    }
    btn.addEventListener('click', () =>{
        if(document.documentElement.clientWidth < 1024){
            toggle(); 
        } 
    })   
})();
        
    


//fullscreen___
let element = document.documentElement;
function fullscreen(){
    if(element.requestFullscreen){
        element.requestFullscreen()
    }
}

//side__nav__items...
let nav = document.querySelectorAll('.nav');
let nav_items = document.querySelectorAll('.nav-items');
let show_items;

nav.forEach((el, i)=>{
    el.addEventListener('click', (e)=>{
        nav.forEach((el2, i2)=>{
           el2.nextElementSibling.classList.add('hidden');
        });
       if(el.nextElementSibling.classList.contains('hidden')){
        el.nextElementSibling.classList.remove('hidden');
       }
       if (show_items ===  el) {
        el.nextElementSibling.classList.add('hidden');
        show_items= null;

       }
       else{
            el.nextElementSibling.classList.remove('hidden');
            show_items = el;
       } 
        
        
        // console.log('djkhkj');
    })
});

/////////////notification_____area_____

let notification = document.getElementById('notification');
let notification_message = document.getElementById('notification-message');
let notification_overlay = document.getElementById('notification-overlay')
let show_notificaion = false;


 (()=>{
    function notifi(){
        show_notificaion=!show_notificaion;
        if(show_notificaion){
            
            notification_message.style.display = "block";
            notification_overlay.style.display = "block";
        }
        else{
            
            notification_message.style.display = "none";
            notification_overlay.style.display = "none";
        }
    }
    notification.addEventListener('click', () =>{
        notifi();
        
    })   
    notification_overlay.addEventListener('click', () =>{
        notifi();
        
    })   
 })();   
    

 
        
    




// for (let i = 0; i < nav.length; i++) {
//     nav[i].addEventListener('click', ()=>{
//         show_items = !show_items;
    
//         if(show_items){
//             nav_items[i].style.display = block;
//         }
//         else {
//             nav_items[i].style.display= none;
//         }
//         console.log('vfvfd');
//     })
    
//  }
// nav[0].addEventListener('click', ()=>{
//     show_items = !show_items;

//     if(show_items){
//         nav_items[0].style.display = block;
//     }
//     else {
//         nav_items[0].style.display= none;
//     }
//     console.log('vfvfd');
// })












// const nav_link_toggler = document.querySelectorAll(".nav_btn_toggler");
// const all_nav_btn = document.querySelectorAll(".nav_btn");
// const all_sub_link = document.querySelectorAll(".sub_link");
// let active_index;
// nav_link_toggler.forEach((_, i) => {
//   nav_link_toggler[i].addEventListener("click", function () {
//     nav_link_toggler.forEach((_, j) => {
//       nav_link_toggler[j].lastElementChild.innerHTML = "+";
//       nav_link_toggler[j].nextElementSibling.classList.remove("show_nav_items");
//       nav_link_toggler[j].nextElementSibling.classList.remove(
//         "show_nav_items2"
//       );
//       nav_link_toggler[j].nextElementSibling.classList.add("hide_nav_items2");
//       nav_link_toggler[j].nextElementSibling.classList.add("hide_nav_items");
//     });

//     nav_link_toggler[i].lastElementChild.innerHTML = "-";
//     if (
//       nav_link_toggler[i].nextElementSibling.classList.contains(
//         "hide_nav_items"
//       )
//     ) {
//       nav_link_toggler[i].nextElementSibling.classList.remove(
//         "hide_nav_items2"
//       );
//       nav_link_toggler[i].nextElementSibling.classList.add("show_nav_items2");
//       setTimeout(() => {
//         nav_link_toggler[i].nextElementSibling.classList.remove(
//           "hide_nav_items"
//         );
//         nav_link_toggler[i].nextElementSibling.classList.add("show_nav_items");
//       }, 100);
//     } else {
//       nav_link_toggler[i].nextElementSibling.classList.add("hide_nav_items");
//       nav_link_toggler[i].nextElementSibling.classList.remove("show_nav_items");
//       setTimeout(() => {
//         nav_link_toggler[i].nextElementSibling.classList.add("hide_nav_items2");
//         nav_link_toggler[i].nextElementSibling.classList.remove(
//           "show_nav_items2"
//         );
//       }, 100);
//     }

//     if (active_index === i) {
//       nav_link_toggler[i].lastElementChild.innerHTML = "+";
//       nav_link_toggler[i].nextElementSibling.classList.remove("show_nav_items");
//       nav_link_toggler[i].nextElementSibling.classList.remove(
//         "show_nav_items2"
//       );
//       nav_link_toggler[i].nextElementSibling.classList.add("hide_nav_items2");
//       nav_link_toggler[i].nextElementSibling.classList.add("hide_nav_items");
//       active_index = null;
//     } else {
//       active_index = i;
//     }
//   });
// });