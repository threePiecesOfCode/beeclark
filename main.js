// let words = ["SOLVING", "CREATING", "TRANSFORMING"];
// let app = document.getElementById('typewriter');

// let typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 70,
// });

// for(let word of words){
//   typewriter.pauseFor(100);
//   typewriter.typeString(word);
//   typewriter.pauseFor(800);
//   typewriter.deleteChars(word.length);
//     }
// typewriter.start();

let words = ["SOLVING", "CREATING", "TRANSFORMING"];
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});

for (let word of words) {
  typewriter.pauseFor(100);

  // Apply different colors based on the word
  switch (word) {
    case "SOLVING":
      typewriter.typeString(`<span style="color: #a05000">${word}</span>`);
      break;
    case "CREATING":
      typewriter.typeString(`<span style="color: #170075">${word}</span>`);
      break;
    case "TRANSFORMING":
      typewriter.typeString(`<span style="color: black">${word}</span>`);
      break;
    default:
      typewriter.typeString(word);
  }

  typewriter.pauseFor(800);
  typewriter.deleteChars(word.length);
}

typewriter.start();


// Modify last section words 
let app2 = document.getElementById('typewriter2');

let typewriter2 = new Typewriter(app2, {
  loop: true,
  delay: 70,
});

typewriter2
  .pauseFor(2500)
  .typeString('<span style="color: #a05000;">Unlock the</span> <span style="color: #170075;">Power of IT</span> and <span style="color: black;">SCADA</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
}, 16000); // Hide the alert after x seconds