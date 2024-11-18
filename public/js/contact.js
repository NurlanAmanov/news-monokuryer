function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let number = document.getElementById("number").value 
    let whatsappUrl = "https://wa.me/553010601?text=" 
        + "*Əlaqə Bölümü*: Sizə bir mesaj var!%0a%0a" 
        + "*Ad:* " + encodeURIComponent(name) + "%0a"
        + "*Email:* " + encodeURIComponent(email) + "%0a"
        + "*Nömrə:* " + encodeURIComponent(number)+"%0a"
        + "*Mesaj:* " + encodeURIComponent(message);
      

    window.open(whatsappUrl, '_blank');}