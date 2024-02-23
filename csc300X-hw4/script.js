        let wins = 0;
        let losses = 0;
        let ties = 0;

        function play(playerChoice) {
            const computerImage = document.getElementById('computer-image');
            computerImage.src = "csc300X-hw4/question-mark.PNG";

            setTimeout(() => {
                const choices = ['rock', 'paper', 'scissors'];
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
                const result = determineWinner(playerChoice, computerChoice);

                computerImage.src = computerChoice + '.PNG';

                document.getElementById('result').textContent = result.message;
                updateScoreboard(result.outcome);
            }, 3000);
        }

        function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                return { outcome: 'tie', message: "It's a tie!" };
            }
            if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ||
                (playerChoice === 'paper' && computerChoice === 'rock')) {
                return { outcome: 'win', message: "You win!" };
            }
            return { outcome: 'loss', message: "You lose!" };
        }

        function updateScoreboard(outcome) {
            if (outcome === 'win') {
                wins++;
                document.getElementById('win-count').textContent = wins;
            } else if (outcome === 'loss') {
                losses++;
                document.getElementById('loss-count').textContent = losses;
            } else if (outcome === 'tie') {
                ties++;
                document.getElementById('tie-count').textContent = ties;
            }
        }

        function resetGame() {
            wins = 0;
            losses = 0;
            ties = 0;
            document.getElementById('win-count').textContent = 0;
            document.getElementById('loss-count').textContent = 0;
            document.getElementById('tie-count').textContent = 0;
            document.getElementById('result').textContent = '';
            document.getElementById('computer-image').src = "question-mark.PNG";
        }
