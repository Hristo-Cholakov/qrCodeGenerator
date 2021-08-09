function codeGenerator(){
    var urlString = document.getElementById("url").value;
    new QRCode(document.getElementById("qr"), urlString);
    
      
  }