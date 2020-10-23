// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmjamIwv4gXIIC1TG1SqfBa2jgG6B-D3s",
            authDomain: "formtest-1c30f.firebaseapp.com",
            databaseURL: "https://formtest-1c30f.firebaseio.com",
            projectId: "formtest-1c30f",
            storageBucket: "formtest-1c30f.appspot.com",
            messagingSenderId: "601560401421"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(message, name, email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(message, name, email){
  const HELPFUL = document.querySelector('input[name="helpful"]:checked').value;
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    helpful: HELPFUL,
    message: message,
    name: name,
    email: email
  });
}
