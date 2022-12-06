DEFAULT_PLAY_URL = "https://mobcup.net/va/VVpPe4hO6fT8s25NN";

function playSound() {
    playSoundURL = getCookie("playSoundURL");

    if (playSoundAudio.src != playSoundURL) {
        playSoundAudio.src = playSoundURL
    }
    playSoundAudio.play();
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


const origFetch = window.fetch;
window.fetch = (...args) => (async (args) => {
    var result = await origFetch(...args);
    var naga = result;
    if (result.url.includes('https://leetcode.com/submissions/detail/')) {
        var clonedResponse = result.clone();
        clonedResponse.json().then(function (data) {
            console.log(data);
            if (data.state == "SUCCESS" && data.status_msg == "Accepted") {
                playSound();
            }
        });
    }
    return result;
})(args);

playSoundURL = getCookie("playSoundURL");
if (playSoundURL == null) {
    playSoundURL = DEFAULT_PLAY_URL;
}
playSoundAudio = new Audio(playSoundURL);