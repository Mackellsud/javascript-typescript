
function btnForm() {
    let first_name = document.getElementById('first-name')
    let last_name = document.getElementById('last-name')
    let email = document.getElementById('email')

    if (first_name.value == '') {
        alert('Campo não informado')
        first_name.focus()
    } else if (last_name.value == '') {
        alert('Campo não informado')
        last_name.focus()
    } else if (email.value == '') {
        alert('Campo não informado')
        email.focus()
    } else {
        alert('Obrigado, por falar conosco!')
    }
}