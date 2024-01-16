class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const mago = new Heroi('Merlin', 100, 'mago');
const guerreiro = new Heroi('Conan', 35, 'guerreiro');
const monge = new Heroi('Lee', 50, 'monge');
const ninja = new Heroi('Hanzo', 28, 'ninja');

mago.atacar();       // Saída: o mago atacou usando magia
guerreiro.atacar();  // Saída: o guerreiro atacou usando espada
monge.atacar();      // Saída: o monge atacou usando artes marciais
ninja.atacar();      // Saída: o ninja atacou usando shuriken
