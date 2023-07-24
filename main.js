const buttons = document.querySelectorAll('.key');
    buttons.forEach(button => {
        const sound = document.getElementById(`sound_${button.classList[1]}`);
        button.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play();
        });
    });