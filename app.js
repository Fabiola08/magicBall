const ask = () => {
    //Leer Pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
        //Recibir respuesta al preguntar a bola mágina
        let answer = magicBall();
        //Imprimir Resultado
        answerInput.value = answer;
    } else {
        answerInput.value = "Escribe tu pregunta";
    }
};

//Función Bola Mágica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'Claro que sí';
        break;
    case 1:
        eightBall = 'Definitivamente de acuerdo';
        break;
    case 2:
        eightBall = 'Intenta otra vez';
        break;
    case 3:
        eightBall = 'No puedo predecirlo';
        break;
    case 4:
        eightBall = 'No creo que suceda';
        break;
    case 5:
        eightBall = 'Definitivamente no';
        break;
    case 6:
        eightBall = 'Perspectiva no tan buena';
        break;
    case 7:
        eightBall = 'Las señales apuntan que sí';
        break;
    }
    return eightBall;
};