const circle = document.querySelector('.advantages #circle');
const hexagon = document.querySelector('.advantages #hexagon');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    })
});

obs.observe(circle);
obs.observe(hexagon);