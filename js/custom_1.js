function openSidebar() {
    if(document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mainArea").style = "left:1%";
    }
    else{
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mainArea").style = "left:11%";
    }
}
