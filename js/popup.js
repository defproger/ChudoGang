function open(element) {
    element.classList.add("active");
}
function closepopup(element) {
    element.classList.remove("active");
}

// Первый вариант

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


// Второй вариант
const p = document.getElementsByClassName('popup_div');
var params = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .reduce(
        function (p, e) {
            var a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );


if (params.soucre === "from_free_veb") {
    setTimeout(() => {
        open(p[1])
    }, 10000);

    //вместо этого онклик
    setTimeout(() => {
        closepopup(p[1])
    }, 12000);
    /////////////////////



} else if (getCookie('popap') === undefined) {
    setTimeout(() => {
        open(p[0])
    }, 10000);

    //вместо этого онклик
    setTimeout(() => {
        closepopup(p[0])
    }, 12000);
    /////////////////////

    document.cookie = "popap=true; max-age=43200";
}


// Закрыть попап
let closeButtons = document.querySelectorAll('.pop_up_close');
closeButtons.forEach(element => {
    element.addEventListener('click', () => {
        closepopup(p[0]);
        closepopup(p[1])
    })
});