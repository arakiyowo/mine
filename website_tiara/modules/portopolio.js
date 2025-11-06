// Portfolio module - simple version
console.log('Portfolio module loaded');

export function loadPortfolio() {
    return `
        <div class="container">
            <h2>Portfolio Saya</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <h3>E-Commerce Website</h3>
                    <p>Website toko online dengan shopping cart dan payment gateway</p>
                    <div class="tech-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
                <div class="portfolio-item">
                    <h3>School Management System</h3>
                    <p>Sistem informasi untuk manajemen sekolah</p>
                    <div class="tech-tags">
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}