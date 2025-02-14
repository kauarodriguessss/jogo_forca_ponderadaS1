const words = [
    'javascript',
    'forca',
    'programacao',
    'desenvolvimento',
    'frontend',
  ];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  let displayWord = Array(selectedWord.length).fill('_');
  let attemptsLeft = 6;
  let wrongLetters = [];
  
  document.getElementById('wordDisplay').textContent = displayWord.join(' ');
  
  function guessLetter() {
    const input = document.getElementById('letterInput');
    let letter = input.value.toLowerCase();
    input.value = ''; // Limpa o campo após entrada
  
    if (!letter.match(/[a-z]/) || letter.length !== 1) {
      document.getElementById('message').textContent =
        'Digite uma única letra válida.';
      return;
    }
  
    if (displayWord.includes(letter) || wrongLetters.includes(letter)) {
      document.getElementById('message').textContent =
        'Você já tentou essa letra!';
      return;
    }
  
    if (selectedWord.includes(letter)) {
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
          displayWord[i] = letter;
        }
      }
    } else {
      wrongLetters.push(letter);
      attemptsLeft--;
    }
  
    document.getElementById('wordDisplay').textContent = displayWord.join(' ');
    document.getElementById('wrongLetters').textContent = wrongLetters.join(', ');
    document.getElementById('attempts').textContent = attemptsLeft;
  
    checkGameStatus();
  }
  
  function checkGameStatus() {
    if (!displayWord.includes('_')) {
      document.getElementById('message').textContent = 'Parabéns! Você venceu!';
      disableInput();
    } else if (attemptsLeft === 0) {
      document.getElementById(
        'message'
      ).textContent = `Game Over! A palavra era "${selectedWord}".`;
      disableInput();
    }
  }
  
  function disableInput() {
    document.getElementById('letterInput').disabled = true;
  }
  