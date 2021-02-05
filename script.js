var audio_player = document.getElementById("audio_sel");
var play_button = document.getElementById("play_button");
var song_img = document.getElementById("song_img");

song_img.style.webkitAnimationPlayState = 'paused';
play_button.style.background = "url(resorce/play.png)"

var count = true;

function play_button_fun() {
	if (count) {
		count = false;
		play_button.style.background = "url(resorce/pause.png)";
		song_img.style.webkitAnimationPlayState = 'running';
		song_img.style.animationDuration = audio_player.duration+'s';
		audio_player.play();
	}else{
		count = true;
		play_button.style.background = "url(resorce/play.png)";
		song_img.style.webkitAnimationPlayState = 'paused';
		audio_player.pause();
	}
}

function library_fun(argument) {
	// body...
}