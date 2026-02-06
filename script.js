document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    //função pra mostrar estado do campo
    function setFieldState(field, errorElement,isValid){
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
    })
});

