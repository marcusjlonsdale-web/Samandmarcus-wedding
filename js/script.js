// ==============================
// Wedding RSVP
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

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby3cgcd5nceASW8mqOfFZ0VG8d9bcLXxtOpwZeT32YTByBMS7xP1EFm31CFw8oKLKKeUQ/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            if (result.success) {

                form.reset();

                document.getElementById("thanks").style.display = "block";

            } else {

                alert("Sorry, something went wrong.");

            }

        } catch (err) {

            console.error(err);

            alert("Unable to send RSVP. Please check your connection.");

        }

    });

}