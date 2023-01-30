function openSidebar() {
    if(document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mainContent").style = "margin-left:0%";
    }
    else{
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mainContent").style = "margin-left:18%";
    }
}
