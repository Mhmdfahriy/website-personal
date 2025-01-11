let words = document.querySelectorAll(".word");
if (words.length) {
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.appendChild(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    words.forEach((word, index) => {
        word.style.opacity = index === currentWordIndex ? "1" : "0";
    });

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

        setTimeout(() => {
            currentWord.style.opacity = "0";
        }, 1000);
    };

    changeText();
    setInterval(changeText, 3000);
} else {
    console.log('No words found');
}


// Navbar Dropdown

// Ambil elemen yang dibutuhkan
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.querySelector('.dropdown');
const cancelBtn = document.querySelector('.cancel');

// Event listener untuk membuka dropdown menu
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.add('active');
});

// Event listener untuk menutup dropdown menu
cancelBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
});

// contact

const form = document.getElementById('contactForm');

// Tambahkan event listener saat form di-submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Nomor WhatsApp tujuan (ganti dengan nomor kamu)
    const phoneNumber = '6288976707168';

    // Format pesan yang akan dikirim (encode pesan untuk URL)
    const text = `Halo, saya ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

    // Redirect ke WhatsApp (gunakan wa.me dengan format text)
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});