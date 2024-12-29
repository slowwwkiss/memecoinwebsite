const copyButton = document.getElementById('copyButton');
const tokenAddressInput = document.getElementById('tokenAddress');
const copyIcon = copyButton.querySelector('i'); // Select the icon inside the button

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(tokenAddressInput.value);
    copyIcon.classList.remove('fa-copy'); // Remove copy icon class
    copyIcon.classList.add('fas', 'fa-check'); // Add check icon class with animation
    copyIcon.classList.add('animate__animated', 'animate__bounce'); // Add animation classes (replace with your preferred animation library)

    setTimeout(() => {
      copyIcon.classList.remove('fa-check', 'animate__animated', 'animate__bounce'); // Remove check icon and animation classes
      copyIcon.classList.add('fas', 'fa-copy'); // Add copy icon class back
    }, 2000); // Change back to copy icon after 2 seconds
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    copyIcon.classList.remove('fa-copy'); // Remove copy icon class
    copyIcon.classList.add('fas', 'fa-times'); // Add cross icon class
    copyIcon.classList.add('animate__animated', 'animate__bounce'); // Add animation classes (replace with your preferred animation library)

    setTimeout(() => {
      copyIcon.classList.remove('fa-times', 'animate__animated', 'animate__bounce'); // Remove check icon and animation classes
      copyIcon.classList.add('fas', 'fa-copy'); // Add copy icon class back
    }, 2000); // Change back to copy icon after 2 seconds
  }
});

AOS.init();
  
  