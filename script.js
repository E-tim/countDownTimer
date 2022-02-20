let dates = document.getElementById('eventDate');
let times = document.getElementById('times');
let myBtn = document.getElementById('myButton');
let par = document.getElementById('myP');
let par2 = document.getElementById('myPp');
let eventName = document.getElementById('eventName');
let myPar = document.getElementsByClassName('.myPar');



// par.className = 'hide'

myBtn.addEventListener('click', () => {
    if (eventName.value === '' || dates.value === '') {
        alert('Please write the event name !');
    } else {
        let inputDate = new Date(dates.value);
        let x = setInterval( ()=>{
            let now = new Date() ;
            let dis = inputDate - now ;

            if (dis > 0) {
                // Calculating time for day, hours , mins , sec
            var days = Math.floor(dis / (1000 * 60 * 60 * 24));
            var hours = Math.floor(dis % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            var mins = Math.floor(dis % (1000 * 60 * 60) / (1000 * 60))
            var sec = Math.floor(dis % (1000 * 60) / (1000))

            par.innerHTML = eventName.value + '<br>' + days + ' D | ' + hours  + ' Hr | '+ mins + ' Min | ' + sec + ' Sec  ';
            
            } else {
                par.className = 'hides';
                clearInterval(x)
                alert('It is' + eventName.value + 'day');
                par.innerHTML = eventName.value + '<br>' + 'Today is the day';
            }
            par.className = 'hides';    
            
        }, 1000)
    }
    
})



  
// myBtn.addEventListener('click', () => {
//     var timess = document.getElementById('tim').value;
//     var datess = dates.value;
//     let calls = datess + ' ' + timess;
//     par.innerHTML = calls;
// })



