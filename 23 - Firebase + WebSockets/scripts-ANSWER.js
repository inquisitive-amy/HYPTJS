  // Create a referece to firebase
  var messagesRef = new Firebase('https://hackeryou.firebaseio.com/chat');

  // C.R.E.A.M -  cache your elements
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('.messages');

  // Listen for the form submit
  $('.chat').on('submit',function(e) {

    // stop the form from submitting
    e.preventDefault();

    // create a message object
    var message = {
      name : nameField.val(),
      text : messageField.val()
    }
    // Save Data to firebase
    messagesRef.push(message);
    // clear message field
    messageField.val('');

  });

  // Add a callback that is triggered for each chat message
  // this is kind of like an Ajax request 
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    
    // Get data from returned 
    var data = snapshot.val();
    var username = data.name || 'anonymous';
    var message = data.text;

    // Create an element
    var nameElement = $('<strong>').text(username);
    var messageElement = $('<li>').text(message).prepend(nameElement);
    
    // Add the message to the DOM
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });
