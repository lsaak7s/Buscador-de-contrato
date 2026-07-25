const resultado = document.getElementById("res");
const button = document.getElementById("bto");
const input = document.getElementById("inp");

button.addEventListener("click", buscar);

const contatos = [
    {
        nome: "AMANDA",
        telefone: "4586318885",
    },
    {
        nome: "BRUNA",
        telefone: "4586318485",
    },
    {
        nome: "CARLA",
        telefone: "4586318785",
    },
    {
        nome: "DIANA",
        telefone: "4586318185",
    },
];
function buscar() {
    let encontrou = false;

    const valordoinput = input.value;

    for (let i = 0; i < contatos.length; i++) {
        const element = contatos[i];

        if (element.toUpperCase() === valordoinput.toUpperCase()) {
            resultado.innerHTML =
                "Nome: " + element.nome + "<br>" +
                "Telefone: " + element.telefone;

            encontrou = true;
            break;
        }
    }

    if (!encontrou) {
        resultado.innerHTML = "Contato não encontrado";
    }
}
