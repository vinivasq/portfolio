const showErrorMessage = (input) => {
  const inputType = input.dataset.type;
  let message = "";
  tiposDeErro.forEach((error) => {
    console.log(error);
    if (input.validity[error]) {
      message = `<i class="fa-solid fa-circle-info"></i>
                ${mensagensDeErro[inputType][error]}
            `;
    }
  });

  return message;
};

const validate = (input) => {
  if (input.validity.valid) {
    input.parentElement.querySelector(".contact__form__input-error").innerHTML =
      "";
  } else {
    input.parentElement.querySelector(".contact__form__input-error").innerHTML =
      showErrorMessage(input);
  }
};

const formulario = document.querySelector("[data-form]");
const inputs = document.querySelectorAll("input");
const messageInput = document.querySelector(".contact__form__message");

const tiposDeErro = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensagensDeErro = {
  name: {
    valueMissing: 'O campo "nome" não pode ficar vazio',
  },
  email: {
    valueMissing: "O campo de e-mail não pode ficar vazio",
    typeMismatch: "Endereço de e-mail não é válido. ex: fulano@dominio.com",
    patternMismatch: "Endereço de e-mail não é válido. ex: fulano@dominio.com",
  },
  subject: {
    valueMissing: 'O campo "assunto" não pode ficar vazio',
  },
};

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    validate(e.target);
  });
});

messageInput.addEventListener("blur", () => {
  console.log(messageInput.value);
  if (messageInput.value === "") {
    messageInput.parentElement.querySelector(
      ".contact__form__input-error"
    ).innerHTML = `<i class="fa-solid fa-circle-info"></i>
        O campo de mensagem não pode ficar vazio.
        `;
  } else {
    messageInput.parentElement.querySelector(
      ".contact__form__input-error"
    ).innerHTML = "";
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
