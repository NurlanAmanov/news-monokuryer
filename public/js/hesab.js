// Bakı və Sumqayıt üçün şəhər və rayon siyahıları
let bakiSeherleri = ["Balaxanı", "Bibiheybət", "Biləcəri", "Bilgəh", "Binə", "Binəqədi", "Buzovna", "Bülbülə", "Corat", "Digah", "Dübəndi", "Əhmədli", "Əmircan", "Fatmayı", "Görədil", "Güzdək", "Hökməli", "Hövsan", "Keşlə", "Kürdəxanı", "Lökbatan", "Masazır", "Maştağa", "Mehdiabad", "Məmmədli", "Mərdəkan", "Nardaran", "Novxanı", "Nübar", "Pirallahı", "Pirşağı", "Qala", "Qobu", "Qobustan", "Qoşaqışlaq", "Ramana", "Sabunçu", "Sulutəpə", "Şağan", "Şüvəlan", "Türkan", "Xocahəsən", "Yeni", "Zabrat", "Zağulba", "Zığ", "Zirə"];
let metrolar = ["İçərişəhər", "Sahil", "28 May", "Gənclik", "Nəriman Nərimanov", "Ulduz", "Koroğlu", "Qara Qarayev", "Neftçilər", "Xalqlar Dostluğu", "Əhmədli", "Həzi Aslanov", "Elmlər Akademiyası", "Nizami", "Cəfər Cabbarlı", "Xətai", "Memar Əcəmi", "20 Yanvar", "İnşaatçılar", "Dərnəgül", "Azadlıq prospekti", "Nəsimi", "8 Noyabr", "Avtovağzal", "Xocəsən"];
let bakiAbseronRayonlari = ["Sumqayıt", "Masazır", "Xırdalan", "Saray"];
let sumqayitAbseronRayonlari = ["Masazır", "Xırdalan", "Baki"];
let mehsullar = ["Seçin", "Gül buketi", "Zərf", "Hədiyyələr", "Zinət əşyaları", "Mağazalardan çatdırılma", "Onlayn mağazalar"];

// Bütün sahələri deaktiv et
function disableAllFields() {
    document.querySelectorAll("input, select, textarea, .btn").forEach(function(element) {
        element.disabled = true;
    });
}

// Bütün sahələri aktiv et
function enableAllFields() {
    document.querySelectorAll("input, select, textarea, .btn").forEach(function(element) {
        element.disabled = false;
    });
}

// Bütün sahələri sıfırlamaq üçün resetValues funksiyası
function resetValues() {
    document.querySelectorAll("input[type='text'], textarea").forEach(function(element) {
        element.value = '';
    });
    document.querySelectorAll("select").forEach(function(element) {
        element.selectedIndex = 0;
    });
    document.getElementById("additionalInfo").style.display = "none";
    document.getElementById("cardInput").style.display = "none";
    document.getElementById("secim").style.display = "none";
    document.getElementById("txtarea").style.display = "none";
}

// Məhsul növlərini doldurmaq üçün funksiya
function getAllProductType() {
    const productType = document.getElementById("productType");
    
    productType.innerHTML = ""; // Mevcut məhsulları temizle
    mehsullar.forEach(item => {
        productType.innerHTML += `<option value="${item}">${item}</option>`;
    });
}

// Kateqoriya seçimlərinə uyğun olaraq əlavə sahələri aktiv etmək üçün funksiya
function selectCategory() {
    const category = document.getElementById("category").value;
    const secim = document.getElementById("secim");
    secim.innerHTML = ""; // Seçimləri sıfırla

    if (category === "baku") {
        bakiSeherleri.forEach(item => {
            secim.innerHTML += `<option value="${item}">${item}</option>`;
        });
        secim.style.display = "block";
        document.getElementById("txtarea").style.display = "block";
        document.getElementById("additionalInfo").style.display = "none";
    } else if (category === "metro") {
        metrolar.forEach(item => {
            secim.innerHTML += `<option value="${item}">${item}</option>`;
        });
        secim.style.display = "block";
        document.getElementById("txtarea").style.display = "none";
        document.getElementById("additionalInfo").style.display = "none";
    } else if (category === "absheron") {
        const abseronList = document.getElementById("filialHeader").textContent.includes("Bakı") ? bakiAbseronRayonlari : sumqayitAbseronRayonlari;
        abseronList.forEach(item => {
            secim.innerHTML += `<option value="${item}">${item}</option>`;
        });
        secim.style.display = "block";
        document.getElementById("txtarea").style.display = "block";
        document.getElementById("additionalInfo").style.display = "none";
    } else if (category === "poct" || category === "expres") {
        document.getElementById("additionalInfo").style.display = "block";
        document.getElementById("txtarea").style.display = "none";
        secim.style.display = "none";
    } else {
        secim.style.display = "none";
    }
}

// Ödəniş növü seçildikdə kart məlumatlarını göstərmək üçün funksiya
function payment() {
    const cardInput = document.getElementById("cardInput");
    const paymentType = document.getElementById("paymentType");
    cardInput.style.display = paymentType.value === "online" ? "block" : "none";
}

