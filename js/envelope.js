const invite = document.getElementById("luxuryEnvelope");
const button = document.getElementById("openInvite");

button.addEventListener("click", () => {

    button.style.pointerEvents = "none";

    invite.style.transition = "all 1.8s ease";

    invite.style.transform = "scale(1.08)";
    invite.style.filter = "blur(2px)";
    invite.style.opacity = "0";

    document.body.style.transition = "background 1.8s ease";
    document.body.style.background = "#ffffff";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1700);

});