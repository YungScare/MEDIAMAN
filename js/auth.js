// Переключение видимости пароля
document.addEventListener('DOMContentLoaded', function() {
    // Обработка для страницы входа
    const loginPasswordToggle = document.getElementById('loginPasswordToggle');
    const loginPasswordInput = document.getElementById('loginPassword');
    
    if (loginPasswordToggle && loginPasswordInput) {
        loginPasswordToggle.addEventListener('click', function() {
            const type = loginPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPasswordInput.setAttribute('type', type);
            
            // Обновление иконки
            const svg = this.querySelector('svg');
            if (type === 'text') {
                // Иконка "скрыть"
                svg.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                `;
            } else {
                // Иконка "показать"
                svg.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                `;
            }
        });
    }

    // Обработка для страницы регистрации
    const registerPasswordToggle = document.getElementById('registerPasswordToggle');
    const registerPasswordInput = document.getElementById('registerPassword');
    const registerPasswordConfirmToggle = document.getElementById('registerPasswordConfirmToggle');
    const registerPasswordConfirmInput = document.getElementById('registerPasswordConfirm');

    function togglePasswordVisibility(toggle, input) {
        toggle.addEventListener('click', function() {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            const svg = this.querySelector('svg');
            if (type === 'text') {
                svg.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                `;
            } else {
                svg.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                `;
            }
        });
    }

    if (registerPasswordToggle && registerPasswordInput) {
        togglePasswordVisibility(registerPasswordToggle, registerPasswordInput);
    }

    if (registerPasswordConfirmToggle && registerPasswordConfirmInput) {
        togglePasswordVisibility(registerPasswordConfirmToggle, registerPasswordConfirmInput);
    }

    // Валидация формы регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            const password = registerPasswordInput.value;
            const passwordConfirm = registerPasswordConfirmInput.value;

            if (password !== passwordConfirm) {
                e.preventDefault();
                registerPasswordConfirmInput.setCustomValidity('Пароли не совпадают');
                registerPasswordConfirmInput.reportValidity();
                return false;
            } else {
                registerPasswordConfirmInput.setCustomValidity('');
            }
        });

        // Сброс ошибки при изменении пароля
        registerPasswordInput.addEventListener('input', function() {
            registerPasswordConfirmInput.setCustomValidity('');
        });

        registerPasswordConfirmInput.addEventListener('input', function() {
            this.setCustomValidity('');
        });
    }

    // Обработка отправки формы входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Здесь можно добавить логику отправки данных на сервер
            // e.preventDefault();
            // ... ваша логика авторизации
        });
    }
});






