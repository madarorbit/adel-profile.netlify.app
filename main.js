/* 
   Professional Interactive Resume JS
   Functionality: Smooth Scrolling, Reveal Animations, Interactive Elements
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Sections on Scroll
    const sections = document.querySelectorAll('.section');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('reveal');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', revealOnScroll);

    // 2. Smooth Scrolling for internal links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Add dynamic entrance to header elements
    const headerElements = document.querySelectorAll('.header > *');
    headerElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        el.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // 4. Console Welcome Message (Professional Touch)
    console.log("%c Adel Abdullah Feteini Hussein - Interactive Resume ", "background: #1a237e; color: #fff; padding: 5px; border-radius: 3px;");
});
