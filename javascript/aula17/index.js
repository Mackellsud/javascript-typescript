// Objeto básico
function createPeople (name, lastName, age) {
    return { name, lastName, age };
}

const people = createPeople('Fulano', 'Sicrano', 29);
const people2 = createPeople('Beltrano', 'Null', 34);
const people3 = createPeople('Usuario', 'Depre', 33);
const people4 = createPeople('QA', 'Maroto', 32);
const people5 = createPeople('Help', 'Junior', 37);
const people6 = createPeople('Suporte', 'Pistola', 34);

//console.log(people.name, people2.name)

// Criando objeto e metódos 

const pessoa = {
    nome: 'Nefi',
    sobrenome: 'Samuel',
    idade: 13,

    fala() {
        console.log(`Meu nome é ${this.sobrenome} e tenho ${this.idade} anos`)
    },

    idadeIncremento() {
        this.idade++
    }
};

pessoa.fala();
pessoa.idadeIncremento();
pessoa.fala();
pessoa.idadeIncremento();
pessoa.fala();
pessoa.idadeIncremento();