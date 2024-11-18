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

// Kateqoriya seçildikdə dəyəri göstərmək
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

// İkinci ünvan əlavə etmək üçün funksiya
function addInputs(count) {
    const elaveInputDiv = document.getElementById("elaveInput");
    for (let i = 0; i < count; i++) {
        elaveInputDiv.innerHTML += `
            <div class="flex gap-2 items-center">
                <input type="text" placeholder="Digər ünvanı daxil edin" class="w-full p-2 border rounded" />
                <button type="button" onclick="removeInput(this)" class="bg-red-500 text-white px-2 py-1 rounded">Sil</button>
            </div>`;
    }
}

// Ünvanı silmək
function removeInput(button) {
    button.parentElement.remove();
}

// Form məlumatlarını toplamaq və WhatsApp ilə göndərmək
function handleSubmit(event) {
    event.preventDefault();

    // Form elementlərinin ID-ləri ilə seçilməsi
    const ad = document.getElementById("musad")?.value.trim() || "";
    const soyad = document.getElementById("mussoyad")?.value.trim() || "";
    const telefon = document.getElementById("musnom")?.value.trim() || "";
    const haraya = document.getElementById("haraya")?.value.trim() || "";
    const category = document.getElementById("category")?.value.trim() || "";
    const selectedSecim = document.getElementById("secim")?.value.trim() || "";
    const productType = document.getElementById("productType")?.value.trim() || "";
    const paymentType = document.getElementById("paymentType")?.value.trim() || "";
    const kuryerType = document.getElementById("kuryerType")?.value.trim() || "";
    const catdirilmaGun = document.getElementById("catdirilmaGun")?.value.trim() || "";
    const catdirilmaSaat = document.getElementById("catdirilmaSaat")?.value.trim() || "";
    const additionalProductInfo = document.getElementById("additionalProductInfoInput")?.value.trim() || "";

    // İkinci ünvanları toplamaq
    const additionalAddresses = Array.from(document.querySelectorAll("#elaveInput input"))
        .map(input => input.value.trim())
        .filter(value => value !== "");

    // Mesaj yaratmaq
    let message = "Sifariş məlumatları:";

    if (ad) message += `Ad: ${ad}`;
    if (soyad) message += `Soyad: ${soyad}`;
    if (telefon) message += `Telefon: ${telefon}`;
    if (haraya) message += `Haradan: ${haraya}`;
    if (category) message += `Seçilən ünvan: ${category}`;
    if (selectedSecim) message += `Seçim: ${selectedSecim}`;
    if (additionalAddresses.length) message += `Əlavə ünvanlar: ${additionalAddresses.join(", ")}`;
    if (productType) message += `Məhsul növü: ${productType}`;
    if (paymentType) message += `Ödəniş növü: ${paymentType}`;
    if (kuryerType) message += `Kuryer seçimi: ${kuryerType}`;
    if (catdirilmaGun) message += `Çatdırılma günü: ${catdirilmaGun}`;
    if (catdirilmaSaat) message += `Çatdırılma saatı: ${catdirilmaSaat}`;
    if (additionalProductInfo) message += `Əlavə məlumat: ${additionalProductInfo}`;

    // Boş mesaj yoxlanışı
    if (message === "Sifariş məlumatları:") {
        alert("Zəhmət olmasa formu doldurun.");
        return;
    }

    // WhatsApp linkini yaratmaq və açmaq
    const whatsappURL = `https://wa.me/994553010601?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappURL, "_blank");
}

