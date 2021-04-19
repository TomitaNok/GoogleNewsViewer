var y = 0;
document.getElementById('dog1').onclick = function() {
    y += 32;
    document.getElementById('dog1').style.top = y + "px";
}