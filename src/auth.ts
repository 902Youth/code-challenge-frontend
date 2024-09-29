// // Set login timestamp


// // Check for inactivity
// function checkInactivity() {
//   const fromLocalStorage = localStorage.getItem('loginTimestamp');
//   const loginTimestamp = fromLocalStorage ? JSON.parse(fromLocalStorage) : null;
//   if (!loginTimestamp) return;

//   const now = Date.now();
//   const maxInactivity = 60 * 60 * 1000; // 1 hour

//   if (now - loginTimestamp > maxInactivity) {

//     fetch('/logOut', { method: 'POST' })
//       .then(() => {

//         localStorage.removeItem('loginTimestamp');
//         window.location.href = '/login';
//       });
//   }
// }

// // Update timestamp on user activity
// function updateTimestamp() {
//   localStorage.setItem('loginTimestamp', JSON.stringify(Date.now()));
// }

// // Listen for user activity
// window.addEventListener('mousemove', updateTimestamp);
// window.addEventListener('keydown', updateTimestamp);
// window.addEventListener('click', updateTimestamp);
// window.addEventListener('scroll', updateTimestamp);

// // Check inactivity periodically
// setInterval(checkInactivity, 60000); // Check every minute

// // Call setLoginTimestamp() when user logs in
