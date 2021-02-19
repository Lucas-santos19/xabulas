/* Validação de senha */

    function validarSenha (input) {
        var senha1 = document.getElementById("senha1").value
        var senha2 = document.getElementById("senha2").value
 
        if (senha1 == senha2 & senha2 == senha1){
            document.getElementById("senha1").style.color="#32CD32"
            document.getElementById("senha2").style.color="#32CD32"
        } else {
            document.getElementById("senha1").style.color="#FF0000"
            document.getElementById("senha2").style.color="#FF0000"
        }

    }
/* Fim da validação de senha */



/* Ver Senha */

    function MostrarSenha() {
        /*var senha1 = document.getElementById("senha1") */
        var senha2 = document.getElementById("senha2")

        if (senha1.type == "password" & senha2.type == "password"){
            /* senha1.type="text" */
            senha2.type="text"
         } else {
             /* senha1.type="password" */
            senha2.type="password"
        }

    }
/* Fim ver senha */
