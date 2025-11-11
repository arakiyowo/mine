// Biodata module - simple version
console.log('Biodata module loaded');

export function loadBiodata() {
    return `
        <div class="container">
            <h2>Profil Saya</h2>
            <div class="biodata-content">
                <div class="info-card">
                    <h3><i class="fas fa-user"></i> Informasi Pribadi</h3>
                    <p><strong>Nama Lengkap:</strong> Tiara Octavia Aruan</p>
                    <p><strong>TTL:</strong> Jakarta, 29 Oktober 2008</p>
                    <p><strong>Sekolah:</strong> SMK Hang Tuah 1 Jakarta</p>
                    <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak (RPL)</p>
                </div>
            </div>
        </div>
    `;
}