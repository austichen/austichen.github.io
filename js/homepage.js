// Wrap every letter in a span
var textWrappers = document.querySelectorAll('.title-text .letters span');
textWrappers.forEach(textWrapper => textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));

let a1 = anime.timeline({loop: false});

a1.add({
    targets: '.title-text .text-wrapper',
    opacity: 1,
    duration: 1,
    delay: 700
  }).add({
    targets: '.title-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.title-text .line',
    translateX: [0, document.querySelector('.title-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.title-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i+1)
  }, '-=775')
  .add({
    targets: '.title-text .line',
    opacity: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: 100,
    complete: () => {
      a2.play();
      navAnime.play();
      socialAnime.play();
      initCoolStaggering.play();
      playCoolStaggering();
    }
  })

// Wrap every letter in a span
var wrappers = document.querySelectorAll('.rotating-descriptions .letters');
wrappers.forEach(textWrapper => textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"));

let a2 = anime.timeline({ autoplay: false, loop: true})

a2.add({
    targets: '.rotating-descriptions .letters-1',
    opacity: [0,1],
    duration: 1
  })
  .add({
    targets: '.rotating-descriptions .letters-1 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.rotating-descriptions .letters-1',
    opacity: [1, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }).add({
    targets: '.rotating-descriptions .letters-2',
    opacity: [0,1],
    duration: 1
}).add({
    targets: '.rotating-descriptions .letters-2 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.rotating-descriptions .letters-2',
    opacity: [1,0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }).add({
    targets: '.rotating-descriptions .letters-3',
    opacity: [0,1],
    duration: 1
}).add({
    targets: '.rotating-descriptions .letters-3 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.rotating-descriptions .letters-3',
    opacity: [1,0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

let navAnime = anime({
  autoplay: false,
  targets: 'nav',
  scaleY: [0,1],
  opacity: [0.5,1],
  translateY: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 700
})

let socialAnime = anime({
  autoplay: false,
  targets: '.social-links',
  scale: [0, 1],
  opacity: [0.5,1],
  duration: 1100,
  easing: "easeOutExpo"
})

const gridCols = 15;
const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [gridCols, gridCols];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);


const initCoolStaggering = anime({
  targets: '.stagger-visualizer',
  autoplay: false,
  scale: [0,1],
  opacity: [0.5,1],
  duration: 1100,
  easing: "easeOutExpo"
})

const playCoolStaggering = () => {
  const randNum =  anime.random(0,numberOfElements-1)
  const staggersAnimation = anime.timeline({
    targets: '.stagger-visualizer div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: false,
    autoplay: false,
    complete: playCoolStaggering
  })
  .add({
    translateX: [
      {value: anime.stagger('-.1rem', {grid: grid, from: randNum, axis: 'x'}) },
      {value: anime.stagger('.1rem', {grid: grid, from: randNum, axis: 'x'}) }
    ],
    translateY: [
      {value: anime.stagger('-.1rem', {grid: grid, from: randNum, axis: 'y'}) },
      {value: anime.stagger('.1rem', {grid: grid, from: randNum, axis: 'y'}) }
    ],
    rotateZ: anime.stagger([0, 360], {grid: grid, from: randNum}),
    duration: 1000,
    scaleY: 0.15,
    delay: anime.stagger(100, {grid: grid, from: randNum})
  })
  staggersAnimation.play();
}
