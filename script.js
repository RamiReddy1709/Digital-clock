function time(){
    let date=new Date()
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    let ampm="AM"
    let day=date.getDay()
    let month=date.getMonth()
    let year=date.getFullYear()

    if (hours=12){
hour= hour-12
ampm="Pm"
    }
    else if (hour>12){
       hour=hour-12
       ampm="PM"
    }
    document.getElementById("clock").innerHTML=hour+":"+minutes+":"+seconds+" "+ ampm
    document.getElementById("cal").innerHTML=day+":"+month+":"+year
    
}



time()
setInterval(()=>{
    time()
},1000)



