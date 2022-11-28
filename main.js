function loginfunction(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="dadu" && password=="user"){
        alert("Login Successful");
        return true;
    }
    else{
        alert("username or password is incorrect")
    }
}