// script.js

function playMusic() {
    const audio = document.getElementById('birthdaySong');
    audio.play();
}

// function startTyping() {
//     const note = document.getElementById('note');
//     const typingText = document.getElementById('typingText');
    
//     note.style.visibility = 'visible'; // Show the note
    
//     const message = "Wishing you a day filled with love, joy, and all your favorite things!\nMay all your dreams come true!\nHappy Birthday!";
//     typingText.innerHTML = ""; // Clear previous content

//     let index = 0;
//     function typeNextChar() {
//         if (index < message.length) {
//             typingText.innerHTML += message[index] === '\n' ? '<br/>' : message[index];
            
//             index++;
//             setTimeout(()=> typeNextChar(), 100); // Adjust typing speed here
//         } else {
//             setTimeout(() => {
//                 // Reset and restart typing
//                 typingText.innerHTML = "";
//                 index = 0;
//                 setTimeout(typeNextChar, 100);
//             }, 2000); // Wait 2 seconds before restarting
//         }
//     }

//     typeNextChar();
// }

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

function startTyping() {
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 10,
});

typewriter
  .pauseFor(1500)
  .changeDelay(100)
  .typeString('Dear Bestie,\n')
  .typeString('19 saal ki zindagi ke pehle 18 saal kaha thi tu!!!')
  .pauseFor(1000)
  .typeString(' nevermind better late than never. perfect time pe i got a Friend')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<strong>GEM</strong> like YOU and I am so grateful for it.  ')
  .pauseFor(800)
  .typeString('your madhur shabd😂 motivates me everyday. hamesha mere aukat ke bahar ki chize karne ko motivate kiya hai tune💀. basically helped me push my boundaries.')
  .pauseFor(800)
  .typeString('this duniya is so grateful for this day kyuki usko aaj ke din aap jaisa hera mila. desh ka bhavishya ujwal haatho me hai😂😂😂.')
  .pauseFor(1000)
  .typeString('jabtak mai jinda hu aapka saath chodne ki masti kabhi nhi karungi. i am always there for YOUHH and will always be there❤️')
  .pauseFor(1000)
  .typeString('we have a longggg way to go and many more bdays to celebrate together. you are working hard amd im sooo proud of you. work hard earn money and take me on world tour😁')
  .pauseFor(800)
  .typeString('bas bas itna bhi acha acha bola nhi jata mujhse😂😂. irada toh tujhe rulane ka tha but agar instead hassi aayi ho toh....👊👊👊')
  .pauseFor(800)
  .typeString('jaldi vapas aaja and then we will work harder💪')
  .pauseFor(800)
  .typeString('HATE YOUUUUU THE MOSTTTTTT❤️💕😎🤗🫂')
  .pauseFor(1000000)
  .start();
  
}

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
