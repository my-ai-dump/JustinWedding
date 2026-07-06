/* ===========================================
   Wedding Invitation
   app.js
===========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       FLOATING PETALS ANIMATION
    =========================== */

    const petalsContainer = document.querySelector(".petals-container");

    if (petalsContainer) {

        const PETAL_COUNT = 16;

        for (let i = 0; i < PETAL_COUNT; i++) {

            const petal = document.createElement("span");

            petal.classList.add("petal");

            const left = Math.random() * 100;

            const fallDuration = 14 + Math.random() * 12;

            const swayDuration = 3 + Math.random() * 3;

            const delay = Math.random() * 18;

            const size = 14 + Math.random() * 14;

            const opacity = 0.4 + Math.random() * 0.4;

            const flip = Math.random() > 0.5;

            petal.style.left = `${left}%`;

            petal.style.width = `${size}px`;

            petal.style.height = `${size}px`;

            petal.style.opacity = opacity;

            petal.style.animationDuration =
                `${fallDuration}s, ${swayDuration}s`;

            petal.style.animationDelay =
                `${delay}s, ${delay}s`;

            if (flip) {

                petal.style.transform = "scaleX(-1)";

            }

            petalsContainer.appendChild(petal);

        }

    }




    /* ===========================
       PRELOADER
    =========================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hide");

            document.body.classList.add("loaded");

        }, 1800);

    });




    /* ===========================
       MUSIC
    =========================== */

    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            bgMusic.play();

            playing = true;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

            musicBtn.classList.add("playing");

        } else {

            bgMusic.pause();

            playing = false;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

            musicBtn.classList.remove("playing");

        }

    });




    /* ===========================
       SMOOTH SCROLL
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });




    /* ===========================
       COUNTDOWN
    =========================== */

    const weddingDate =
        new Date("July 12, 2026 00:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance < 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);




    /* ===========================
       SCROLL REVEAL
    =========================== */

    const revealElements = document.querySelectorAll(
        "section, .person, .detail-card, footer"
    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });




    /* ===========================
       PARALLAX HERO
    =========================== */

    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY =
            scroll * 0.5 + "px";

    });




    /* ===========================
       BUTTON RIPPLE
    =========================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(
                this.clientWidth,
                this.clientHeight
            );

            const radius = diameter / 2;

            circle.style.width =
                circle.style.height =
                `${diameter}px`;

            circle.style.left =
                `${e.clientX - this.offsetLeft - radius}px`;

            circle.style.top =
                `${e.clientY - this.offsetTop - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });




    /* ===========================
       HERO TEXT FADE
    =========================== */

    const heroContent =
        document.querySelector(".hero-content");

    heroContent.classList.add("animate");




    /* ===========================
       SCROLL INDICATOR
    =========================== */

    const scrollIndicator =
        document.querySelector(".scroll-down");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {

            scrollIndicator.style.opacity = "0";

        } else {

            scrollIndicator.style.opacity = "1";

        }

    });




    /* ===========================
       FLOATING EFFECT
    =========================== */

    const cards =
        document.querySelectorAll(".person");

    cards.forEach((card, index) => {

        card.animate(

            [

                {
                    transform: "translateY(0px)"
                },

                {
                    transform: "translateY(-12px)"
                },

                {
                    transform: "translateY(0px)"
                }

            ],

            {

                duration: 3500 + index * 300,

                iterations: Infinity,

                easing: "ease-in-out"

            }

        );

    });




    /* ===========================
       BACK TO TOP
    =========================== */

    const topBtn = document.createElement("button");

    topBtn.id = "topBtn";

    topBtn.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

});
