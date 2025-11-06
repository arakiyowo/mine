// Kontak module - simple version
console.log('Kontak module loaded');

export function loadKontak() {
    return `
        <div class="container">
            <h2>Hubungi Saya</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <div>
                            <h3>WhatsApp</h3>
                            <p>+62 812-3456-7890</p>
                            <a href="https://wa.me/+628973852390" target="_blank">Chat Sekarang</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>tiara.aruan@email.com</p>
                            <a href="mailto:arakiyowo29@gmail.com">Kirim Email</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-instagram"></i>
                        <div>
                            <h3>Instagram</h3>
                            <p>@tiara.aruan</p>
                            <a href="https://instagram.com/t_0aa29" target="_blank">Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}