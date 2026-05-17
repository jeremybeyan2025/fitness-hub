const foodDatabase={
  'Chicken Breast':{unit:'oz',cal:46.8,p:8.8,c:0,f:1},
  'Ground Beef 90/10':{unit:'oz',cal:53,p:7,c:0,f:2.6},
  'Steak':{unit:'oz',cal:62,p:7.5,c:0,f:3.5},
  'Salmon':{unit:'oz',cal:58,p:6.2,c:0,f:3.6},
  'Eggs':{unit:'each',cal:70,p:6,c:0.4,f:5},
  'White Rice Cooked':{unit:'g',cal:1.3,p:0.027,c:0.28,f:0.003},
  'Sweet Potato':{unit:'g',cal:0.86,p:0.016,c:0.2,f:0.001},
  'Black Beans':{unit:'g',cal:1.32,p:0.089,c:0.24,f:0.005},
  'Avocado':{unit:'g',cal:1.6,p:0.02,c:0.085,f:0.147},
  'Greek Yogurt':{unit:'g',cal:0.59,p:0.10,c:0.036,f:0.004},
  'Protein Shake':{unit:'serving',cal:140,p:25,c:5,f:2},
  'Banana':{unit:'g',cal:0.89,p:0.011,c:0.23,f:0.003},
  'Almonds':{unit:'g',cal:5.79,p:0.21,c:0.22,f:0.5},
  'Broccoli':{unit:'g',cal:0.35,p:0.024,c:0.07,f:0.004},
  'Olive Oil':{unit:'tbsp',cal:119,p:0,c:0,f:13.5}
};
const state={foods:JSON.parse(localStorage.getItem('stakdFoods')||'[]'),filter:'all'};
const goals={calories:document.getElementById('goalCalories'),protein:document.getElementById('goalProtein'),carbs:document.getElementById('goalCarbs'),fat:document.getElementById('goalFat')};
const foodForm=document.getElementById('foodForm');const logEl=document.getElementById('foodLog');const foodSelect=document.getElementById('foodSelect');const customFields=document.getElementById('customFields');
function round(n){return Math.round(n*10)/10}function save(){localStorage.setItem('stakdFoods',JSON.stringify(state.foods))}
function populateFoods(){if(!foodSelect)return;Object.keys(foodDatabase).forEach(name=>{const o=document.createElement('option');o.value=name;o.textContent=name;foodSelect.appendChild(o)})}
function getGoals(){return{cal:Number(goals.calories?.value||2200),p:Number(goals.protein?.value||180),c:Number(goals.carbs?.value||220),f:Number(goals.fat?.value||70)}}
function calcFood(data){let base;if(data.food==='Custom'){base={cal:Number(data.cal)||0,p:Number(data.p)||0,c:Number(data.c)||0,f:Number(data.f)||0,unit:data.unit||'serving'};return{cal:base.cal,p:base.p,c:base.c,f:base.f,unit:base.unit}}base=foodDatabase[data.food];const qty=Number(data.qty)||1;return{cal:round(base.cal*qty),p:round(base.p*qty),c:round(base.c*qty),f:round(base.f*qty),unit:base.unit}}
function totals(){return state.foods.reduce((a,x)=>({cal:a.cal+x.cal,p:a.p+x.p,c:a.c+x.c,f:a.f+x.f}),{cal:0,p:0,c:0,f:0})}
function pct(v,g){return Math.max(0,Math.min(100,Math.round((v/g)*100)))}
function updateDashboard(){const t=totals();const g=getGoals();document.getElementById('calTotal').textContent=Math.round(t.cal);document.getElementById('calGoal').textContent=g.cal;document.getElementById('proteinText').textContent=`${round(t.p)}g / ${g.p}g`;document.getElementById('carbsText').textContent=`${round(t.c)}g / ${g.c}g`;document.getElementById('fatText').textContent=`${round(t.f)}g / ${g.f}g`;document.getElementById('calRing').style.setProperty('--calPct',pct(t.cal,g.cal)+'%');document.getElementById('proteinBar').style.width=pct(t.p,g.p)+'%';document.getElementById('carbsBar').style.width=pct(t.c,g.c)+'%';document.getElementById('fatBar').style.width=pct(t.f,g.f)+'%';document.getElementById('remainingCalories').textContent=Math.max(0,Math.round(g.cal-t.cal));document.getElementById('remainingProtein').textContent=Math.max(0,round(g.p-t.p));document.getElementById('remainingCarbs').textContent=Math.max(0,round(g.c-t.c));document.getElementById('remainingFat').textContent=Math.max(0,round(g.f-t.f));}
function renderLog(){if(!logEl)return;const list=state.filter==='all'?state.foods:state.foods.filter(x=>x.meal===state.filter);if(!list.length){logEl.innerHTML='<div class="empty-state">No food logged yet. Add a meal and watch the dashboard move.</div>';updateDashboard();return}logEl.innerHTML=list.map(item=>`<div class="food-item"><div><h4>${item.food}</h4><small>${item.meal} • ${item.qtyLabel}</small><div class="food-item-macros"><span>${Math.round(item.cal)} cal</span><span>${round(item.p)}g protein</span><span>${round(item.c)}g carbs</span><span>${round(item.f)}g fat</span></div></div><button class="delete-food" data-id="${item.id}">×</button></div>`).join('');document.querySelectorAll('.delete-food').forEach(btn=>btn.addEventListener('click',()=>{state.foods=state.foods.filter(x=>x.id!==btn.dataset.id);save();renderLog();updateDashboard()}));updateDashboard()}
function addFood(food,qty,meal,custom={}){const data={food,qty,...custom};const macros=calcFood(data);const unit=food==='Custom'?(custom.unit||'serving'):(foodDatabase[food]?.unit||'serving');const item={id:Date.now().toString(36)+Math.random().toString(36).slice(2),food:food==='Custom'?(custom.name||'Custom Food'):food,meal,qtyLabel:`${qty} ${unit}`,qty,cal:macros.cal,p:macros.p,c:macros.c,f:macros.f};state.foods.unshift(item);save();renderLog();}
function quickAdd(name,qty,meal='Snack'){addFood(name,qty,meal)}
if(foodForm){populateFoods();foodSelect.addEventListener('change',()=>customFields.style.display=foodSelect.value==='Custom'?'grid':'none');foodForm.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(foodForm);const food=f.get('food');const qty=Number(f.get('qty')||1);const meal=f.get('meal')||'Meal';if(food==='Custom'){addFood('Custom',qty,meal,{name:f.get('customName')||'Custom Food',unit:f.get('customUnit')||'serving',cal:f.get('customCal'),p:f.get('customProtein'),c:f.get('customCarbs'),f:f.get('customFat')})}else{addFood(food,qty,meal)}foodForm.reset();customFields.style.display='none'});document.querySelectorAll('[data-quick]').forEach(btn=>btn.addEventListener('click',()=>quickAdd(btn.dataset.quick,Number(btn.dataset.qty||1),btn.dataset.meal||'Snack')));document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');state.filter=btn.dataset.filter;renderLog()}));Object.values(goals).forEach(input=>input&&input.addEventListener('input',updateDashboard));document.getElementById('clearFood')?.addEventListener('click',()=>{if(confirm('Clear today’s STAKD food log?')){state.foods=[];save();renderLog()}});renderLog();updateDashboard();}
