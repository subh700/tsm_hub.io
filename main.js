// Enhanced main JavaScript with AI features
// Dynamic content data
const aiFeatures = [
  {
    icon: '🎯',
    title: 'Smart Model Recommender',
    desc: 'Get AI-powered model suggestions based on your data characteristics and requirements',
    link: 'model-selector.html',
    color: 'border-blue-200 hover:border-blue-400'
  },
  {
    icon: '💬',
    title: 'AI Assistant',
    desc: 'Chat with our AI to get personalized forecasting guidance and troubleshooting help',
    link: 'chat.html',
    color: 'border-green-200 hover:border-green-400'
  },
  {
    icon: '📊',
    title: 'Interactive Simulator',
    desc: 'Test different models with your data in real-time and compare performance',
    link: 'forecast-simulator.html',
    color: 'border-purple-200 hover:border-purple-400'
  }
];

// Expanded offerings
const offerings = [
  {
    icon: '🧠',
    title: 'In-Depth Concepts',
    desc: 'Go beyond the surface with detailed explanations of core concepts like stationarity, autocorrelation, and model evaluation metrics.',
    link: 'Concepts.html',
    button: 'Explore Concepts →',
    buttonClass: 'bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors'
  },
  {
    icon: '📚',
    title: 'Comprehensive Model Library',
    desc: 'Discover a wide range of models, including Classical, Machine Learning, Deep Learning, and Hybrid approaches, each with its own detailed page.',
    link: 'models.html',
    button: 'Browse All Models →',
    buttonClass: 'bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors'
  },
  {
    icon: '📊',
    title: 'Detailed Comparisons',
    desc: 'Use our detailed comparison tables to understand the strengths, weaknesses, and ideal use cases for each model to inform your choices.',
    link: 'comparison.html',
    button: 'Compare Models →',
    buttonClass: 'bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors'
  },
  {
    icon: '🗂️',
    title: 'Datasets & Benchmarks',
    desc: 'Access 1000+ public time series datasets for benchmarking, learning, and experimentation.',
    link: 'datasets-1000.csv',
    button: 'Download Datasets (CSV)',
    buttonClass: 'bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors'
  },
  {
    icon: '🤖',
    title: 'AI Insights & Assistant',
    desc: 'Get personalized guidance, model recommendations, and troubleshooting help from our built-in AI assistant.',
    link: 'ai-recommender-assistant.html',
    button: 'Ask the AI →',
    buttonClass: 'bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors'
  },
  {
    icon: '🌍',
    title: 'Community & Tutorials',
    desc: 'Join our community, contribute datasets, and learn from curated tutorials and guides.',
    link: 'https://github.com/subh700/Pollution-Data-17-indian-cites',
    button: 'Join Community →',
    buttonClass: 'bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors'
  }
];

// Expanded popular models
const popularModels = [
  { icon: '📈', name: 'ARIMA', link: 'ARIMA.html' },
  { icon: '🧠', name: 'LSTM', link: 'LSTM.html' },
  { icon: '🔮', name: 'Prophet', link: 'Prophet.html' },
  { icon: '📉', name: 'ETS', link: 'ETS.html' },
  { icon: '📊', name: 'SARIMAX', link: 'SARIMAX.html' },
  { icon: '❄️', name: 'Holt-Winters', link: 'holt_winters.html' },
  { icon: '🔁', name: 'biLSTM', link: 'biLSTM.html' },
  { icon: '🔂', name: 'biGRU', link: 'biGRU.html' },
  { icon: '⚡', name: 'Transformer', link: 'transformer.html' },
  { icon: '🌊', name: 'WaveNet', link: 'wavenet.html' },
  { icon: '🧩', name: 'PatchTST', link: 'patchtst.html' },
  { icon: '🌲', name: 'Random Forest', link: 'random_forest.html' },
  { icon: '📦', name: 'XGBoost', link: 'xgboost.html' },
  { icon: '🧬', name: 'Prophet-LSTM', link: 'prophet_lstm.html' },
  { icon: '🧬', name: 'Prophet-XGBoost', link: 'prophet_xgboost.html' },
  { icon: '🧬', name: 'ARIMA-LSTM', link: 'arima_lstm.html' },
  { icon: '🧬', name: 'ARIMA-Transformer', link: 'arima_transformer.html' },
  { icon: '🧬', name: 'Stacking Ensemble', link: 'stacking_ensemble.html' },
  { icon: '🧬', name: 'DeepAR', link: 'deepar.html' },
  { icon: '🧬', name: 'DSSM', link: 'dssm.html' },
  { icon: '🧬', name: 'NeuralProphet', link: 'neural_prophet.html' },
  { icon: '🧬', name: 'VAR', link: 'var.html' },
  { icon: '🧬', name: 'MA', link: 'MA.html' },
  { icon: '🧬', name: 'Elastic Net', link: 'elastic_net.html' },
  { icon: '🧬', name: 'SVR', link: 'svr.html' },
  { icon: '🧬', name: 'Kalman Filter', link: 'kalman_filter.html' },
  { icon: '🧬', name: 'Fedformer', link: 'fedformer.html' },
  { icon: '🧬', name: 'Autoformer', link: 'autoformer.html' },
  { icon: '🧬', name: 'wavenet_rnn_hybrid', link: 'wavenet_rnn_hybrid.html' },
  { icon: '🧬', name: 'stacking_ensemble', link: 'stacking_ensemble.html' },
  { icon: '🧬', name: 'arima_garch', link: 'arima_garch.html' },
  { icon: '🧬', name: 'AR', link: 'AR.html' }
];

