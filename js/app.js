let textLogo = document.querySelector('.logo')
const tl = gsap.timeline({
  defaults: {
    ease: 'power4.inOut',
  },
})

textLogo.innerHTML = textLogo.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

tl.from('.letter', 0.7, {
  y: -50,
  x: 50,
  rotation: 20,
  autoAlpha: 0,
  stagger: 0.1,
})
  .from(
    '.nav_list',
    0.7,
    {
      y: 50,
      x: -50,
      rotation: 180,
      autoAlpha: 0,
      stagger: 0.1,
    },
    '-=1'
  )

  .from(
    '.home_left',
    1.5,
    {
      x: '-100%',
      autoAlpha: 0,
    },
    '-=1'
  )

particlesJS.load('particles-js', 'js/particles.json', function () {
  console.log('callback - particles.js config loaded')
})

// ABOUT PAGE
gsap.fromTo(
  '.about_left',
  {
    scale: 0.2,
    autoAlpha: 0,
    x: '-100%',
  },
  {
    scale: 1,
    autoAlpha: 1,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: '.about_left',
      start: 'bottom bottom',
      end: 'center center',
      scrub: 1,
    },
  }
)

gsap.utils.toArray('.about_right span').forEach((span) => {
  gsap.fromTo(
    span,
    {
      letterSpacing: '10px',
      autoAlpha: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: '0',
      autoAlpha: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      scrollTrigger: {
        trigger: span,
        scrub: 1,
        start: 'bottom bottom',
        end: 'center center',
      },
    }
  )
})

// SKILLS
gsap.fromTo(
  '.skill_list',
  {
    autoAlpha: 0,
    x: '-100%',
  },
  {
    autoAlpha: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.skill_list',
    },
  }
)

gsap.fromTo(
  '.skill_right-list',
  {
    autoAlpha: 0,
    x: '100%',
  },
  {
    autoAlpha: 1,
    x: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.skill_right',
    },
  }
)
// PROJECT
gsap.fromTo(
  '.project_card',
  1,
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.project_wrapper',
    },
  }
)
