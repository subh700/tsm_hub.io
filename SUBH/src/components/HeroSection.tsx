interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ title, description, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
          <a
            href={ctaLink}
            className="btn btn-primary text-lg px-8 py-3 shadow-lg shadow-primary-500/20"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
