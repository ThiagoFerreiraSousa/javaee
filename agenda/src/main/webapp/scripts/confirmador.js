/**
 * Confimação de exclusao de um contato
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão do contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}