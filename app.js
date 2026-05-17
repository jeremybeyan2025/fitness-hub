const planCards = document.querySelectorAll('.plan-card');
const planResult = document.getElementById('planResult');

const planContent = {
  'fat-loss': {
    title: 'Lean Performance Stack',
    text: 'Four training days, two movement or cardio days, and one focused recovery day. Built for body composition without losing output.',
    bullets: ['Weekly plan with clear workout structure', 'Performance meals and macro-aware guidance', 'Recovery prompts and optional clinician consult pathway']
  },
  muscle: {
    title: 'Muscle Build Stack',
    text: 'A higher-volume training structure built to support growth, shape, and recovery without losing weekly consistency.',
    bullets: ['Hypertrophy-focused training split', 'Protein-forward meals and recovery snacks', 'Recovery and readiness support layered in']
  },
  strength: {
    title: 'Strength Output Stack',
    text: 'Built around progression, barbell work, readiness, and weekly performance markers.',
    bullets: ['Progressive overload structure', 'Tracking focus on output, reps, and recovery', 'Clean dashboard feel for performance-driven users']
  },
  athletic: {
    title: 'Athletic Engine Stack',
    text: 'Speed, conditioning, movement quality, and explosive work wrapped into a more dynamic training flow.',
    bullets: ['Sprint and conditioning emphasis', 'Recovery and readiness awareness', 'Strong crossover for athletic performance goals']
  }
};

function renderPlan(key) {
  const plan = planContent[key] || planContent['fat-loss'];
  planResult.innerHTML = `
    <div>
      <span class="mini-tag">Recommended</span>
      <h3>${plan.title}</h3>
      <p>${plan.text}</p>
    </div>
    <ul>${plan.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

planCards.forEach(card => {
  card.addEventListener('click', () => {
    planCards.forEach(item => item.classList.remove('active'));
    card.classList.add('active');
    renderPlan(card.dataset.plan);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Consult request captured. Connect this form to your CRM or intake platform.');
    leadForm.reset();
  });
}
