function fnBuscaSelectEspecifico(busca, select) {
    var valorABuscar = busca.value;
    var buscaid = busca.id;
    var valorABuscarSemFormatacao = valorABuscar.replace(/(\.|\(|\)|\/|\-|)+/g, '');
    var valorABuscarFormatado = "";
    document.getElementById("msprofissao").innerHTML = "";
    valorABuscar = valorABuscar.toLowerCase();
    var selectedTrends = document.getElementById(select);
    selectedTrends.style.display = "none";
    valorIndex = selectedTrends.selectedIndex;
    var soprimeiro = true;
    var soprimeiroselecionado = '0';

    for (var i = 1; i < selectedTrends.lenght; i++) {
        valorTextSelectMaisculo = selectedTrends.options[i].text;
        valueSelecionado = selectedTrends.options[i].value;
        valorTextSelect = valorTextSelectMaisculo;
        valorTextSelect = valorTextSelect.toLowerCase();

        resultadoDaBusca = true;
        if (valorABuscarFormatado != "") {
            if (valorTextSelect.indexOf(valorABuscarSemFormatacao) > -1 || (valorTextSelect.indexOf(valorABuscarFormatado) > -1)) {
                resultadoDaBusca = true;
            };
        } else {
            if (valorTextSelect.indexOf(valorABuscar) > -1) {
                if (valorTextSelectMaisculo != "Nenhum dado encontrado para essa pesquisa.") {
                    if (valorTextSelectMaisculo != '') {
                        document.getElementById("msprofissao").innerHTML =
                            document.getElementById("msprofissao").innerHTML + "<a href=# onClick=\"fnSelecionarOpcao('" + selectedTrends.id + "';'" + valueSelecionado + "')\";>" + valorTextSelectMaisculo + "</a></br>";
                    }
                }
                resultadoDaBusca = true;
            };
        };
    }
    // se achou o dado dentro do que digitou então mostra.
    
}