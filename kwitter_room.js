var firebaseConfig = {
      apiKey: "AIzaSyDHslNwW9AO6_sDn4tbjA8LSSeUYnHFPbs",
      authDomain: "elite-hayato.firebaseapp.com",
      databaseURL: "https://elite-hayato.firebaseio.com",
      projectId: "elite-hayato",
      storageBucket: "elite-hayato.appspot.com",
      messagingSenderId: "744372441531",
      appId: "1:744372441531:web:7eba7e01030c6ac3e4349e",
      measurementId: "G-7PMF2MG34W"
    };
    firebase.initializeApp(firebaseConfig);

    var room_name="";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("room_name",Name);
window.location="kwitter_page.html"


}
document.getElementById("display_name").innerHTML="WELCOME, "+localStorage.getItem("user_name");
function add_room_name(){
      room_name=document.getElementById("room_name").value;
localStorage.setItem("room_name",document.getElementById("room_name").value);
firebase.database().ref("/").child(document.getElementById("room_name").value).update({purpose:"adding user"});
window.location="kwitter_page.html"
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}
