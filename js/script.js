// START HEADER
// VARIBAL

let listIcon= document.querySelector('.bigerList');
let headerElet=document.querySelector('.headerHome .container');
const headerEletHeight= getComputedStyle(headerElet).height;
// EVENT LISTNER

listIcon.onclick= _ => headerElet.style.height='fit-content' ;
listIcon.onmouseleave= _ => headerElet.style.height=headerEletHeight ;

// END
let a=(resolveV)=> resolveV;
console.log("#".repeat(10));
const prom= new Promise(
    (resol,rejec)=>{
        resol(1==="1");
    }
).then(
    a,
    (rejectV)=>"bade conction");
    console.log(prom);
