import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init(){
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.clearErrors();
      this.validate(e);
    });
  }

  clearErrors() {
    if (!this.form) return;
    const errorMessages = this.form.querySelectorAll('.login-error');
    for (const el of errorMessages) {
      el.remove();
    }
  }

  showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('login-error');
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.9em';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      this.showError(emailInput, 'E-mail inválido');
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.showError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
      error = true;
    }

    if (!error) {
      this.form.submit();
    }
  }
}