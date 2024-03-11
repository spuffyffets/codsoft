const chatbot = document.querySelector('.chatbot');
const closeButton = document.querySelector('.close-chatbot');
const minimizedSymbol = document.createElement('i');
minimizedSymbol.classList.add('fas', 'fa-comment-dots');

// Initial state: hidden
chatbot.style.display = 'none';

// Pop up when window opens
window.addEventListener('load', () => {
    chatbot.style.display = 'block';
});

// Handle cross button click
closeButton.addEventListener('click', () => {
    chatbot.style.display = 'none';

    // Add minimized symbol with styling
    minimizedSymbol.style.position = 'fixed';
    minimizedSymbol.style.bottom = '30px'; // Adjust as needed
    minimizedSymbol.style.right = '30px'; // Adjust as needed
    minimizedSymbol.style.color = '#555'; // Customize color
    minimizedSymbol.style.fontSize = '24px'; // Adjust size
    minimizedSymbol.style.cursor = 'pointer';
    document.body.appendChild(minimizedSymbol);

    // Activate minimized symbol click
    minimizedSymbol.addEventListener('click', () => {
        chatbot.style.display = 'block';
        minimizedSymbol.remove();
    });
});

// Transition effect for smoother animation
chatbot.style.transition = 'transform 0.3s ease-in-out';

function toggleChatbot() {
    chatbot.style.transform = chatbot.style.transform === 'translateY(0)' ? 'translateY(-100%)' : 'translateY(0)';
}

closeButton.addEventListener('click', toggleChatbot);
minimizedSymbol.addEventListener('click', toggleChatbot);
