let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('Beeclark from Chile to the World!')
  .pauseFor(1000)
  .deleteChars(10)
  .start();