// Simple lightbox feature
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    const img = document.createElement('img');
    img.src = image.src;
    lightbox.innerHTML = '';
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';  // Close the lightbox when clicked
});
