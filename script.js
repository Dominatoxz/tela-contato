document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail(email){
        const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    //função pra mostrar estado do campo
    function setFieldState(field ,isValid){
        const control = field.closest('.form-control');

        if (isValid){
            control.classList.remove('error');
            control.classList.add('success');
        } else {
            control.classList.remove('success');
            control.classList.add('error');
        }
    }

    //validar campo
    function validateField(field){
        const value = field.value.trim();
        const errorElement = field.nextElementSibling; //pegar o elemento imediatamente após o campo

        if (field.type === 'email'){
            setFieldState(field, errorElement, value === "" ? false: isValidEmail(value));
            //
        } else{
            setFieldState(field, errorElement, value !== "");
        }
    }
    //validar automaticamente os campos assim que o user interage
    ['name', 'email', 'subject', 'message'].forEach(id =>{
        const field = document.getElementById(id);
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => validateField(field));  //valida ao sair digitando
    });

    //validar fomulario completo
    function validateForm(){
        let isValid = true;

        ['name', 'email', 'subject', 'message'].forEach(id =>{
            const field = document.getElementById(id);
            validateField(field);
            if (!field.closest('.form-control').classList.contains('success')){
                isValid = false;
            }
        });
        return isValid;        
    }

    //submit-envio
    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(validateForm()){
            //simular envio
            form.style.opacity = '0.7';
            
            form.style.pointerEvents = 'none';

            setTimeout(() => {
                successMessage.classList.add('show');
                form.reset();
                form.style.opacity = '1';
                form.style.pointerEvents = 'auto';

                //Resetar todas as classes após reset 
                document.querySelectorAll('.form-control').forEach(control => {
                    control.classList.remove('success', 'error');
                });
            },1500);
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

