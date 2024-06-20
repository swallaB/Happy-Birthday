// script.js

function playMusic() {
    const audio = document.getElementById('birthdaySong');
    audio.play();
}

function startTyping() {
    const note = document.getElementById('note');
    const typingText = document.getElementById('typingText');
    
    note.style.visibility = 'visible'; // Show the note
    
    const message = "Wishing you a day filled with love, joy, and all your favorite things!\nMay all your dreams come true!\nHappy Birthday!";
    typingText.innerHTML = ""; // Clear previous content

    let index = 0;
    function typeNextChar() {
        if (index < message.length) {
            typingText.innerHTML += message[index] === '\n' ? '<br/>' : message[index];
            console.log(typingText.innerHTML)
            index++;
            setTimeout(typeNextChar, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                // Reset and restart typing
                typingText.innerHTML = "";
                index = 0;
                setTimeout(typeNextChar, 100);
            }, 2000); // Wait 2 seconds before restarting
        }
    }

    typeNextChar();
}

// function startTyping() {
//     const div=document.querySelector(".note");
//     const text="happy birthday dear bro love you somuch i love god this sis jaofnpvtipeqimpucno wicmorqoip,oqiwptumvoitui,pqoepo.evitm";

//     function typingEffect(element, text , i=0)
//     {
//         element.contentText += text[i];
//         if(i==text.length -1)
//             return;

//         setTimeout(() => typingEffect(element, text, i+1),50);
      
//     }
//     typingEffect(div,text);
// }


// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
