import HeroSection from '../components/HeroSection';
import ModelCard from '../components/ModelCard';

const models = [
  {
    title: 'LSTM',
    description: 'Long Short-Term Memory networks for sequential data prediction',
    category: 'Neural Network',
    complexity: 'Intermediate',
  },
  {
    title: 'Prophet',
    description: 'Facebook's time series forecasting tool for business applications',
    category: 'Statistical',
    complexity: 'Beginner',
  },
  {
    title: 'ARIMA',
    description: 'AutoRegressive Integrated Moving Average for time series analysis',
    category: 'Statistical',
    complexity: 'Intermediate',
  },
  {
    title: 'Transformer',
    description: 'Attention-based architecture for sequence modeling',
    category: 'Neural Network',
    complexity: 'Advanced',
  },
] as const;

const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection
        title="Modern Time Series Analysis Made Simple"
        description="Explore cutting-edge time series models with interactive examples and comprehensive documentation. From basic statistical methods to advanced deep learning approaches."
        ctaText="Explore Models"
        ctaLink="/models"
      />

      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <ModelCard key={model.title} {...model} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose SUBH?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
              We provide comprehensive resources and tools for time series analysis,
              making complex models accessible to everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Fast Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick and efficient implementation with clear examples
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Comprehensive Guide</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed documentation with practical use cases
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Performance Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed model comparison and benchmarks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
