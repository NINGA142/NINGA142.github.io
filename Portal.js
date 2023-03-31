function tp(X)
{
    if (X!=="here") {
        window.open(X)
    }else{
        let nav = document.querySelector("nav");
        nav.style.background="linear-gradient(to top ,transparent, #307300)";
        setTimeout(()=>{
            nav.style.background="linear-gradient(to top ,transparent, rgba(0,0,0,0.7))";
        },300)
    }
}