var firebaseConfig = {
      apiKey: "AIzaSyDt0FDpks9urhxBgyk9yiqUVut3IvmlCHY",
      authDomain: "p93-09876.firebaseapp.com",
      databaseURL: "https://p93-09876-default-rtdb.firebaseio.com",
      projectId: "p93-09876",
      storageBucket: "p93-09876.appspot.com",
      messagingSenderId: "555135504950",
      appId: "1:555135504950:web:cfc930e48eb2358c98fe97",
      measurementId: "G-5PMRZ6ZHXE"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);



user_name=localStorage.getItem("user");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
