let words = ["SOLVING", "CREATING", "TRANSFORMING"];
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});

for(let word of words){
  typewriter.pauseFor(1000);
  typewriter.typeString(word);
  typewriter.pauseFor(800);
  typewriter.deleteChars(10);
    }
typewriter.start();