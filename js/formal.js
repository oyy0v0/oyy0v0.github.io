if(localStorage.getItem("blogbg")!=undefined){
    setBg(localStorage.getItem("blogbg"));
}else{
    document.getElementById("defineBg").innerText = `:root{
        --default-bg: url(https://i.postimg.cc/8cTtV7Xt/20231212164342.jpg);
        --darkmode-bg: url(https://i.postimg.cc/8cTtV7Xt/20231212164342.jpg);
        --mobileday-bg: url(https://i.postimg.cc/8cTtV7Xt/20231212164342.jpg);
        --mobilenight-bg: url(https://i.postimg.cc/8cTtV7Xt/20231212164342.jpg)'
    }`
}