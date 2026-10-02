document.addEventListener('DOMContentLoaded', () => {
  const app = document.body;

  app.insertAdjacentHTML(
    'beforeend',
    `
      <main class="container" style="font-family: Arial, sans-serif; max-width: 600px; margin: 60px auto; padding: 20px; text-align: center;">
        <h1>Welcome to ZYZA-LARITA</h1>
        <p>This page is working with JavaScript.</p>
        <button id="greetBtn" style="padding: 10px 20px; cursor: pointer;">Click me</button>
        <p id="message" style="margin-top: 15px; font-weight: bold;"></p>
      </main>
    `
  );

  const greetBtn = document.getElementById('greetBtn');
  const message = document.getElementById('message');

  greetBtn.addEventListener('click', () => {
    message.textContent = 'Hello! Your script.js is working.';
  });

  console.log('Script loaded successfully.');
});
