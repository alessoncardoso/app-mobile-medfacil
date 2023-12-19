const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// script lembretes:

// Obtenha os elementos HTML
const mostrarLembreteBtn = document.querySelector(".mostrarLembrete");
const modais = document.querySelectorAll(".modal");
const fecharModais = document.querySelectorAll(".fechar");

// Mostre o modal correspondente quando o botão for clicado
mostrarLembreteBtn.addEventListener("click", () => {
  modais.forEach((modal) => {
    modal.style.display = "block";
  });
});

// Feche o modal correspondente quando o botão de fechar for clicado
fecharModais.forEach((fecharModal, index) => {
  fecharModal.addEventListener("click", () => {
    modais[index].style.display = "none";
  });
});

// Feche o modal se o usuário clicar fora dele
window.addEventListener("click", (event) => {
  modais.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});


// script botao pesquisar

const mostrarInputBtn = document.getElementById("mostrarInput");
const inputContainer = document.getElementById("inputContainer");

mostrarInputBtn.addEventListener("click", () => {
  inputContainer.classList.toggle("hidden");
});


function avancar(localId) {
  // Simule uma condição de local indisponível (pode ser substituída por lógica real)
  const isUnavailable = true;

  const messageElement = document.getElementById(`message-${localId}`);
  const divLocalElement = document.querySelector(`.${localId}`);

  if (isUnavailable) {
    messageElement.textContent = 'Local indisponível';
    divLocalElement.style.border = '1px solid #e74c3c';
  } else {
    messageElement.textContent = ''; // Limpa a mensagem
    divLocalElement.style.border = 'none';
  }
}