const invite = document.getElementById("luxuryEnvelope");
const button = document.getElementById("openInvite");

if (invite && button) {

    button.addEventListener("click", () => {

        button.style.pointerEvents = "none";

        invite.style.transition = "all 1.8s cubic-bezier(.22,.61,.36,1)";
        invite.style.transform = "scale(1.08) translateY(-20px)";
        invite.style.opacity = "0";
        invite.style.filter = "blur(2px)";

        setTimeout(() => {

            document.body.style.transition = "opacity .8s ease";
            document.body.style.opacity = "0";

        }, 900);

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1700);

    });

}