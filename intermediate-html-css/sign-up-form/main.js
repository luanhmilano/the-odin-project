function conferirSenha() {
    const password = document.getElementById('password')
    const confirm_password = document.getElementById('confirm-password')

    if (confirm_password.value === password.value) {
        confirm_password.setCustomValidity('')
    } else {
        confirm_password.setCustomValidity('The passwords are different')
    }
}