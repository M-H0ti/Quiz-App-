function validate() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userId").value;
    if(a !== "" && b === "90283e9a"){
        window.location.href = "quiz.html";
        return false;
    }else{
        if(a === ""){
            document.getElementById("userName").style.borderColor = "red";
            return false;
        }else if
            (b !== "90283e9a"){
            document.getElementById("userName").style.borderColor = "black";
            document.getElementById("userId").style.borderColor = "red";
            return false;
            }
        
    }
}

