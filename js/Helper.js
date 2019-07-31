function successCheckApiButton(elem, elemInnerHtml)
{
    elem.classList.remove("btn-primary");
    elem.classList.remove("btn-danger");
    elem.classList.add("btn-success");
    elem.innerHTML = elemInnerHtml;
}

function warningBadgePills(elem, elemInnerHtml)
{
    elem.classList.remove("badge-primary");
    elem.classList.remove("badge-success");
    elem.classList.add("badge-warning");
    elem.innerHTML = elemInnerHtml;
}

function successBadgePills(elem, elemInnerHtml)
{
    elem.classList.remove("badge-primary");
    elem.classList.remove("badge-warning");
    elem.classList.add("badge-success");
    elem.innerHTML = elemInnerHtml;
}

function hideAlert()
{
    document.getElementById("alert").style.display = "none"; 
}

function tryAgain()
{
    let x;
    x = document.getElementById("alert");
    x.style.display = "block";
    x.innerHTML = "Invalid URL";

    x = document.getElementById("btn-check-api");
    x.innerHTML = "TRY AGAIN";
    x.classList.remove("btn-primary");
    x.classList.remove("btn-success");            
    x.classList.add("btn-danger");
}

//https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
function validURL(myURL) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(myURL);
}