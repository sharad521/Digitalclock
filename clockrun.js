const time = document.querySelector('.clock')
function clockdesign() {
    const date = new Date;
    var  hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var AMPM = "AM";
    if(hours >= 12){
      AMPM = "PM"
      hours = hours -12
    }
    if(second<10){
        second = "0" + second
    }
    if(minutes<10){
        minutes = "0" + minutes
    }
    if(hours<10){
        hours = "0" + hours
    }
    
    time.innerHTML = `${hours} : ${minutes} : ${second}  ${AMPM}`  
}
setInterval(clockdesign,1000)