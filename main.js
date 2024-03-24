func_t = () => {

    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let t=h>12?"PM":"AM"

    let hour = document.getElementById("hours")
    let minute = document.getElementById("minutes")
    let second = document.getElementById("seconds")
    let time=document.getElementById("time")

    hour.innerHTML = h
    minute.innerHTML = m;
    second.innerHTML = s;
    time.innerHTML=t;
}
setInterval(func_t, 1000)
