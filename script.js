function sendMessage() {
  var userInput = document.getElementById('user-input').value;
  var chatBox = document.getElementById('chat-box');

  // Display user message
  chatBox.innerHTML += '<p class="user-message">You: ' + userInput + '</p>';

  // Show loading message
  chatBox.innerHTML += '<p class="loading-message">Bot is typing...</p>';
  
  // Set bot response
  var botResponse;
  var questionsAndAnswers = {
    'hi. ': 'Hello! How can I help you?',
 'hi': 'Hello! How can I help you?',
'hello': 'Hello! How can I help you?',
'hi ': 'Hello! How can I help you?',
'hello ': 'Hello! How can I help you?',
    'how are you?': 'I\'m doing well, thank you for asking!',
    'what is your name?': 'My name is ChatBot.',
    'what is the weather like today?': 'I\'m sorry, I cannot provide weather information at the moment.',
    'can you help me with programming?': 'Of course! What specifically do you need help with?',
    // Add more questions and answers below
    'what is the capital of France?': 'The capital of France is Paris.',
    'who is the president of the United States?': 'As of my last update, the president of the United States is Joe Biden.',
    'what is the meaning of life?': 'The meaning of life is a philosophical question that has been debated for centuries.',
    'can you recommend a good book?': 'One highly recommended book is "Sapiens: A Brief History of Humankind" by Yuval Noah Harari.',
    'how do I reset my password?': 'You can usually reset your password by clicking on the "Forgot Password" link on the login page.',
    // Add more questions and answers as needed
  };

  if (userInput.toLowerCase() in questionsAndAnswers) {
    botResponse = questionsAndAnswers[userInput.toLowerCase()];
  } else {
    botResponse = 'Sorry, I don\'t have an answer to that question. We are in the process of developing. Contact  @___sinan007 if you have any suggestions.';
  }

  // Display bot response with a delay to simulate typing
  setTimeout(function() {
    // Remove loading message
    var loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.remove();
    }
    chatBox.innerHTML += '<p class="bot-message"> Bot: ' + botResponse + '</p>';
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }, 1000);

  // Clear user input
  document.getElementById('user-input').value = '';
}
