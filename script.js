let dates = document.getElementById('eventDate');
let times = document.getElementById('times');
let myBtn = document.getElementById('myButton');
let eventName = document.getElementById('eventName');




myBtn.addEventListener('click', () => {

    // deleting the event 



    if (eventName.value === '' || dates.value === '') {
        alert('Please write the event name and pick a date !');
    } else {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let pars2 = document.createElement('p');
        let pars3 = document.createElement('p');
        let fontAwesome = document.createElement('I');
        fontAwesome.setAttribute('class', 'fas fa-trash-alt')

        fontAwesome.addEventListener('click', ()=> {
            div.style.display = 'none';
        })
        div.setAttribute('class', 'myDiv');
        document.body.appendChild(div);
        div.appendChild(fontAwesome);
        div.appendChild(h2);
        div.appendChild(pars2);
        div.appendChild(pars3);
        let val = document.createTextNode(eventName.value);
        h2.appendChild(val);
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

            pars2.innerHTML = `${days} D : ${hours} H : ${mins} M : ${sec} S`;
            pars3.style.display = 'none';
            
            } else {
                alert('Is your event day');
                // h2.style.display = 'none';
                pars3.innerHTML = 'Waw The event is today'
                clearInterval(x)
            } 
            
        }, 1000)
        eventName.value ='';
    }
    
})



  
// myBtn.addEventListener('click', () => {
//     var timess = document.getElementById('tim').value;
//     var datess = dates.value;
//     let calls = datess + ' ' + timess;
//     par.innerHTML = calls;
// })



