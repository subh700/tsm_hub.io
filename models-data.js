const models = [
  {
    name: "ARIMA",
    icon: "📈",
    description: "AutoRegressive Integrated Moving Average: A classic statistical model for time series forecasting.",
    link: "ARIMA.html"
  },
  {
    name: "LSTM",
    icon: "🧠",
    description: "Long Short-Term Memory: A deep learning model for sequential data and time series.",
    link: "LSTM.html"
  },
  {
    name: "Prophet",
    icon: "🔮",
    description: "Facebook Prophet: Robust forecasting for time series with trends and seasonality.",
    link: "Prophet.html"
  },
  {
    name: "ETS",
    icon: "📉",
    description: "Exponential Smoothing: Captures level, trend, and seasonality in time series.",
    link: "ETS.html"
  },
  {
    name: "SARIMAX",
    icon: "📊",
    description: "Seasonal ARIMA with eXogenous variables: Handles seasonality and external regressors.",
    link: "SARIMAX.html"
  },
  {
    name: "Holt-Winters",
    icon: "❄️",
    description: "Triple Exponential Smoothing for trend and seasonality.",
    link: "holt_winters.html"
  },
  {
    name: "Elastic Net",
    icon: "🪢",
    description: "Elastic Net Regression: Combines L1 and L2 regularization for regression tasks.",
    link: "elastic_net.html"
  },
  {
    name: "Fedformer",
    icon: "🛰️",
    description: "Federated Transformer: Advanced transformer-based model for time series.",
    link: "fedformer.html"
  },
  {
    name: "Gradient Boosting Regressor",
    icon: "🌲",
    description: "Ensemble learning method using boosting of weak learners for regression.",
    link: "gradient_boosting_regressor.html"
  },
  {
    name: "GRU",
    icon: "🔁",
    description: "Gated Recurrent Unit: Efficient recurrent neural network for time series.",
    link: "gru.html"
  },
  {
    name: "Informer",
    icon: "📡",
    description: "Informer: Efficient transformer for long sequence time-series forecasting.",
    link: "informer.html"
  },
  {
    name: "Kalman Filter",
    icon: "🛰️",
    description: "Kalman Filter: Recursive filter for linear dynamic systems.",
    link: "kalman_filter.html"
  },
  {
    name: "LightGBM",
    icon: "💡",
    description: "Light Gradient Boosting Machine: Fast, distributed, high-performance gradient boosting.",
    link: "lightgbm.html"
  },
  {
    name: "MA",
    icon: "➗",
    description: "Moving Average: Simple smoothing technique for time series.",
    link: "MA.html"
  },
  {
    name: "N-BEATS",
    icon: "🎵",
    description: "Neural Basis Expansion Analysis for interpretable time series forecasting.",
    link: "n_beats.html"
  },
  {
    name: "Neural Prophet",
    icon: "🤖",
    description: "Neural Prophet: Neural network extension of Facebook Prophet.",
    link: "neural_prophet.html"
  },
  {
    name: "PatchTST",
    icon: "🩹",
    description: "PatchTST: Transformer-based model for time series forecasting.",
    link: "patchtst.html"
  },
  {
    name: "Prophet LSTM",
    icon: "🔮🧠",
    description: "Hybrid model combining Prophet and LSTM for improved forecasting.",
    link: "prophet_lstm.html"
  },
  {
    name: "Prophet XGBoost",
    icon: "🔮⚡",
    description: "Hybrid model combining Prophet and XGBoost for robust forecasting.",
    link: "prophet_xgboost.html"
  },
  {
    name: "Random Forest",
    icon: "🌳",
    description: "Random Forest: Ensemble of decision trees for regression and classification.",
    link: "random_forest.html"
  },
  {
    name: "SVR",
    icon: "📏",
    description: "Support Vector Regression: Regression technique using support vector machines.",
    link: "svr.html"
  },
  {
    name: "TCN",
    icon: "🌊",
    description: "Temporal Convolutional Network: Convolutional approach for sequence modeling.",
    link: "tcn.html"
  },
  {
    name: "TFT",
    icon: "⏳",
    description: "Temporal Fusion Transformer: Attention-based model for interpretable time series.",
    link: "tft.html"
  },
  {
    name: "Transformer",
    icon: "🔀",
    description: "Transformer: Attention-based model for sequence-to-sequence tasks.",
    link: "transformer.html"
  },
  {
    name: "VAR",
    icon: "🔗",
    description: "Vector AutoRegression: Multivariate time series forecasting model.",
    link: "var.html"
  },
  {
    name: "Wavenet",
    icon: "🌊",
    description: "Wavenet: Deep generative model for raw audio and time series.",
    link: "wavenet.html"
  },
  {
    name: "XGBoost",
    icon: "⚡",
    description: "Extreme Gradient Boosting: Scalable, accurate machine learning algorithm.",
    link: "xgboost.html"
  },
  {
    name: "DeepAR",
    icon: "🌐",
    description: "DeepAR: Probabilistic forecasting with autoregressive recurrent networks.",
    link: "deepar.html"
  },
  {
    name: "DSSM",
    icon: "🔗",
    description: "Deep Structured Semantic Model: Deep learning for semantic matching.",
    link: "dssm.html"
  },
  {
    name: "Autoformer",
    icon: "🚗",
    description: "Autoformer: Decomposition architecture for long-term time series forecasting.",
    link: "autoformer.html"
  },
  {
    name: "ARIMA-GARCH",
    icon: "📈📉",
    description: "Hybrid ARIMA-GARCH: Combines ARIMA and GARCH for volatility modeling.",
    link: "arima_garch.html"
  },
  {
    name: "ARIMA-LSTM",
    icon: "📈🧠",
    description: "Hybrid ARIMA-LSTM: Combines ARIMA and LSTM for improved forecasting.",
    link: "arima_lstm.html"
  },
  {
    name: "ARIMA-Transformer",
    icon: "📈🔀",
    description: "Hybrid ARIMA-Transformer: Combines ARIMA and Transformer for advanced forecasting.",
    link: "arima_transformer.html"
  },
  {
    name: "BiGRU",
    icon: "🔁🔁",
    description: "Bidirectional GRU: Processes sequence data in both directions for better context.",
    link: "biGRU.html"
  },
  {
    name: "BiLSTM",
    icon: "🧠🧠",
    description: "Bidirectional LSTM: Processes sequence data in both directions for better context.",
    link: "biLSTM.html"
  },
  {
    name: "NeuralProphet",
    icon: "🤖🔮",
    description: "NeuralProphet: Neural network extension of Prophet for time series.",
    link: "neural_prophet.html"
  },
  {
    name: "PatchTST",
    icon: "🩹",
    description: "PatchTST: Transformer-based model for time series forecasting.",
    link: "patchtst.html"
  },
  {
    name: "N-BEATS",
    icon: "🎵",
    description: "N-BEATS: Neural basis expansion analysis for interpretable time series forecasting.",
    link: "n_beats.html"
  }
];
