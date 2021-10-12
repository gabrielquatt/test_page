"use strict"
const url_menu = "pages/page1.html";
const url_game = "pages/page2.html";

load_page(url_menu);

//============================================================//
document.getElementById("p1").addEventListener('click', () => {
    load_page(url_menu);
});

document.getElementById("p2").addEventListener('click', () => {
    load_page(url_game);
});
//============================================================//

function load_page(page) {
    let content = document.getElementById("content");
    fetch(page)
        .then((r) => r.text())
        .then((r) => {
            content.innerHTML = "";
            content.innerHTML = r;
        });
        //if else
}
