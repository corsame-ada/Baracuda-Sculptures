window.onscroll = function() {scrollFunction()};

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "14px";
    document.getElementById("header").style.height = "140px";
    document.getElementById("header").style.overflow = "hidden";
  } 
  else {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("header").style.height = "220px";
    document.getElementById("header").style.overflow = "visible";
  }
}

function myEnterFunction() {
  document.getElementById("header").style.fontSize = "20px";
  document.getElementById("header").style.height = "220px";
  document.getElementById("header").style.overflow = "visible";
}

function myOutFunction() {
    document.getElementById("header").style.fontSize = "14px";
    document.getElementById("header").style.height = "130px";
    document.getElementById("header").style.overflow = "hidden";

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "14px";
      document.getElementById("header").style.height = "140px";
      document.getElementById("header").style.overflow = "hidden";
    } 
    else {
      document.getElementById("header").style.fontSize = "20px";
      document.getElementById("header").style.height = "220px";
      document.getElementById("header").style.overflow = "visible";
    }
}

function scrollAbout(){
  window.scrollTo(0, 110);
}



// Zoom Image

function enlargeImage(image) {
  var body = document.body;
  body.style.overflow = "hidden";

  var enlargedImage = document.querySelector(".enlarged-image");
  var img = enlargedImage.querySelector("img");
  img.src = image.src;
  enlargedImage.style.display = "block";
  overflow = "hidden"

  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("header").style.height = "0px";
  document.getElementById("header").style.overflow = "hidden";
}

function hideImage() {
  var body = document.body;
  body.style.overflow = "visible";

  var enlargedImage = document.querySelector(".enlarged-image");
  enlargedImage.style.display = "none";

  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("header").style.height = "140px";
  document.getElementById("header").style.overflow = "hidden";
}

// SEND EMAIL

function sendMail() {
  var a = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ull90ok";
  const templateID = "template_gm6ffcg";

    emailjs.send(serviceID, templateID, a)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!!")

    })
    .catch(err=>console.log(err));

}

// CAPTION HOVERED