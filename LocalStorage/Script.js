function test() {
   var uid = document.getElementById("username").value;
   var pw = document.getElementById("password").value;
   var email = document.getElementById("email").value;
   var city = document.getElementById("city").value;
 
   localStorage.setItem("uid", uid);
   localStorage.setItem("pw", pw);
   localStorage.setItem("email", email);
   localStorage.setItem("city", city);
 }
 