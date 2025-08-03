interface ModelCardProps {
  title: string;
  description: string;
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  image?: string;
}

const ModelCard = ({ title, description, category, complexity, image }: ModelCardProps) => {
  const complexityColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="relative h-48 rounded-t-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {category}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${complexityColors[complexity]}`}>
            {complexity}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <button className="btn btn-primary w-full">Learn More</button>
      </div>
    </div>
  );
};

export default ModelCard;
