// -------------------------------------
// Smooth scrolling
// -------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// -------------------------------------
// Navbar effect
// -------------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        navbar.style.background = "rgba(248,245,239,.95)";
        navbar.style.backdropFilter = "blur(14px)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.boxShadow = "none";

    }

});


// -------------------------------------
// Fade in animations
// -------------------------------------

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));


// ==============================
// RSVP Form Submission
// ==============================

const form = document.getElementById("rsvpForm");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            attending: document.getElementById("attendance").value,
            dietary: document.getElementById("dietary").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("https://script.google.com/macros/s/AKfycby3cgcd5nceASW8mqOfFZ0VG8d9bcLXxtOpwZeT32YTByBMS7xP1EFm31CFw8oKLKKeUQ/exec", {

                method: "POST",

                body: JSON.stringify(data)

            });

            if (response.ok) {

                form.style.display = "none";
                document.getElementById("thanks").style.display = "block";

            } else {

                alert("Sorry, something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send RSVP. Please check your connection.");

            console.error(error);

        }

    });

}