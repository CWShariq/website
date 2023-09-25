const textToType = "CodeWithShariq";
        const typeheadElement = document.getElementById("typehead");
        let currentIndex = 0;

        // Function to simulate typing effect
        function typeText() {
            if (currentIndex < textToType.length) {
                typeheadElement.textContent += textToType.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeText, 100); // Adjust typing speed as needed
            }
        }

        // Call the function to start the typing effect
        typeText();



const words = ["Web Development", "Machine Learning", "Python", "HTML", "CSS", "PHP"];
const wordElement = document.getElementById("typesubhead");
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
        wordElement.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        wordElement.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    const typingSpeed = isDeleting ? 25 : 25; // Adjust typing speed as needed

    if (!isDeleting && currentCharIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, 500); // Delay before typing the next word
    } else {
        setTimeout(type, typingSpeed);
    }
}

// Start the typing animation
setTimeout(type, 1000); // Initial delay