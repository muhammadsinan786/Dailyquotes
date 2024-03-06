function sendMessage() {
  var userInput = document.getElementById('user-input').value.trim(); // Trim whitespace from user input
  var chatBox = document.getElementById('chat-box');

  // Display user message
  chatBox.innerHTML += '<p>You: ' + userInput + '</p>';

  // Set bot response
  var botResponse;
  var questionsAndAnswers = {
    'hi': 'Hello! How can I help you?',
    'hello': 'Hello! How can I help you?',
    'how are you': 'I\'m doing well, thank you for asking!',
    'what is your name?': 'My name is ChatBot.',
    // Add more questions and answers here
    'what is the weather like today?': 'I\'m sorry, I cannot provide weather information at the moment.',
    'can you help me with programming?': 'Of course! What specifically do you need help with?',
    // Add as many questions and answers as needed

    'cat': 'https://placekitten.com/200/300',
    'dog': 'https://placedog.net/200/300',
  };

  if (userInput.toLowerCase() in questionsAndAnswers) {
    botResponse = questionsAndAnswers[userInput.toLowerCase()];
  } else {
    botResponse = 'Sorry, I don\'t have an answer to that question. If you want to see an image of a cat or a dog, just type "cat" or "dog". We are in the process of developing. Contact @___sinan007 if you have any suggestions.';
  }

  // Display bot response
  setTimeout(function() {
    chatBox.innerHTML += botResponse.startsWith('http') ? '<p>Bot: <img src="' + botResponse + '" alt="' + userInput + '"></p>' : '<p>Bot: ' + botResponse + '</p>';
  }, 1000);

  // Clear user input
  document.getElementById('user-input').value = '';
}
