const changePos = () => {
    var elm = document.getElementById("elm");
    elm.style.position ="absolute"
    elm.style.top = (Math.random()*screen.height) + "px";
    elm.style.left = (Math.random()*screen.width) + "px";
}