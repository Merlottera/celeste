function lchange() {
    var url = window.location.href;
    
    if (url.includes('_en')) {
        window.location.href = url.replace("_en", "")
    } else {
        window.location.href = url.replace(".html", "_en.html")
    }
}