// AI-powered features for the time series forecasting website

// Model recommendation engine
const modelDatabase = {
    ARIMA: {
        category: 'classical',
        bestFor: ['trend', 'stationary', 'interpretability'],
        requirements: ['medium', 'linear'],
        complexity: 'medium',
        accuracy: 'good'
    },
    LSTM: {
        category: 'dl',
        bestFor: ['nonlinear', 'large', 'accuracy'],
        requirements: ['large', 'very_large'],
        complexity: 'high',
        accuracy: 'excellent'
    },
    Prophet: {
        category: 'ml',
        bestFor: ['seasonality', 'automation', 'missing_data'],
        requirements: ['medium', 'large'],
        complexity: 'low',
        accuracy: 'good'
    },
    SARIMAX: {
        category: 'classical',
        bestFor: ['seasonality', 'external', 'interpretability'],
        requirements: ['medium', 'large'],
        complexity: 'medium',
        accuracy: 'good'
    },
    ETS: {
        category: 'classical',
        bestFor: ['seasonality', 'trend', 'short'],
        requirements: ['small', 'medium'],
        complexity: 'low',
        accuracy: 'good'
    }
};

// AI Model Selector Logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('model-selector-form');
    if (form) {
        form.addEventListener('submit', handleModelRecommendation);
    }
    
    // Initialize dynamic content
    initializeDynamicContent();
    loadModelGrid();
});

function handleModelRecommendation(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const responses = Object.fromEntries(formData.entries());
    
    // AI recommendation logic
    const recommendations = generateRecommendations(responses);
    displayRecommendations(recommendations);
}

function generateRecommendations(responses) {
    const scores = {};
    
    // Score each model based on responses
    for (const [modelName, modelInfo] of Object.entries(modelDatabase)) {
        scores[modelName] = 0;
        
        // Data size scoring
        if (responses.size && modelInfo.requirements.includes(responses.size)) {
            scores[modelName] += 2;
        }
        
        // Pattern scoring
        if (responses.trend === 'yes' && modelInfo.bestFor.includes('trend')) {
            scores[modelName] += 2;
        }
        if (responses.seasonality === 'yes' && modelInfo.bestFor.includes('seasonality')) {
            scores[modelName] += 2;
        }
        
        // Behavior scoring
        if (responses.behavior && modelInfo.bestFor.includes(responses.behavior)) {
            scores[modelName] += 2;
        }
        
        // External variables
        if (responses.external === 'yes' && modelInfo.bestFor.includes('external')) {
            scores[modelName] += 2;
        }
        
        // Goal alignment
        if (responses.goal && modelInfo.bestFor.includes(responses.goal)) {
            scores[modelName] += 3;
        }
    }
    
    // Sort by score
    const sortedModels = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    return sortedModels.map(([model, score]) => ({
        name: model,
        score,
        info: modelDatabase[model]
    }));
}

