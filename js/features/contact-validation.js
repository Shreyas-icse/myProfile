const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    // --- EMAILJS INTEGRATION ---
    // Ensure you have loaded email.min.js in index.html and called emailjs.init("YOUR_PUBLIC_KEY")
    
      emailjs.send("service_7891m0g", "template_q7442fa", {
      name: name,           // This must match {{name}} in your template
      email: email,         // This must match {{email}} in your template
      subject: subject,     // This must match {{subject}} in your template
      message: message      // This must match {{message}} in your template
    })
    .then(function() {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      contactForm.reset();
    }, function(error) {
      console.error("EmailJS Error:", error);
      formMessage.textContent = "Failed to send message. Please try again.";
      formMessage.style.color = "red";
    });
  });
}