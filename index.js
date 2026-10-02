document.addEventListener('click', (e) => {
    let inputVal = document.getElementById("textbox").value;
    document.title=inputVal;

})
function loading() {
    let ls = localStorage.getItem("counter");
    let ss = sessionStorage.getItem("counter");
    if (ls) {
        document.getElementById("ls").innerText = JSON.parse(ls);
    }
    if (ss) {
        document.getElementById("ss").innerText = JSON.parse(ss);
    }
    console.log("loading")
}
function lsFunction() {
    let lsVal = JSON.parse(document.getElementById("ls").innerText) + 1;
    document.getElementById("ls").innerText = lsVal;
    localStorage.setItem("counter", lsVal);

}
function ssFunction() {
 let ssVal = JSON.parse(document.getElementById("ss").innerText) + 1;
    document.getElementById("ss").innerText = ssVal;
    sessionStorage.setItem("counter", ssVal);

}

