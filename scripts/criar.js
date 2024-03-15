/**
 * @file Funções para a página de criação de conta
 * @author Pedro B.
 */

/**
 * Valida a senha do usuário
 */
function validarCSenha() {
	const S_INPUT  = document.getElementById("inp-b-senha");
	const CS_INPUT = document.getElementById("inp-b-c-senha");

	if( S_INPUT.value !== CS_INPUT.value ) {
		CS_INPUT.setCustomValidity("As senhas precisam ser iguais");
	} else {
		CS_INPUT.setCustomValidity("");
	}
	
	CS_INPUT.reportValidity();
}

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

/**
 * Revela/esconde a senha digitada no campo 'confirme a senha'
 */
function toggleCSenha() {
	const CS_INPUT = document.getElementById("inp-b-c-senha");
	const EYE      = document.getElementById("eye-pwd-2");

	if( CS_INPUT.getAttribute("type") === "password" ) {
		CS_INPUT.setAttribute("type", "text");
		EYE.setAttribute("src", "assets/eye-slash-solid.svg");
	} else {
		CS_INPUT.setAttribute("type", "password");
		EYE.setAttribute("src", "assets/eye-solid.svg");
	}
}

window.onload = () => {
	document.getElementById("inp-b-c-senha").onchange = validarCSenha;

	document.getElementById("eye-pwd-1").onclick = toggleSenha;
	document.getElementById("eye-pwd-2").onclick = toggleCSenha;
}
