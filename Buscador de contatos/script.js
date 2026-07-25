const resultado = document.getElementById("res");
const button = document.getElementById("bto");
const input = document.getElementById("inp");

button.addEventListener("click", buscar);
//Mini mini banco de dados
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
    }, {
        nome: "EDUARDO",
        telefone: "4586318101",
    },
    {
        nome: "FERNANDA",
        telefone: "4586318102",
    },
    {
        nome: "GABRIEL",
        telefone: "4586318103",
    },
    {
        nome: "HELENA",
        telefone: "4586318104",
    },
    {
        nome: "IGOR",
        telefone: "4586318105",
    },
    {
        nome: "JULIANA",
        telefone: "4586318106",
    },
    {
        nome: "KAUÃ",
        telefone: "4586318107",
    },
    {
        nome: "LARISSA",
        telefone: "4586318108",
    },
    {
        nome: "MARCOS",
        telefone: "4586318109",
    },
    {
        nome: "NATALIA",
        telefone: "4586318110",
    },
    {
        nome: "OTÁVIO",
        telefone: "4586318111",
    },
    {
        nome: "PATRÍCIA",
        telefone: "4586318112",
    },
    {
        nome: "RAFAEL",
        telefone: "4586318113",
    },
    {
        nome: "SABRINA",
        telefone: "4586318114",
    },
    {
        nome: "THIAGO",
        telefone: "4586318115",
    },
    {
        nome: "VINÍCIUS",
        telefone: "4586318116",
    },
    {
        nome: "WILLIAM",
        telefone: "4586318117",
    },
    {
        nome: "YASMIN",
        telefone: "4586318118",
    },
    {
        nome: "ZÉLIA",
        telefone: "4586318119",
    },
    {
        nome: "BEATRIZ",
        telefone: "4586318120",
    },
];/*
function buscar() {
    //O interupitor
    let encontrou = false;
    // e nessesario para pode ele pode usar o valor
    const valordoinput = input.value;

    for (let i = 0; i < contatos.length; i++) {
        const element = contatos[i];
        //aqui ele ja esta verificando e deixando em caixa alta
        if (element.nome.toUpperCase() === valordoinput.toUpperCase()) {
            resultado.innerHTML =
                "Nome: " + element.nome + "<br>" +
                "Telefone: " + element.telefone;
            // sinalizou para o interrupitor que deu certo
            encontrou = true;
            // Se achou ele pausa
            break;
        }
    }
    //verifica !SE! teve mudança
    if (!encontrou) {
        resultado.innerHTML = "Contato não encontrado";
    }
}*/
function buscar() {
    //O interupitor
    let encontrou = false;
    // e nessesario para pode ele pode usar o valor
    const valordoinput = input.value;
    // entra no objeto
    for (const nome of contatos) {
        //Agora que e usador os valores que esta no objeto
        if (nome.nome.toUpperCase() === valordoinput.toUpperCase()) {
            resultado.innerHTML = "Nome: " + nome.nome + "<br>" +
                "Telefone: " + nome.telefone;
            console.log(nome)
            break
        }
        //verifica!SE! teve mudança
        if (!encontrou) {
            resultado.innerHTML = "Contato não encontrado";
        }
    }


}