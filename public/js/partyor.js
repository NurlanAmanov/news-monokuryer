document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun avtomatik göndərilməsini dayandırır
    
    // Form məlumatlarını toplayırıq
    const companyname = document.getElementById('companyname').value;
    const salename = document.getElementById('salename').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const registrationAddress = document.getElementById('registrationAddress').value;
    const activitytype = document.getElementById('activitytype').value;
    const message = document.getElementById('message').value;

    // Şərtlərlə razı olub olmadığını yoxlayırıq
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('Sertlərlə razı olmalısınız.');
        return;
    }

    // WhatsApp mesajını HTML formatında tərtib edirik
    const whatsappMessage = `
       "*Monokuryer Partnyor bildirişi* \n
        *Şirkətin adı və ya mağaza adı:* ${companyname}\n
        *Satıcının adı:* ${salename}\n
        *E-poçt:* ${email}\n
        *Telefon:* ${phone}\n
        *Ünvan (dəqiq yazılmaldı):* ${registrationAddress}\n
        *Fəaliyyət növü:* ${activitytype}\n
        *Əlavə Məlumat:* ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=553010601&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});
