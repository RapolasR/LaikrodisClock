const valandosEL = document.getElementById('valandos');
const minutesEL = document.getElementById('minutes');
const sekundesEL = document.getElementById('sekundes');
const metaiEL = document.getElementById('metai');


//let d = new Date('2023-08-08');
//let h = new Date().getHours();
//console.log(h);
//let m = new Date().getMinutes();
//console.log(m);
//let s = new Date().getSeconds();
//console.log(s);


function laikrodis() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let met = new Date().getFullYear();
    
    valandosEL.innerHTML = h + ':';
    minutesEL.innerHTML = m + ':';
    sekundesEL.innerHTML = s;
    metaiEL.innerHTML = 'Metai: ' + met;
    
    
    setTimeout(laikrodis,1000);
    
};

laikrodis();