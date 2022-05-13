let acc = document.getElementsByClassName('dropdown');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.previousElementSibling.classList.remove("text-bold")
            panel.style.maxHeight = null;
            panel.previousElementSibling.children[0].children[0].classList.remove("flip")
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.previousElementSibling.classList.add("text-bold")
            panel.previousElementSibling.children[0].children[0].classList.add("flip")
        }
    });
}