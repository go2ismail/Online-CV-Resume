var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    })
}

function onPlayerReady(event) {
    
    var overlay = document.getElementById("video_overlay");
    var playButton = document.getElementById("play_btn");
    
    playButton.addEventListener("click", function() {
        player.playVideo();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
        overlay.classList.add('playing')
    });
    
    var pauseButton = document.getElementById("pause_btn");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
        overlay.classList.remove('playing')
    })
    
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);