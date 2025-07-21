document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('model-list');
    let html = '';
    models.forEach(model => {
      html += `
        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow model-card">
          <div class="text-5xl mb-4">${model.icon}</div>
          <h2 class="text-xl font-bold mb-2">${model.name}</h2>
          <p class="text-gray-600 mb-4 text-center">${model.description}</p>
          <a href="${model.link}" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-semibold">Learn More</a>
        </div>
      `;
    });
    container.innerHTML = html;
  });