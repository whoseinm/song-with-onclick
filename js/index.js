function play_evez_elemir(){
    var audio_evez_elemir = document.getElementById("audio_evez_elemir")
    audio_evez_elemir.play();
    audio_sovetski.pause();
    audio_tapar_meni.pause();
}

function play_sovetski(){
    var audio_sovetski = document.getElementById("audio_sovetski")
    audio_sovetski.play()
    audio_evez_elemir.pause();
    audio_tapar_meni.pause();
}

function play_tapar_meni(){
    var audio_tapar_meni = document.getElementById("audio_tapar_meni")
    audio_tapar_meni.play();
    audio_evez_elemir.pause();
    audio_sovetski.pause();
}

function stop_it(){
    var stop_it = document.getElementById("stop_it")
    stop_it.play()
    audio_sovetski.pause()
    audio_evez_elemir.pause();
    audio_tapar_meni.pause();
}
