
// Create 100 snowflakes and append them to the container
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('snowflake');
  div.style.left = `${Math.random() * window.outerWidth}px`;
  div.style.top= 0;
  div.style.animation = `snowfall ${Math.random() * 3 + 14}s infinite linear`
  // Add image element if you have a snowflake image
  const img = document.createElement('img');
  img.src = "../svg/snowflake.svg"; // Replace with your image source
  div.appendChild(img); // Add image to the div (optional)

  document.body.appendChild(div);
}