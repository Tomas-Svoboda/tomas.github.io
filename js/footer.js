document.write(`
  <footer>
    <p>Tomas Svoboda &copy; <span id="current-year"></span></p>
  </footer>
  <script>
    document.getElementById('current-year').textContent = new Date().getFullYear();
  </script>
`);
