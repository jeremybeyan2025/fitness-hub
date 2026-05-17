const programs = [
  {
    title: "Lean Strength Stack",
    category: "fat-loss",
    level: "Intermediate",
    duration: "45 min",
    split: "4x strength / 2x conditioning",
    description: "Shape-focused strength training with metabolic finishers and controlled cardio volume.",
    week: ["Upper Push + core", "Zone 2 walk + mobility", "Lower strength", "Pull + bike sprints", "Full-body density", "Long walk", "Recovery flow"]
  },
  {
    title: "Muscle Density Builder",
    category: "muscle",
    level: "All levels",
    duration: "60 min",
    split: "5-day hypertrophy",
    description: "High-tension lifting, controlled tempo, progressive overload, and pump finishers.",
    week: ["Chest + triceps", "Back + biceps", "Legs", "Shoulders + arms", "Upper pump", "Walk + stretch", "Off"]
  },
  {
    title: "Garage Gym Shred",
    category: "fat-loss",
    level: "Beginner",
    duration: "30 min",
    split: "Dumbbell circuits",
    description: "Simple equipment, high compliance, repeatable circuits for busy schedules.",
    week: ["DB full body", "Walk 30", "DB legs", "Mobility", "DB push-pull", "Intervals", "Off"]
  },
  {
    title: "Powerhouse 5x5",
    category: "strength",
    level: "Intermediate",
    duration: "60 min",
    split: "3 heavy days / 2 accessories",
    description: "Classic strength progression with accessory work to keep joints and weak points ready.",
    week: ["Squat 5x5", "Upper accessories", "Bench 5x5", "Recovery walk", "Deadlift 5x5", "Mobility", "Off"]
  },
  {
    title: "Athlete Engine",
    category: "athletic",
    level: "Advanced",
    duration: "50 min",
    split: "Explosive hybrid",
    description: "Jumps, sprints, strength, carries, and conditioning for field or court performance.",
    week: ["Speed + lower", "Upper power", "Zone 2", "Agility + core", "Full-body power", "Sport day", "Recovery"]
  },
  {
    title: "Mobility Reset",
    category: "mobility",
    level: "All levels",
    duration: "25 min",
    split: "Daily joint care",
    description: "Hips, shoulders, ankles, thoracic spine, breathing, and pain-free movement quality.",
    week: ["Hips", "Shoulders", "Ankles", "Spine", "Full flow", "Walk", "Breathwork"]
  },
  {
    title: "Longevity Basecamp",
    category: "longevity",
    level: "All levels",
    duration: "40 min",
    split: "Strength + Zone 2",
    description: "Sustainable strength, aerobic base, balance, mobility, and low-inflammation habits.",
    week: ["Full body A", "Zone 2", "Mobility", "Full body B", "Zone 2", "Long walk", "Off"]
  },
  {
    title: "Bodyweight Camp",
    category: "fat-loss",
    level: "Beginner",
    duration: "28 min",
    split: "No equipment",
    description: "Push-ups, squats, lunges, planks, tempo work, and low-impact conditioning.",
    week: ["Push + legs", "Walk", "Core + mobility", "Full body", "Intervals", "Walk", "Off"]
  },
  {
    title: "Armored Upper Body",
    category: "muscle",
    level: "Intermediate",
    duration: "55 min",
    split: "Upper emphasis",
    description: "Chest, back, shoulders, arms, posture, and upper-body volume without junk sets.",
    week: ["Chest", "Back", "Delts", "Arms", "Upper pump", "Walk", "Off"]
  },
  {
    title: "Strong & Mobile",
    category: "strength",
    level: "All levels",
    duration: "45 min",
    split: "Strength with movement prep",
    description: "Build strength while protecting joints with warmups and targeted mobility finishers.",
    week: ["Lower", "Upper", "Mobility", "Full body", "Carries", "Zone 2", "Off"]
  },
  {
    title: "Hybrid Cut",
    category: "athletic",
    level: "Intermediate",
    duration: "45 min",
    split: "Lift + conditioning",
    description: "A sharp mix of strength training, short intervals, steps, and weekly recovery control.",
    week: ["Lift A", "Sprints", "Lift B", "Walk", "Lift C", "Circuit", "Recovery"]
  },
  {
    title: "Foundation Starter",
    category: "longevity",
    level: "Beginner",
    duration: "30 min",
    split: "3-day foundation",
    description: "Clean form, confidence, easy progression, walking, and basic mobility for new users.",
    week: ["Full body", "Walk", "Mobility", "Full body", "Walk", "Full body", "Off"]
  }
];

