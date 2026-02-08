/* Japanese Web Aesthetic Theme — Optional JavaScript for enhanced functionality */
document.addEventListener('DOMContentLoaded', function() {
  
  // Random quote rotation from config
  const quoteContainer = document.querySelector('.quote-rotation');
  if (quoteContainer) {
    const quotes = JSON.parse(quoteContainer.getAttribute('data-quotes'));
    if (quotes && quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const quoteElement = document.querySelector('.random-quote p');
      if (quoteElement) {
        quoteElement.textContent = randomQuote.text;
        const citeElement = document.querySelector('.random-quote cite');
        if (citeElement) {
          citeElement.textContent = `— ${randomQuote.author}`;
        }
      }
    }
  }
  
  // Page load time display
  if (window.performance) {
    const loadTime = (performance.now() / 1000).toFixed(2);
    const timeElement = document.querySelector('.page-load-time');
    if (timeElement) {
      timeElement.textContent = `Page loaded in ${loadTime}s`;
    }
  }
  
  // Visitor counter functionality
  initVisitorCounter();
  
});

function initVisitorCounter() {
  const counterElement = document.querySelector('.counter-digits');
  if (!counterElement) return;
  
  // Get current visit count
  let visitCount = getVisitCount();
  
  // Update display
  updateCounterDisplay(visitCount);
}

function getVisitCount() {
  // Check if this is a new session (page reload vs new visit)
  const sessionKey = 'hugo_session_active';
  const isSessionActive = sessionStorage.getItem(sessionKey);
  
  if (!isSessionActive) {
    // New session - increment the persistent counter
    const currentCount = parseInt(localStorage.getItem('hugo_visit_count') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('hugo_visit_count', newCount.toString());
    sessionStorage.setItem(sessionKey, 'true');
    return newCount;
  }
  
  // Same session - return current count without incrementing
  return parseInt(localStorage.getItem('hugo_visit_count') || '1');
}

function updateCounterDisplay(count) {
  const counterElement = document.querySelector('.counter-digits');
  if (!counterElement) return;
  
  // Format count with leading zeros for that classic counter look
  const formattedCount = count.toString().padStart(6, '0');
  
  // Create individual digit elements
  counterElement.innerHTML = '';
  for (let i = 0; i < formattedCount.length; i++) {
    const digit = document.createElement('span');
    digit.className = 'digit';
    digit.textContent = formattedCount[i];
    counterElement.appendChild(digit);
  }
  
  // Add a subtle animation when counter updates
  animateCounter(counterElement);
}

function animateCounter(element) {
  element.style.animation = 'none';
  setTimeout(() => {
    element.style.animation = 'counterGlow 0.5s ease-in-out';
  }, 10);
}

// Add counter glow animation to CSS if not already present
const counterStyle = document.createElement('style');
counterStyle.textContent = `
  @keyframes counterGlow {
    0% { opacity: 0.5; transform: scale(0.95); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(counterStyle);
