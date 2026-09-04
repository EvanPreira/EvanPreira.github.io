/* =========================================
   PORTFOLIO JAVASCRIPT
   Evan Preira
========================================= */


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .timeline-item, .about-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   TERMINAL TYPING EFFECT
========================================= */

const terminalStatus = document.querySelector(".terminal-success");

if (terminalStatus) {

    const originalText = terminalStatus.textContent;

    terminalStatus.textContent = "";

    let index = 0;

    function typeTerminalText() {

        if (index < originalText.length) {

            terminalStatus.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeTerminalText, 45);

        }

    }

    setTimeout(typeTerminalText, 1200);

}


/* =========================================
   PROJECT CARD TILT
========================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-7px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Evan Preira`;

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%c👋 Hey! Bienvenue sur le portfolio d'Evan.",
    "color:#58a6ff;font-size:16px;font-weight:bold;"
);

console.log(
    "%cIT • Networks • Cybersecurity",
    "color:#8b949e;font-size:13px;"
);
