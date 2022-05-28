var firebaseConfig = {
    apiKey: "AIzaSyDt0FDpks9urhxBgyk9yiqUVut3IvmlCHY",
    authDomain: "p93-09876.firebaseapp.com",
    projectId: "p93-09876",
    storageBucket: "p93-09876.appspot.com",
    messagingSenderId: "555135504950",
    appId: "1:555135504950:web:cfc930e48eb2358c98fe97",
    measurementId: "G-5PMRZ6ZHXE"
  };    
   firebase.initializeApp(firebaseConfig);

   
  user_name=localStorage.getItem("user_name");
  document.getElementById("username").innerHTML="Welcome "+ user_name + "!";

  function addRoom()
  {
        room_name=document.getElementById("roomname").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room names "
        });
        localStorage.setItem("room_name" , room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row="<div class= 'room_name' id="+Room_names+" onclick='redirectTonextpage(this.id)'> # " +Room_names + "</div>";
     document.getElementById("output").innerHTML+=row;
    
    });});}
getData();

function redirectTonextpage(name)
{
    console.log(name);
    localStorage.setItem("room_name " , name);
    window.location="kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