const goalPlans = {
  "fat-loss": {
    title: "Lean Strength Stack",
    description: "A fat-loss focused plan that keeps muscle on the frame: strength training, daily movement, and controlled conditioning.",
    bullets: ["4 lift days with short finishers", "2 cardio days split between Zone 2 and intervals", "1 recovery day to manage soreness and consistency"]
  },
  muscle: {
    title: "Muscle Density Builder",
    description: "A hypertrophy-first stack with progressive overload, higher training volume, and recovery windows.",
    bullets: ["5-day body-part split", "Tempo work and pump finishers", "Optional telehealth recovery consult for qualified users"]
  },
  strength: {
    title: "Powerhouse 5x5",
    description: "A strength-focused week built around big lifts, accessory work, and recovery management.",
    bullets: ["Heavy squat, bench, and deadlift anchors", "Joint prep and mobility built in", "Clear progression from week to week"]
  },
  athletic: {
    title: "Athlete Engine",
    description: "A hybrid performance stack combining explosive strength, speed, agility, conditioning, and mobility.",
    bullets: ["Power sessions plus field/court movement", "Sprint and agility days", "Recovery flow to protect output"]
  },
  mobility: {
    title: "Mobility Reset",
    description: "A movement-first plan for better range of motion, posture, joint comfort, and daily consistency.",
    bullets: ["Daily 20-30 minute flows", "Hips, shoulders, ankles, and spine", "Pairs with walking or light strength"]
  },
  longevity: {
    title: "Longevity Basecamp",
    description: "A sustainable stack built around strength, aerobic base, mobility, sleep, and conservative recovery support.",
    bullets: ["2-3 strength sessions", "2 Zone 2 cardio days", "Balance, mobility, and recovery emphasis"]
  }
};

const weeks = {
  "fat-loss": [
    ["Mon", "Upper Strength", "Push, pull, core + 8-minute finisher"],
    ["Tue", "Zone 2 Walk", "35 minutes easy nasal-breath pace"],
    ["Wed", "Lower Strength", "Squat pattern, hinge, lunge, calves"],
    ["Thu", "Intervals", "Bike sprints + mobility cooldown"],
    ["Fri", "Full Body Density", "Supersets, carries, core"],
    ["Sat", "Long Walk", "45-60 minutes easy"],
    ["Sun", "Recovery", "Stretch, breathwork, meal prep"]
  ],
  muscle: [
    ["Mon", "Chest + Triceps", "Presses, flys, dips, extensions"],
    ["Tue", "Back + Biceps", "Rows, pulldowns, curls, rear delts"],
    ["Wed", "Legs", "Quads, glutes, hamstrings, calves"],
    ["Thu", "Shoulders", "Delts, traps, posture work"],
    ["Fri", "Arms + Pump", "High-volume arms and weak points"],
    ["Sat", "Walk + Mobility", "Steps and joint care"],
    ["Sun", "Off", "Food, sleep, recovery"]
  ],
  strength: [
    ["Mon", "Squat Focus", "Heavy squat + posterior chain"],
    ["Tue", "Upper Assist", "Rows, pull-ups, shoulders"],
    ["Wed", "Bench Focus", "Bench, close grip, triceps"],
    ["Thu", "Recovery", "Walk and mobility"],
    ["Fri", "Deadlift Focus", "Deadlift, hinge, core"],
    ["Sat", "Carries", "Farmer carries and grip"],
    ["Sun", "Off", "Reset for next wave"]
  ],
  athletic: [
    ["Mon", "Speed + Lower", "Sprints, jumps, lower power"],
    ["Tue", "Upper Power", "Explosive pressing and pulling"],
    ["Wed", "Zone 2", "Cardio base"],
    ["Thu", "Agility + Core", "Footwork, lateral drills, trunk"],
    ["Fri", "Full Body Power", "Cleans, throws, carries"],
    ["Sat", "Sport Skill", "Basketball, field, or court work"],
    ["Sun", "Recovery", "Mobility and tissue care"]
  ],
  longevity: [
    ["Mon", "Full Body A", "Squat, push, pull, carry"],
    ["Tue", "Zone 2", "30-45 minutes aerobic base"],
    ["Wed", "Mobility + Balance", "Hips, shoulders, single-leg work"],
    ["Thu", "Full Body B", "Hinge, press, row, core"],
    ["Fri", "Zone 2", "Easy bike or walk"],
    ["Sat", "Long Walk", "Sunlight and low-stress movement"],
    ["Sun", "Off", "Sleep and recovery audit"]
  ]
};

