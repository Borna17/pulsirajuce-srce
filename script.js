function playSongAndExplode() {
    // Reprodukcija pesme
    const song = document.getElementById("song");
    if (song.paused) {
        song.play();
    }

    // Eksplozija teksta
    const explosionContainer = document.querySelector(".explosion");

    // Dodaj više imena "Klara"
    for (let i = 0; i < 20; i++) {
        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = "Klara";

        // Nasumičan pravac i udaljenost
        const angle = Math.random() * 360;
        const distance = Math.random() * 200 + 100; // Udaljenost eksplozije
        const x = Math.cos((angle * Math.PI) / 180) * distance + "px";
        const y = Math.sin((angle * Math.PI) / 180) * distance + "px";

        // Postavi pravac
        name.style.setProperty("--x", x);
        name.style.setProperty("--y", y);

        // Dodaj ime u eksploziju
        explosionContainer.appendChild(name);

        // Ukloni ime posle animacije
        name.addEventListener("animationend", () => {
            name.remove();
        });
    }
}
