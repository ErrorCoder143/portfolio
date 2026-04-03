setTimeout(() => { const l = document.getElementById('loader'); l.style.opacity = '0'; l.style.transition = 'opacity .5s'; setTimeout(() => l.style.display = 'none', 500) }, 2000);

const cur = document.getElementById('cur'), ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx - 5 + 'px'; cur.style.top = my - 5 + 'px' });
(function ar() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx - 18 + 'px'; ring.style.top = ry - 18 + 'px'; requestAnimationFrame(ar) })();
document.querySelectorAll('a,button,.pf-card,.svc-card,.sk-card,.test-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.transform = 'scale(2.5)'; ring.style.transform = 'scale(1.4)' });
    el.addEventListener('mouseleave', () => { cur.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)' });
});

const pts = document.getElementById('pts');
for (let i = 0; i < 18; i++) { const p = document.createElement('div'); p.className = 'pt'; p.style.left = Math.random() * 100 + 'vw'; p.style.animationDuration = 14 + Math.random() * 16 + 's'; p.style.animationDelay = Math.random() * 16 + 's'; pts.appendChild(p) }

const words = ['.NET Developer', 'API Architect', 'Backend Engineer', 'Full Stack Dev', 'Problem Solver'];
let wi = 0, ci = 0, del = false;
const tEl = document.getElementById('typed');
function type() { const w = words[wi]; if (!del) { tEl.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; setTimeout(type, 1900); return } } else { tEl.textContent = w.slice(0, --ci); if (ci === 0) { del = false; wi = (wi + 1) % words.length } } setTimeout(type, del ? 55 : 95) }
setTimeout(type, 2000);

const obs = new IntersectionObserver(entries => { entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('vis'), i * 70); const b = e.target.querySelector('.sk-fill'); if (b && e.target.dataset.pct) setTimeout(() => { b.style.width = e.target.dataset.pct + '%' }, 320) } }) }, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

document.querySelectorAll('.tl-item').forEach(t => { new IntersectionObserver(entries => { entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 110) }) }, { threshold: .1 }).observe(t) });

document.querySelectorAll('.pf-btn').forEach(btn => { btn.addEventListener('click', function () { document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active')); this.classList.add('active'); const f = this.dataset.filter; document.querySelectorAll('.pf-card').forEach(c => { const ok = f === 'all' || c.dataset.cat === f; c.style.transition = 'opacity .4s,transform .4s'; c.style.opacity = ok ? '1' : '0.15'; c.style.transform = ok ? 'scale(1)' : 'scale(.97)'; c.style.pointerEvents = ok ? '' : 'none' }) }) });

function sendMail(e) { e.preventDefault(); const n = document.getElementById('name').value, em = document.getElementById('email').value, s = document.getElementById('subject').value, m = document.getElementById('message').value; window.location.href = `mailto:bhavamuthu786@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent('Name: ' + n + '\nEmail: ' + em + '\n\nMessage:\n' + m)}` }

window.addEventListener('scroll', () => { document.querySelectorAll('section[id]').forEach(sec => { if (window.scrollY >= sec.offsetTop - 130) { document.querySelectorAll('.nav-links a').forEach(a => { a.style.color = ''; if (a.getAttribute('href') === '#' + sec.id) a.style.color = 'var(--accent)' }) } }) });
