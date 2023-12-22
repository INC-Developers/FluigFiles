function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "slt_terreno") {
        $("#txt_codigoTrr").val("").val(selectedItem["codigoterreno"])
        $("#txt_codigoContrato").val("").val(selectedItem["Código Contrato"])
        $("#txt_codigoEstudo").val("").val(selectedItem["Código Estudo"])
        $("#txt_nomenclatura").val("").val(selectedItem["Nomenclatura"])
        $("#txt_enderecoTrr").val("").val(selectedItem["Endereço"])
    }
}

// ABRE A SOLICITACAO DO ESTUDO SELECIONADO
function visualizarSolicitacao(campo) {
    let codigo = $("#" + campo).val()
    let serverUrl = window.location.href.split(".fluig")[0] + ".fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
    if (codigo == "undefined") {
        FLUIGC.toast({
            title: 'Atenção: ',
            message: 'Código do terreno/estudo não encontrado!',
            type: 'warning'
        });
    } else {
        if (codigo) {
            window.open(serverUrl + codigo)
        } else {
            FLUIGC.toast({
                title: 'Atenção: ',
                message: 'Selecione um terreno/estudo para visualizar!',
                type: 'warning'
            });
        }
    }
}