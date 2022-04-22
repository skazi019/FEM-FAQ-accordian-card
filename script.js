let acc = document.getElementsByClassName('dropdown');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", toggleContent);
}

function toggleContent() {
    let panel = this.nextSibling;
    panel = panel.nextSibling;
    console.log(panel);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}