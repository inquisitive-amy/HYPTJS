  // Create a referece to firebase
  var config = {
    apiKey: "AIzaSyDwSZis0M6r1vf6QL1EX4HWi588kNevQ5s",
    authDomain: "hackeryou-88892.firebaseapp.com",
    databaseURL: "https://hackeryou-88892.firebaseio.com",
    storageBucket: "hackeryou-88892.appspot.com",
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  var chat = database.ref('/chat');

  // C.R.E.A.M -  cache your elements
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('.messages');

  // Listen for the form submit
  $('.chat').on('submit',function(e) {

    // stop the form from submitting
    e.preventDefault();

    // 1. When the form is submitted, send the data to firebase

  });

  // Add a callback that is triggered for each chat message
  // this is kind of like an Ajax request
  chat.limitToLast(10).on('child_added', function (data) {

    // when data comes in - create elements and append it into the DOM
  });
