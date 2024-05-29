let words = ["SOLVING", "CREATING", "TRANSFORMING"];
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});

for(let word of words){
  typewriter.pauseFor(100);
  typewriter.typeString(word);
  typewriter.pauseFor(800);
  typewriter.deleteChars(word.length);
    }
typewriter.start();