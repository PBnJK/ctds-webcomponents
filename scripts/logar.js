/**
 * @file Funções para a página de criação de conta
 * @author Pedro B.
 */

/**
 * Revela/esconde a senha digitada
 */
function toggleSenha() {
	const S_INPUT = document.getElementById("inp-b-senha");
	const EYE     = document.getElementById("eye-pwd-1");

	if( S_INPUT.getAttribute("type") === "password" ) {
		S_INPUT.setAttribute("type", "text");
		EYE.setAttribute("src", "assets/eye-slash-solid.svg");
	} else {
		S_INPUT.setAttribute("type", "password");
		EYE.setAttribute("src", "assets/eye-solid.svg");
	}
}

window.onload = () => {
	document.getElementById("eye-pwd-1").onclick = toggleSenha;
}
