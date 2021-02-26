function login_user(){
    localStorage.setItem("user_name",document.getElementById("user_name").value);
    window.location.replace("kwitter_room.html");
}