// Set login timestamp
function setLoginTimestamp() {
  localStorage.setItem('loginTimestamp', Date.now());
}

// Check for inactivity
function checkInactivity() {
  const loginTimestamp = localStorage.getItem('loginTimestamp');
  if (!loginTimestamp) return;

  const now = Date.now();
  const maxInactivity = 60 * 60 * 1000; // 1 hour

  if (now - loginTimestamp > maxInactivity) {
    // Call the logout route
    fetch('/logOut', { method: 'POST' })
      .then(() => {
        // Clear localStorage and redirect to login or home
        localStorage.removeItem('loginTimestamp');
        window.location.href = '/login'; // or another appropriate action
      });
  }
}

// Update timestamp on user activity
function updateTimestamp() {
  localStorage.setItem('loginTimestamp', Date.now());
}

// Listen for user activity
window.addEventListener('mousemove', updateTimestamp);
window.addEventListener('keydown', updateTimestamp);
window.addEventListener('click', updateTimestamp);
window.addEventListener('scroll', updateTimestamp);

// Check inactivity periodically
setInterval(checkInactivity, 60000); // Check every minute

// Call setLoginTimestamp() when user logs in