const programGrid = document.getElementById("programGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("programModal");
const modalContent = document.getElementById("modalContent");
const weekBoard = document.getElementById("weekBoard");
const header = document.querySelector("[data-header]");

function renderPrograms(filter = "all") {
  const visible = filter === "all" ? programs : programs.filter(program => program.category === filter);
  programGrid.innerHTML = visible.map((program, index) => `
    <article class="program-card reveal is-visible" style="transition-delay:${index * 35}ms" data-title="${program.title}">
      <div class="program-card-top">
        <span class="tag">${program.category.replace("-", " ")}</span>
        <span>${program.duration}</span>
      </div>
      <h3>${program.title}</h3>
      <p>${program.description}</p>
      <div class="program-meta">
        <span>${program.level}</span>
        <span>${program.split}</span>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".program-card").forEach(card => {
    card.addEventListener("click", () => {
      const selected = programs.find(program => program.title === card.dataset.title);
      openProgramModal(selected);
    });
  });
}

function openProgramModal(program) {
  modalContent.innerHTML = `
    <span class="tag">${program.category.replace("-", " ")}</span>
    <h2>${program.title}</h2>
    <p>${program.description}</p>
    <div class="program-meta">
      <span>${program.level}</span>
      <span>${program.duration}</span>
      <span>${program.split}</span>
    </div>
    <div class="modal-week">
      ${program.week.map((day, index) => `<div><strong>Day ${index + 1}</strong><span>${day}</span></div>`).join("")}
    </div>
    <button class="primary-btn full-width" onclick="document.querySelector('#quiz').scrollIntoView({behavior:'smooth'}); document.querySelector('#programModal').classList.remove('is-open');">Build Around This Plan</button>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderPrograms(button.dataset.filter);
  });
});

function buildWeek(goal = "fat-loss") {
  const plan = weeks[goal] || weeks["fat-loss"];
  weekBoard.innerHTML = plan.map(day => `
    <div class="day-card">
      <strong>${day[0]}</strong>
      <span>${day[1]}</span>
      <small>${day[2]}</small>
    </div>
  `).join("");
}

document.getElementById("buildWeek").addEventListener("click", () => {
  buildWeek(document.getElementById("plannerGoal").value);
});

document.getElementById("plannerGoal").addEventListener("change", event => buildWeek(event.target.value));

document.getElementById("generateStack").addEventListener("click", () => {
  const goal = document.getElementById("goalSelect").value;
  const time = document.getElementById("timeSelect").value;
  const equipment = document.getElementById("equipmentSelect").value;
  const plan = goalPlans[goal];
  const equipmentText = equipment.replace("-", " ");

  document.getElementById("quizResult").innerHTML = `
    <span class="tag">Recommended</span>
    <h3>${plan.title}</h3>
    <p>${plan.description}</p>
    <ul>
      ${plan.bullets.map(item => `<li>${item}</li>`).join("")}
      <li>Built for ${time}-minute sessions using ${equipmentText}.</li>
    </ul>
    <a class="secondary-btn" href="#planner">View Weekly Layout</a>
  `;

  const plannerGoal = document.getElementById("plannerGoal");
  plannerGoal.value = weeks[goal] ? goal : "fat-loss";
  buildWeek(plannerGoal.value);
});

const tiltCard = document.querySelector(".tilt-card");
if (tiltCard) {
  tiltCard.addEventListener("mousemove", event => {
    const rect = tiltCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  tiltCard.addEventListener("mouseleave", () => {
    tiltCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 280);
  }, 2800);
}

document.getElementById("leadForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast("Consult request captured. Connect this form to your CRM next.");
  event.currentTarget.reset();
});

document.querySelectorAll(".magnetic").forEach(button => {
  button.addEventListener("mousemove", event => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
});

renderPrograms();
buildWeek("fat-loss");
