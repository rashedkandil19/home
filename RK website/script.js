let HeaderLinks = document.querySelector(".header ul");
document.addEventListener("DOMContentLoaded", function () {
  let bar = document.querySelector(".fa-bars-staggered");
  let arrow = document.querySelector(".hideArrow");
  bar.addEventListener("click", function () {
    HeaderLinks.classList.toggle("show");
    HeaderLinks.classList.toggle("hide");
    arrow.classList.toggle("hideArrow");
    arrow.classList.toggle("menU");
  });
});

let navitems = document.querySelectorAll(".header li");
navitems.forEach(e => {
  e.addEventListener("click", () => {
    navitems.forEach(nav => nav.classList.remove("active"));
    e.classList.add("active")
    let sectionId = e.getAttribute("data-section");
    let section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth"
    })
  })
});


function smoothBTN() {

  let ad = document.getElementById("btn");
  let button = ad.getAttribute("data-section");
  let buttonScroll = document.getElementById(button);
  buttonScroll.scrollIntoView({
    behavior: 'smooth'
  });
}

(function () {
  emailjs.init("q-Ku4cSd8vglp_L5i");
})();
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let templateParams = {
    to_name: 'Rashed Talaat ',
    from_name: name,
    from_email: email,
    message: message
  };
  // send the message to the email
  emailjs.send("service_cmaf79l", "template_s3zghec", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text)
      alert('your message has been sent successfully!');
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.log('FAILED...', error);
      alert('Failed to send your message. please try again.');
    });
});