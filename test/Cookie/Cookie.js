function setCookie(cname, cvalue, exdays) {

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = `expires=${d.toGMTString()}`;

    document.cookie = `${cname}=${cvalue}; ${expires}`;
}
function setCookie(cname, cvalue, exdays, cpath) {

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = `expires=${d.toGMTString()}`;

    var path = `path=${cpath}`;

    document.cookie = `${cname}=${cvalue}; ${expires}; ${path}`;
}