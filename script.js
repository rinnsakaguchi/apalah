// Inisialisasi Lottie Animation
lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_uemj8c.json' // Ganti dengan URL Lottie animasi yang sesuai
});

// Fungsi untuk menambah link download
let downloadCount = 1; // Mulai dari 1 link download
const downloadList = document.getElementById('download-list');
const addLinkBtn = document.getElementById('add-link-btn');

function addDownloadLink() {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <a href="link-download-${downloadCount}.zip" target="_blank">
            Download Link ${downloadCount}
        </a>
    `;
    downloadList.appendChild(listItem);
    downloadCount++;
}

// Event listener untuk menambah link
addLinkBtn.addEventListener('click', addDownloadLink);

// Redirect ke halaman utama setelah klik tombol Lanjutkan
document.getElementById('continue-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Pindah ke halaman utama
});