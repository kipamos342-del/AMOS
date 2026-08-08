/* ==========================================
   MilgosTech Main JavaScript
========================================== */

// ----------------------------
// Mobile Navigation
// ----------------------------
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// ----------------------------
// Dark / Light Mode
// ----------------------------
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });

}

// ----------------------------
// Animated Counter
// ----------------------------
const counters = document.querySelectorAll(".hero-stats h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(targetText);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 80;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = targetText;

        }

    };

    updateCounter();

});

// ----------------------------
// EmailJS Contact Form
// ----------------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.send("Eddy342","template_x9htint",{

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            service: document.getElementById("service").value,

            message: document.getElementById("message").value

        })

        .then(function(){

            document.getElementById("formMessage").innerHTML =
            "✅ Thank you! Your message has been sent.";

            document.getElementById("formMessage").style.color = "green";

            contactForm.reset();

        })

        .catch(function(error){

            console.log(error);

            document.getElementById("formMessage").innerHTML =
            "❌ Failed to send message.";

            document.getElementById("formMessage").style.color = "red";

        });

    });

}

// ----------------------------
// Back To Top Button
// ----------------------------
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ----------------------------
// FAQ Accordion
// ----------------------------
document.querySelectorAll(".faq-item h3").forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }

    });

});

// ----------------------------
// Active Navigation
// ----------------------------
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ----------------------------
// Initialize AOS
// ----------------------------
AOS.init({

    duration:1000,

    once:true

});