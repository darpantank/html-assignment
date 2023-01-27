function openSidebar() {
    if(document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mainContent").style = "margin-left:2%";
    }
    else{
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mainContent").style = "margin-left:20%";
    }
}
