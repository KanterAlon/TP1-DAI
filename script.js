document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('nombre').addEventListener("input", validateNombre);
    document.getElementById('email').addEventListener("input", validateEmail);
    document.getElementById('password').addEventListener("input", function() {validatePassword(); validateConfirmPassword();});
    document.getElementById('confirmPassword').addEventListener("input", validateConfirmPassword);
  });
  
  function validateNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombreMsg = document.getElementById('nombreMsg');
    let value = nombreInput.value.trim();
  
    if (value.length < 3) {
      nombreMsg.textContent = "El nombre debe tener al menos 3 caracteres";
      nombreMsg.style.color = "red";
      return false;
    }
    nombreMsg.textContent = "Nombre válido";
    nombreMsg.style.color = "green";
    return true;
  }
  
  function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailMsg = document.getElementById('emailMsg');
    let value = emailInput.value.trim();
  
    if (!value.includes("@") || !value.includes(".")) {
      emailMsg.textContent = "Formato de email inválido";
      emailMsg.style.color = "red";
      return false;
    }
    emailMsg.textContent = "Email válido";
    emailMsg.style.color = "green";
    return true;
  }
  
  function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordMsg = document.getElementById('passwordMsg');
    let value = passwordInput.value;
  
    if (value.length < 5) {
      passwordMsg.textContent = "Debe tener al menos 5 caracteres";
      passwordMsg.style.color = "red";
      return false;
    }
  
    passwordMsg.textContent = "Contraseña válida";
    passwordMsg.style.color = "green";
    return true;
  }
  
  function validateConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordMsg = document.getElementById('confirmPasswordMsg');
    const passwordInput = document.getElementById('password');
  
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordMsg.textContent = "Las contraseñas no coinciden";
      confirmPasswordMsg.style.color = "red";
      return false;
    }
    confirmPasswordMsg.textContent = "Contraseña confirmada";
    confirmPasswordMsg.style.color = "green";
    return true;
  }
  
  function validateForm() {
    const formMsg = document.getElementById('formMsg');
  
    if (validateNombre() && validateEmail() && validatePassword() && validateConfirmPassword()) {
      formMsg.textContent = "Registro exitoso!";
      formMsg.style.color = "green";
      return true;
    }
  
    formMsg.textContent = "Corrige los errores en el formulario";
    formMsg.style.color = "red";
    return false;
  }
  