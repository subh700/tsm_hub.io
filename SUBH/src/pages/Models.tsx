import { useEffect, useState } from 'react';
import ModelCard from '../components/ModelCard';

type Model = {
  id: string;
  title: string;
  description: string;
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  image?: string;
};

const models: Model[] = [
  {
    id: 'lstm',
    title: 'LSTM',
    description: 'Long Short-Term Memory networks for sequential data prediction',
    category: 'Neural Network',
    complexity: 'Intermediate',
  },
  {
    id: 'prophet',
    title: 'Prophet',
    description: 'Facebook Prophet - time series forecasting tool for business applications',
    category: 'Statistical',
    complexity: 'Beginner',
  },
  {
    id: 'arima',
    title: 'ARIMA',
    description: 'AutoRegressive Integrated Moving Average for time series analysis',
    category: 'Statistical',
    complexity: 'Intermediate',
  },
  {
    id: 'transformer',
    title: 'Transformer',
    description: 'Attention-based architecture for sequence modeling',
    category: 'Neural Network',
    complexity: 'Advanced',
  },
  // Add more models here
];

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredModels, setFilteredModels] = useState<Model[]>(models);

  const categories = ['all', ...new Set(models.map(model => model.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredModels(models);
    } else {
      setFilteredModels(models.filter(model => model.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Time Series Models</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn ${
              selectedCategory === category ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map(model => (
          <ModelCard key={model.id} {...model} />
        ))}
      </div>
    </div>
  );
};

export default Models;
