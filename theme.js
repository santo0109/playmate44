document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const storageKey = 'playmate-theme';
  const switchInput = document.getElementById('theme-switch');
  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';

  body.setAttribute('data-theme', initialTheme);
  if (switchInput) {
    switchInput.checked = initialTheme === 'dark';
    switchInput.addEventListener('change', function () {
      const nextTheme = switchInput.checked ? 'dark' : 'light';
      body.setAttribute('data-theme', nextTheme);
      localStorage.setItem(storageKey, nextTheme);
    });
  }
});
