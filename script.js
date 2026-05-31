/* =========================
   TYPING ANIMATION
========================= */

const typingText = [
    "Frontend Developer",
    "React.js Enthusiast",
    "BCA Student",
    "Web Developer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    currentText = typingText[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, j + 1);
        j++;

        if (j === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, j - 1);
        j--;

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % typingText.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

/* =========================
   MOBILE NAVBAR TOGGLE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/* Close menu on link click */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* =========================
   SMOOTH SCROLL (extra enhancement)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */

emailjs.init("NZVftf-nI4UaW2yCw");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_xifu2xm",
        "template_rna7tsk",
        params
    )
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message!");
    });
});
/* =========================
   BUTTON CLICK EFFECT
========================= */

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});