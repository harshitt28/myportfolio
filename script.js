// ============================
// GREETING (TIME BASED)
// ============================
function updateGreeting() {
    const greeting = document.getElementById("greeting");

    if (!greeting) return; // dusre pages pe error avoid

    const hour = new Date().getHours();
    let text = "";

    if (hour >= 5 && hour < 12) {
        text = "Hello, Good Morning 🌅";
    } 
    else if (hour >= 12 && hour < 17) {
        text = "Hello, Good Afternoon ☀️";
    } 
    else if (hour >= 17 && hour < 19) {
        text = "Hello, Good Evening 🌇";
    } 
    else {
        text = "Hello, Good Night 🌙";
    }

    greeting.innerHTML = text;
}

// ============================
// SHOW USER NAME + BUTTON PULSE
// ============================
function showName() {
    const nameInput = document.getElementById("nameInput");
    const username = document.getElementById("username");
    const button = document.querySelector("button");

    if (!nameInput || !username) return;

    const name = nameInput.value.trim();

    if (name !== "") {
        username.textContent = `Welcome, ${name}. Glad to have you here.`;

        button.classList.remove("pulse");
        void button.offsetWidth;
        button.classList.add("pulse");
    }
}

// ============================
// SCROLL ANIMATION
// ============================
function revealOnScroll() {
    const sections = document.querySelectorAll(".animate-section");
    const skills = document.querySelectorAll(".skills-grid span");

    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < triggerPoint) {
            section.classList.add("show");
        }
    });

    skills.forEach((skill, index) => {
        if (skill.getBoundingClientRect().top < triggerPoint) {
            setTimeout(() => {
                skill.classList.add("show");
            }, index * 120);
        }
    });
}

// ============================
// ON LOAD
// ============================
window.addEventListener("load", () => {

    updateGreeting();

    const button = document.querySelector("button");
    if (button) button.classList.add("pulse");

    revealOnScroll();
});

// ============================
// ON SCROLL
// ============================
window.addEventListener("scroll", revealOnScroll);

// ============================
// AUTO UPDATE GREETING (1 min)
// ============================
setInterval(updateGreeting, 60000);