function displayRecommendations(recommendations) {
    const resultsDiv = document.getElementById('recommendation-results');
    const recommendationsDiv = document.getElementById('recommendations');
    
    if (!resultsDiv || !recommendationsDiv) return;
    
    let html = '';
    
    recommendations.forEach((rec, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
        const confidence = Math.min(95, 60 + rec.score * 8);
        
        html += `
            <div class="bg-gradient-to-r ${index === 0 ? 'from-yellow-50 to-yellow-100' : 'from-gray-50 to-gray-100'} p-6 rounded-lg mb-4 border-2 ${index === 0 ? 'border-yellow-200' : 'border-gray-200'}">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="text-xl font-bold flex items-center">
                        ${medal} ${rec.name}
                        <span class="ml-3 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">${confidence}% match</span>
                    </h4>
                    <div class="text-right">
                        <div class="text-sm text-gray-600">Category</div>
                        <div class="font-semibold capitalize">${rec.info.category}</div>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <div class="text-sm text-gray-600">Complexity</div>
                        <div class="font-medium capitalize">${rec.info.complexity}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Typical Accuracy</div>
                        <div class="font-medium capitalize">${rec.info.accuracy}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Best For</div>
                        <div class="font-medium">${rec.info.bestFor.slice(0, 2).join(', ')}</div>
                    </div>
                </div>
                
                <div class="flex space-x-3">
                    <button onclick="window.location.href='${rec.name.toLowerCase()}.html'" 
                            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Learn More
                    </button>
                    <button onclick="openForecastSimulator('${rec.name}')" 
                            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Try in Simulator
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
    recommendationsDiv.classList.remove('hidden');
    
    // Scroll to results
    recommendationsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Chat functionality
const chatResponses = {
    'model comparison': {
        keywords: ['choose', 'comparison', 'arima', 'lstm', 'prophet', 'difference'],
        response: `Great question! Here's how to choose between popular models:

**ARIMA** - Best for:
• Stationary data with clear patterns
• When you need interpretable results
• Medium-sized datasets

**LSTM** - Best for:
• Complex, non-linear patterns
• Large datasets (1000+ observations)
• When accuracy is top priority

**Prophet** - Best for:
• Business forecasting with seasonality
• Automatic parameter tuning
• Handling missing data and holidays

**Quick decision framework:**
1. Small data (< 100 obs) → Simple Exponential Smoothing
2. Linear patterns → ARIMA/SARIMAX  
3. Complex patterns + big data → LSTM
4. Business data with seasons → Prophet

What type of data are you working with?`
    },
    
    'accuracy issues': {
        keywords: ['inaccurate', 'accuracy', 'poor', 'bad', 'wrong', 'forecast'],
        response: `Let's troubleshoot your accuracy issues! Here's a systematic approach:

**1. Data Quality Check:**
• Missing values or outliers?
• Consistent time intervals?
• Sufficient historical data?

**2. Model Selection:**
• Does your model match data characteristics?
• Try the Model Selector for recommendations

**3. Common Issues:**
• **Overfitting:** Try simpler models or regularization
• **Underfitting:** Add complexity or features
• **Wrong parameters:** Use grid search or auto-tuning
• **Data leakage:** Check for future information in features

**4. Validation Strategy:**
• Use time-based train/test splits
• Try walk-forward validation
• Compare multiple models

**5. Quick Fixes:**
• Scale your data
• Try different forecast horizons
• Add external variables (SARIMAX)

What specific accuracy metrics are you seeing?`
    },
    
    'seasonality': {
        keywords: ['seasonality', 'seasonal', 'patterns', 'cycles', 'periodic'],
        response: `Handling seasonality is crucial for good forecasts! Here's how:

**Detecting Seasonality:**
• Visual inspection of plots
• Autocorrelation plots
• Seasonal decomposition

**Best Models for Seasonality:**
• **SARIMAX:** Full control over seasonal parameters
• **Prophet:** Automatic seasonal detection
• **ETS:** Good for multiple seasonal patterns
• **Holt-Winters:** Classic approach for trend + seasonality

**Key Considerations:**
• **Additive vs Multiplicative:** Does seasonal effect stay constant or scale with level?
• **Multiple Seasons:** Daily + weekly + yearly patterns
• **Changing Patterns:** Seasonality that evolves over time

**Quick Implementation:**
• SARIMAX: Set seasonal_order=(P,D,Q,s)
• Prophet: Automatically handles yearly/weekly/daily
• ETS: Choose (A,A,A) or (A,A,M) variants

What type of seasonal pattern do you see in your data?`
    },
    
    'preprocessing': {
        keywords: ['preprocessing', 'preparation', 'clean', 'transform', 'data preparation'],
        response: `Data preprocessing is critical! Here's the complete checklist:

**1. Basic Cleaning:**
• Handle missing values (interpolation, forward fill)
• Remove or treat outliers
• Ensure consistent time intervals

**2. Stationarity:**
• Check with ADF test
• Apply differencing if needed
• Consider log transformation for variance

**3. Feature Engineering:**
• Create lag features
• Add moving averages
• Extract time-based features (day of week, month, etc.)

**4. Scaling (for ML models):**
• MinMaxScaler for neural networks
• StandardScaler for regression-based models
• Keep original scale for interpretation

**5. Train/Test Splitting:**
• Always use time-based splits
• Maintain temporal order
• Consider seasonal patterns in split points

**6. External Variables:**
• Align time indices
• Handle missing future values
• Consider lead/lag relationships

**Python Quick Start:**
