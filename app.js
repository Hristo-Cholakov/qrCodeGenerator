function codeGenerator(){
    // var urlString = document.getElementById("url").value;
    var ssid = document.getElementById("ssid").value;
console.log(ssid);

var encr = document.getElementById("encr").value;

console.log(encr);

var key = document.getElementById("pass").value;
    // new QRCode(document.getElementById("qr"), "WIFI:S:home.cweiske.de;T:WPA;P:2342;;");
    new QRCode(document.getElementById("qr"), "WIFI:S:" + ssid + ";T:" + encr + ";P:" + key + ";;");
      
  };

  function toggleVisibility(){
      var toggler = document.getElementById("pass");
      if(toggler.type === "password"){
          toggler.type = "text"
      }else {
          toggler.type = "password"
      }
  }