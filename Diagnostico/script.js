/* Pregunta: ¿Cuál es la función de 'document.getElementById' en JavaScript? */
        /* Para cambiar el dato que se encuentra en ese elemento*/
        function checkAnswer() {
            /* Pregunta: ¿Qué hace 'prompt' y cómo se puede usar en lugar de 'alert'? */
            /* Crea una caja de alerta en la cual podemos ingresar en este caso la respuesta, algo que con alert no se puede lograr*/
            let answer = prompt("Enter your answer:");

            /* Pregunta: ¿Cuál es el propósito de la instrucción 'if' en este fragmento de código? */
            /*Por si la respuesta ingresada es incorrecta muestre la alerta de "Try again!", Si es correcta la respuesta mostrara la alerta "Correct!"*/
            if (answer.toLowerCase() === 'paris') {
                alert("Correct!");
            } else {
                alert("Try again!");
            }
        }

        /* Pregunta: ¿Cómo se puede manipular el DOM usando JavaScript para cambiar el contenido de un elemento? */
        /* con el fragmento de codigo que de document.getElementById */
        document.getElementById("question").innerText = "What is the capital of Spain?";