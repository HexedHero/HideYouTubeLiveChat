window.onload = function()
{

    // Our CSS
    const CSS_TEXT = "#chat { display:none !important } /* Remove Live Chat */";

    // Make CSS to hide the live chat
    const css = document.createElement("style");
    css.setAttribute('type', 'text/css');

    if ("textContent" in css)
    {

        css.textContent = CSS_TEXT;

    }
    else
    {

        css.innerText = CSS_TEXT;

    }

    // Inject the CSS to the page
    document.body.appendChild(css);
    alert("tes")

}