// Kuryer seçimi funksiyası
function selectKuryer() {
    // Burada əlavə funksiya lazım ola bilər, lakin hazırda ehtiyac yoxdur
}

// Çatdırılma günü seçimi funksiyası
function selectCatdirilmaGun() {
    // Burada əlavə funksiya lazım ola bilər, lakin hazırda ehtiyac yoxdur
}

// Çatdırılma saatı seçimi funksiyası
function selectCatdirilmaSaat() {
    // Burada əlavə funksiya lazım ola bilər, lakin hazırda ehtiyac yoxdur
}

// Filiallar arasında keçid üçün düymələrə aid funksiyalar
document.querySelectorAll("#baki").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        showFields("Bakı", true);
        enableAllFields(); // Filial seçildikdən sonra seçimləri aktiv edin
    });
});

document.querySelectorAll("#sumq").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        showFields("Sumqayıt", false);
        enableAllFields(); // Filial seçildikdən sonra seçimləri aktiv edin
    });
});

// Filial seçimindən sonra sahələri uyğun şəkildə göstərən funksiya
function showFields(filialName, isBakiFlag) {
    const filialHeader = document.getElementById("filialHeader");
    if (filialHeader) filialHeader.textContent = filialName + " Filialı";
    resetValues(); // Filial seçildikdə dəyərləri sıfırla
    getAllProductType(); // Məhsul növlərini yeniləyin
    
    const secim = document.getElementById("secim");
    secim.innerHTML = ""; // Seçimləri sıfırla

    if (isBakiFlag) {
        // Bakı üçün seçimlər
        document.getElementById("category").innerHTML = `
            <option value="" disabled selected>Seçin</option>
            <option value="baku">Şəhər ətrafı</option>
            <option value="metro">Metro daxili</option>
            <option value="city">Şəhər daxili</option>
            <option value="absheron">Abşeron rayonu</option>
            <option value="poct">Poçt xidməti</option>
            <option value="expres">Kargo xidməti</option>
        `;
    } else {
        // Sumqayıt üçün seçimlər
        document.getElementById("category").innerHTML = `
            <option value="" disabled selected>Seçin</option>
            <option value="city">Şəhər daxili (Sumqayıt)</option>
            <option value="absheron">Abşeron rayonu</option>
            <option value="baku">Şəhər ətrafı (Bakı və onun kəndləri)</option>
            <option value="poct">Poçt xidməti</option>
            <option value="expres">Kargo xidməti</option>
        `;
    }
}

// İkinci ünvan əlavə etmək üçün funksiya
function addInputs(count) {
    const elaveInputDiv = document.getElementById("elaveInput");
    elaveInputDiv.innerHTML = ""; // Mövcud girişləri təmizləyin

    for (let i = 0; i < count; i++) {
        elaveInputDiv.innerHTML += `
            <input class="border border-blue-600 p-1 h-[35px] text-xl rounded-xl outline-none" type="text" placeholder="Digər ünvanı daxil edin" class='harayaYeni' />
            <button type="button" class="btn2 border hover:bg-orange-800 border-orange-600 hover:text-white  w-[15%] p-1 text-xl rounded-xl outline-none" onclick="removeInput(this)">Sil</button>
        `;
    }
}

// İkinci ünvanı silmək üçün funksiya
function removeInput(element) {
    element.previousElementSibling.remove();
    element.remove();
}

// Form məlumatlarını toplamaq və WhatsApp ilə göndərmək
function handleSubmit(event) {
    event.preventDefault();

    const category = document.getElementById("category")?.value || ''; // Elementi yoxlayın
    const ad = document.getElementById("ad")?.value || ''; // Elementi yoxlayın
    const soyad = document.getElementById("soyad")?.value || ''; // Elementi yoxlayın
    const telefon = document.getElementById("telefon")?.value || ''; // Burada telefon id doğru olmalıdır
    const haraya = document.getElementById("haraya")?.value || ''; // Elementi yoxlayın
    const productType = document.getElementById("productType")?.value || ''; // Elementi yoxlayın
    const kuryerType = document.getElementById("kuryerType")?.value || ''; // Elementi yoxlayın
    const catdirilmaGun = document.getElementById("catdirilmaGun")?.value || ''; // Elementi yoxlayın
    const catdirilmaSaat = document.getElementById("catdirilmaSaat")?.value || ''; // Elementi yoxlayın
    const agreementChecked = document.getElementById("agreement")?.checked || false; // Checkbox yoxlayın


    const message = `
        Ad: ${ad}
        Soyad: ${soyad}
        Telefon: ${telefon}
        Haraya: ${haraya}
        Məhsul növü: ${productType}
        Kuryer: ${kuryerType}
        Çatdırılma Günü: ${catdirilmaGun}
        Çatdırılma Saati: ${catdirilmaSaat}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappURL = `https://wa.me/994553010601?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}
