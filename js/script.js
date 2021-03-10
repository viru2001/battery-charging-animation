const chargerLoad = () => {
    let chargingBar = document.querySelector('#charging');
    chargingBar.innerHTML = '&#xf244;';
    chargingBar.style.color = "#ff0000";
    setTimeout(() => {
        chargingBar.innerHTML = '&#xf243;';
        chargingBar.style.color = "#ff6600";
    }, 1000);
    setTimeout(() => {
        chargingBar.innerHTML = '&#xf242;';
        chargingBar.style.color = "#ffcc00";
    }, 2000);
    setTimeout(() => {
        chargingBar.innerHTML = '&#xf241;';
        chargingBar.style.color = "#99cc00";
    }, 3000);
    setTimeout(() => {
        chargingBar.innerHTML = '&#xf240;';
        chargingBar.style.color = "#009900";
    }, 4000);
    
}

setInterval( () =>{
    chargerLoad();
},5000)

chargerLoad();