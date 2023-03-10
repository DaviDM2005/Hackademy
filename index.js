// Navbar

const buttons = document.querySelectorAll('.nav-bar li a');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('check');
    checkbox.checked = false;
  });
});



var inputs = document.querySelectorAll(".my-input");

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];

 
  input.addEventListener("focus", function() {
    this.style.backgroundColor = "black"; 
  });

 
  input.addEventListener("blur", function() {
    this.style.backgroundColor = ""; 
  });

 
  input.addEventListener("input", function() {
    this.style.backgroundColor = "black"; 
  });
}




const elements = document.querySelectorAll('h1,p,a');

function checkIfInView() {
  elements.forEach(element => {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  if (elementTop < window.innerHeight && elementBottom >= 0) {
        element.classList.add('show');
  } else {
        element.classList.remove('show');
      }
    });
  }
window.addEventListener('scroll', checkIfInView);
checkIfInView();



// Loading

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 2000)
});


// animation














// Feedback

document.getElementById("feedback-btn").addEventListener("click", function(event) {
  event.preventDefault();
  var message = document.getElementById("message");
  var name = document.getElementById("name").value
  message.style.display = "block";
  message.innerHTML = "მადლობა "+name+" გამოხმაურებისთვის!";
  setTimeout(function(){ message.style.display = "none"; }, 2000);
});



// change tab

window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = 'WHERE TO?';

  document.addEventListener('visibilitychange', function(e) {
  var isPageActive = !document.hidden;

  if(!isPageActive){
      document.title = attentionMessage;
  }else {
      document.title = pageTitle;
  }
  });
};