const ctaButtons = [
  { text: 'Browse All Models', link: 'models.html', class: 'bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors' },
  { text: '🤖 Get AI Recommendation', link: 'model-selector.html', class: 'bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors' },
  { text: 'Try Interactive Simulator', link: 'forecast-simulator.html', class: 'bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors' }
];

// Render functions
document.addEventListener('DOMContentLoaded', () => {
  renderAIFeatures();
  renderOfferings();
  renderPopularModels();
  renderCTAButtons();
  // Existing enhancements
  initializeAIFeatures();
});

function renderAIFeatures() {
  const container = document.getElementById('ai-features-container');
  if (!container) return;
  let html = `<h2 class="text-3xl font-semibold mb-8">🚀 AI-Powered Features</h2><div class="grid md:grid-cols-3 gap-8">`;
  aiFeatures.forEach(f => {
    html += `<div class="p-6 border-2 ${f.color} rounded-lg hover:scale-105 transition-all cursor-pointer" onclick="window.location.href='${f.link}'">
      <div class="text-4xl mb-4">${f.icon}</div>
      <h3 class="font-bold text-lg mb-3">${f.title}</h3>
      <p class="text-gray-600">${f.desc}</p>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderOfferings() {
  const container = document.getElementById('offerings-container');
  if (!container) return;
  let html = '';
  offerings.forEach(o => {
    html += `<div class="text-center p-8 rounded-lg shadow-lg${o.link ? ' bg-gradient-to-b from-blue-50 to-blue-100' : ''}">
      <div class="text-5xl mb-4">${o.icon}</div>
      <h3 class="text-2xl font-bold mb-4">${o.title}</h3>
      <p class="text-gray-600">${o.desc}</p>`;
    if (o.link && o.button) {
      html += `<a href="${o.link}" class="inline-block mt-4 ${o.buttonClass}">${o.button}</a>`;
    }
    html += '</div>';
  });
  container.innerHTML = html;
}

function renderPopularModels() {
  const container = document.getElementById('popular-models-container');
  if (!container) return;
  let html = '';
  popularModels.forEach(m => {
    html += `<a href="${m.link}" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
      <div class="text-3xl mb-2">${m.icon}</div>
      <div class="font-semibold">${m.name}</div>
    </a>`;
  });
  container.innerHTML = html;
}

function renderCTAButtons() {
  const container = document.getElementById('cta-buttons-container');
  if (!container) return;
  let html = '';
  ctaButtons.forEach(btn => {
    html += `<a href="${btn.link}" class="${btn.class}">${btn.text}</a>`;
  });
  container.innerHTML = html;
}

function initializeAIFeatures() {
    // Add loading animations
    addLoadingAnimations();
    
    // Initialize tooltips for AI features
    initializeTooltips();
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
}

function addLoadingAnimations() {
    // Add pulse animation to AI-powered elements
    const aiElements = document.querySelectorAll('[class*="ai"], [onclick*="AI"]');
    aiElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function initializeTooltips() {
    // Simple tooltip system for AI features
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip bg-gray-800 text-white text-xs rounded py-1 px-2 absolute z-10';
    tooltip.textContent = e.target.dataset.tooltip;
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = (e.pageY - 30) + 'px';
    document.body.appendChild(tooltip);
    e.target.tooltipElement = tooltip;
}

function hideTooltip(e) {
    if (e.target.tooltipElement) {
        document.body.removeChild(e.target.tooltipElement);
        delete e.target.tooltipElement;
    }
}

function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Alt + A for AI Assistant
        if (e.altKey && e.key === 'a') {
            e.preventDefault();
            openChat();
        }
        
        // Alt + M for Model Selector
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            openModelSelector();
        }
        
        // Alt + S for Simulator
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            openSimulator();
        }
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced form validation
function validateForm(formElement) {
    const requiredFields = formElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
            field.addEventListener('input', function() {
                this.classList.remove('border-red-500');
            }, { once: true });
        }
    });
    
    return isValid;
}

// Add stubs for new simulator features if needed
function fetchRealDataset(name) {
  // Placeholder: implement AJAX fetch for real datasets if needed
}
