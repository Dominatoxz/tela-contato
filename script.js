document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Corrigido: Agora aceita os 3 parâmetros corretamente
    function setFieldState(field, errorElement, isValid) {
        const control = field.closest('.form-control');

        if (isValid) {
            control.classList.remove('error');
            control.classList.add('success');
            // Opcional: esconder mensagem de erro
            if (errorElement) errorElement.style.display = 'none';
        } else {
            control.classList.remove('success');
            control.classList.add('error');
            // Opcional: mostrar mensagem de erro
            if (errorElement) errorElement.style.display = 'block';
        }
    }

    function validateField(field) {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling; 
        
        let valid = false;
        if (field.type === 'email') {
            valid = value !== "" && isValidEmail(value);
        } else {
            valid = value !== "";
        }

        // Passando os argumentos na ordem correta
        setFieldState(field, errorElement, valid);
    }

    ['name', 'email', 'subject', 'message'].forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => validateField(field));
        }
    });

    function validateForm() {
        let isFormValid = true;
        ['name', 'email', 'subject', 'message'].forEach(id => {
            const field = document.getElementById(id);
            validateField(field);
            if (!field.closest('.form-control').classList.contains('success')) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Importante: preventDefault é uma função!

        if (validateForm()) {
            form.style.opacity = '0.7';
            form.style.pointerEvents = 'none';

            setTimeout(() => {
                successMessage.classList.add('show');
                form.reset();
                form.style.opacity = '1';
                form.style.pointerEvents = 'auto'; // Corrigido de 'autor' para 'auto'

                document.querySelectorAll('.form-control').forEach(control => {
                    control.classList.remove('success', 'error');
                });
            }, 1500);
        }
    });
});

const botao = document.getElementById('instagram');

        botao.addEventListener('click', function () {
            window.open ('https://www.instagram.com/mthdominato_fx?igsh=amZibjA4ODYwd3Zu&utm_source=qr', '_blank');
        });

const botao2 = document.getElementById('github');

        botao2.addEventListener('click', function () {
        window.open ('https://github.com/Dominatoxz', '_blank');
});

const botao3 = document.getElementById('linkedin');

        botao3.addEventListener('click', function () {
             window.open ('https://www.linkedin.com/feed/', '_blank');
        });

