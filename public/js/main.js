// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
    // Fetch profile data
    fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
            // Update social links
            const socialLinks = document.querySelectorAll('.social-icon');
            socialLinks.forEach(link => {
                const platform = link.querySelector('i').classList[1].split('-')[1];
                if (data.social[platform]) {
                    link.href = data.social[platform];
                }
            });
        })
        .catch(error => console.error('Error fetching profile data:', error));

    // Handle navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Remove all active classes first
        link.classList.remove('active');
        
        // Add active class to current page link
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        
        // Special case for home page
        if (currentPath === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        }
    });

    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 