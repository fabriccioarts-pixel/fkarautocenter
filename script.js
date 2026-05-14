// Add some basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-list a, .nav-container .btn');

    if (mobileBtn && navContainer) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navContainer.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navContainer.classList.contains('active') &&
                !navContainer.contains(e.target) &&
                !mobileBtn.contains(e.target)) {
                mobileBtn.classList.remove('active');
                navContainer.classList.remove('active');
            }
        });
    }

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    if (cookieBanner && acceptCookiesBtn && declineCookiesBtn) {
        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem('cookieChoice');
        
        if (!cookieChoice) {
            // Show banner after a small delay
            setTimeout(() => {
                cookieBanner.classList.add('show');
                document.body.classList.add('has-cookie-banner');
            }, 1000);
        }

        const hideBanner = (choice) => {
            localStorage.setItem('cookieChoice', choice);
            cookieBanner.classList.remove('show');
            document.body.classList.remove('has-cookie-banner');
        };

        acceptCookiesBtn.addEventListener('click', () => hideBanner('accepted'));
        declineCookiesBtn.addEventListener('click', () => hideBanner('declined'));
    }
});
