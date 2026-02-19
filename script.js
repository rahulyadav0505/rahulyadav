document.addEventListener("DOMContentLoaded", function () {

    const words = ["Hello 👋", "Namaste 🙏"];
    const greeting = document.getElementById("greeting");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 150;
    const deletingSpeed = 60;
    const pauseTime = 1000;

    function typeLoop() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            greeting.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, pauseTime);
            }
        } else {
            greeting.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeLoop();

});

function openPoem(imagePath){
    const modal = document.getElementById("poemModal");
    const image = document.getElementById("poemImage");

    image.src = imagePath;
    modal.style.display = "flex";
}

function closePoem(){
    document.getElementById("poemModal").style.display = "none";
}
