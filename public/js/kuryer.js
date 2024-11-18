document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun avtomatik göndərilməsini dayandırır
    
    // Form məlumatlarını toplayırıq
    const fullName = document.getElementById('fullName').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const registrationAddress = document.getElementById('registrationAddress').value;
    const currentAddress = document.getElementById('currentAddress').value;
    const relative1 = document.getElementById('relative1').value;
    const relative2 = document.getElementById('relative2').value;
    const idNumber = document.getElementById('idNumber').value;
    const finCode = document.getElementById('finCode').value;
    const experience = document.getElementById('tecrube').value;
    const Cinsiyyet = document.getElementById('Cinsiyyet').value;
    const message = document.getElementById('message').value;

    // Şərtlərlə razı olub olmadığını yoxlayırıq
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('Sertlərlə razı olmalısınız.');
        return;
    }

    // WhatsApp mesajını HTML formatında tərtib edirik
    const whatsappMessage = `
       "*Kuryer ol *: İşə qəbul üçün yeni bir bildiriş var!" 
        *Ad, Soyad:* ${fullName}\n
        *Ata adı:* ${fatherName}\n
        *E-poçt:* ${email}\n
        *Telefon:* ${phone}\n
        *Qeydiyyat Ünvanı:* ${registrationAddress}\n
        *Faktiki Yaşadığı Ünvan:* ${currentAddress}\n
        *Birinci dərəcəli Qohum 1:* ${relative1}\n
        *Birinci dərəcəli Qohum 2:* ${relative2}\n
        *Ş/V seriya nömrəsi:* ${idNumber}\n
        *Ş/V Fin kodu:* ${finCode}\n
        *Təcrübə:* ${experience}\n
        *Cinsiyyət:* ${Cinsiyyet}\n
        *Əlavə Məlumat:* ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=553010601&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});
