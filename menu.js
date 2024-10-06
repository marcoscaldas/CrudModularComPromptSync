const {
    prompt,
    exibirMenu,
    adicionarHamburguer,
    verHamburgueres,
    atualizarHamburguer,
    deletarHamburguer

} = require('./script');

function principal(){

    let opcao;
    do {
        exibirMenu();

        opcao = parseInt(prompt("Escolha uma opção: "));
        switch(opcao){
            case 1:
            adicionarHamburguer();
            break;

            case 2:
            verHamburgueres();
            break;

            case 3:
            atualizarHamburguer();
            break;

            case 4:
            deletarHamburguer();
            break;

            case 5:
                console.log("Saindo...");
            break;

            default:
                console.log("Opção inválida. Tente novamente. ");
            break;

         }
    }while (opcao !== 5)
        


}

principal();