function form() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEvento(evento) {
        evento.preventDefault();

        const name  = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const weight = form.querySelector('.weight');
        const width = form.querySelector('.width');

        pessoas.push({
            nome: name.value,
            sobrenome: lastname.value,
            peso: weight.value,
            altura: width.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${name.value} ${lastname.value} ${weight.value} ${width.value}</p>`
    }

    form.addEventListener('submit', recebeEvento);
}

form();

/* form.onsubmit = function (evento) {
        evento.preventDefault();
        alert('Formulário enviado!')
        console.log('Formulário enviado!')
    }; */