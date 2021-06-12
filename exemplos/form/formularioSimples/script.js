function clicar() {
    let name = document.getElementById('fname')
    let email = document.getElementById('email')

    if (name.value == '') {
        alert(`[ERROR] Digite um nome válido!`)
    } else {
        alert(`Olá, ${name.value}! Seja bem vindo(a)`)
    }
}
