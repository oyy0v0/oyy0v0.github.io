if(localStorage.getItem("blogbg") != undefined){
    setBg(localStorage.getItem("blogbg"));
}else{
    document.getElementById("defineBg").innerText = `:root{
        --default-bg: url(https://oyy0v0pic.oss-cn-guangzhou.aliyuncs.com/img/background.jpg);
        --darkmode-bg: url(https://oyy0v0pic.oss-cn-guangzhou.aliyuncs.com/img/background.jpg);
        --mobileday-bg: url(https://oyy0v0pic.oss-cn-guangzhou.aliyuncs.com/img/background.jpg);
        --mobilenight-bg: url(https://oyy0v0pic.oss-cn-guangzhou.aliyuncs.com/img/background.jpg);
    }`;
}