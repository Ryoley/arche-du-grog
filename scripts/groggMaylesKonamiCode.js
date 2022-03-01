function groggMaylesKonamiCode(response) {
    let input = '';
    const key = '71827971';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return response();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

groggMaylesKonamiCode(function () {
    const audio = new Audio('../audio/grogg-mayles.mp3');
    audio.play();
})