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
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name_tag="<h3 id='name_tag'>"+message_data["message_by"]+"<img src= tick.png class='verified'>"+"</h3>";
        message_tag="<h3 class='message_h4'>"+message_data["message"]+"</h3>";
        likes_tag="<button class='btn btn-warning' id="+firebase_message_id+" onclick='update_Like(this.id)' value="+message_data["likes"]+">likes:"+message_data["likes"]+"</button>"
        document.getElementById("output").innerHTML+=name_tag+message_tag+likes_tag;


//End code
      } });  }); }
getData();
function update_Like(message_id){
 updated_likes=Number(document.getElementById(message_id).value);
 console.log(updated_likes);
updated_likes=updated_likes+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({likes:updated_likes});
}

function send(){
      msg=document.getElementById("send").value;
      console.log("room_name "+room_name)
   firebase.database().ref(room_name).push({
         message_by: user_name,
         message:msg,
         likes: 0 



   });
window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}      
