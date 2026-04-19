function updateFlex(property, value, btn) {
  const container = document.getElementById('container');

  // Apply the CSS property to the flex container
  container.style[property] = value;

  // Map property names to their corresponding ID in the dashboard
  const textIdMap = {
      'flexDirection': 'css-direction',
      'justifyContent': 'css-justify',
      'alignItems': 'css-align',
      'flexWrap': 'css-wrap'
  };

  const textId = textIdMap[property];
  const targetEl = document.getElementById(textId);

  // Update the dashboard text and trigger a small animation
  if (targetEl) {
      targetEl.innerText = value;
      targetEl.classList.remove('animate-pulse');
      void targetEl.offsetWidth; // Force reflow to restart animation
      targetEl.classList.add('text-white', 'duration-500');
      setTimeout(() => targetEl.classList.remove('text-white'), 500);
  }

  // Toggle button active states within the group
  const buttons = btn.parentElement.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('btn-active'));
  btn.classList.add('btn-active');

  // Visual feedback on the container
  container.classList.add('ring-4', 'ring-indigo-500/10');
  setTimeout(() => container.classList.remove('ring-4', 'ring-indigo-500/10'), 400);
}
