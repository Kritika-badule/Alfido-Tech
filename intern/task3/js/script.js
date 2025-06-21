// Function to generate a random color in hex format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event handler for button click
document.getElementById('colorBtn').addEventListener('click', function() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});
