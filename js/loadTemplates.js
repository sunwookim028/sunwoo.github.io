async function loadTemplate(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}: ${response.statusText}`);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  } catch (error) {
    console.error(error);
  }
}

// Call this function for all templates you want to load
async function loadTemplates() {
  await loadTemplate('header', '/templates/header.html');
  await loadTemplate('footer', '/templates/footer.html');
}

// Ensure templates load after the DOM is ready
document.addEventListener('DOMContentLoaded', loadTemplates);

