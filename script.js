function goToSearch() {
  const username = document.getElementById('fake-username').value;
  const password = document.getElementById('fake-password').value;
  sessionStorage.setItem('fakeUser', username);
  sessionStorage.setItem('fakePass', password);
  location.href = 'search.html';
}

function goToReveal() {
  const phishUser = document.getElementById('phish-username').value;
  const phishPass = document.getElementById('phish-password').value;
  sessionStorage.setItem('phishUser', phishUser);
  sessionStorage.setItem('phishPass', phishPass);
  location.href = 'reveal.html';
}

window.addEventListener('DOMContentLoaded', () => {
  if (location.pathname.endsWith('reveal.html')) {
    document.getElementById('firstLogin').textContent = sessionStorage.getItem('fakeUser') + ' / ' + sessionStorage.getItem('fakePass');
    document.getElementById('phishedLogin').textContent = sessionStorage.getItem('phishUser') + ' / ' + sessionStorage.getItem('phishPass');
  }
});
