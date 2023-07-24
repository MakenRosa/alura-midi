const buttons = document.querySelectorAll('.key');
buttons.forEach(button => {
    const sound = document.getElementById(`sound_${button.classList[1]}`);
    if (!sound) {
        return;
    }
    button.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();
    });
    button.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            button.classList.add('active');
        }
    });
    button.addEventListener('keyup', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            button.classList.remove('active');
        }
    });
});