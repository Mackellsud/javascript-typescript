
function btnForm() {
    let first_name = document.getElementById('first-name')
    let last_name = document.getElementById('last-name')
    let femail = document.getElementById('femail')

    if (first_name.value == '' ) {
        alert('Campo não informado')
        first_name.focus()
    }
}