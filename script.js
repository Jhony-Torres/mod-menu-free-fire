const modal = document.getElementById('download-modal');
const openButtons = [
  document.getElementById('open-modal'),
  document.getElementById('open-modal-hero'),
];
const closeModalBtn = document.getElementById('close-modal');
const form = document.getElementById('lead-form');
const pingEl = document.getElementById('ping');
const fpsEl = document.getElementById('fps');
const boostBtn = document.getElementById('boost-btn');

function openModal() {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

openButtons.forEach((btn) => btn?.addEventListener('click', openModal));
closeModalBtn?.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  alert(`Perfeito! O link foi enviado para ${email}.`);
  form.reset();
  closeModal();
});

boostBtn.addEventListener('click', () => {
  pingEl.textContent = `${Math.floor(Math.random() * 12) + 18} ms`;
  fpsEl.textContent = `${Math.floor(Math.random() * 20) + 70}`;
  boostBtn.textContent = 'Boost ativo';
});
