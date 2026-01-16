function startExperience() {
    const music = document.getElementById("bgMusic");
    const overlay = document.querySelector(".overlay");
    const content = document.getElementById("content");

    music.play().catch(() => {
        alert("Tap again to allow music");
    });

    overlay.style.display = "none";
    content.classList.remove("hidden");
}
