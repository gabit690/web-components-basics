window.addEventListener('DOMContentLoaded', () => {

  const actionButton = document.getElementById('show');

  actionButton.addEventListener('click', () => {

    const template = document.getElementById('template-card');

    const target = document.getElementById('main-box');

    const imported = document.importNode(template.content, true);

    target.appendChild(imported);
  });
});
