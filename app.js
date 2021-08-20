function codeGenerator(){
// var urlString = document.getElementById("url").value;
    var ssid = document.getElementById("ssid").value;
    var encr = document.getElementById("encr").value;
    var hiddenCheck = document.getElementById("hidden").checked;
    var key = document.getElementById("pass").value;
// new QRCode(document.getElementById("qr"), "WIFI:S:home.cweiske.de;T:WPA;P:2342;H:true;");
    var canvas = new QRCode(document.getElementById("qr"), "WIFI:S:" + ssid + ";T:" + encr + ";P:" + key + ";" + "H:" + hiddenCheck + ";;");

};

function toggleVisibility(){
    var toggler = document.getElementById("pass");
    var slasher = document.getElementById("slasher");
        if(toggler.type === "password"){
            toggler.type = "text"
            slasher.classList.add("fa-eye-slash");
            slasher.classList.remove("fa-eye");
        }else {
            toggler.type = "password";
            slasher.classList.remove("fa-eye-slash");
            slasher.classList.add("fa-eye");
        }
    };