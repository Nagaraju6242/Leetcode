DEFAULT_PLAY_URL = "https://mobcup.net/va/VVpPe4hO6fT8s25NN";

document.querySelector("button").onclick = () => {
    var url = document.getElementById("url").value;
    if (url.trim() == "") {
        url = DEFAULT_PLAY_URL;
    }
    chrome.cookies.set({
        name: "playSoundURL",
        value: url,
        url: "https://leetcode.com"
    }).then(data => {
        console.log(data);
        document.querySelector(".result").innerText = "Success";
    })
}