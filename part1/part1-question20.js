function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let id = setInterval(printTime, 1 * 1000);

