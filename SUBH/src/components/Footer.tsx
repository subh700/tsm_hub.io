const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">SUBH</h3>
            <p className="text-sm">
              Your comprehensive resource for time series modeling and forecasting.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/concepts" className="hover:text-white transition-colors">
                  Concepts
                </a>
              </li>
              <li>
                <a href="/models" className="hover:text-white transition-colors">
                  Models
                </a>
              </li>
              <li>
                <a href="/comparison" className="hover:text-white transition-colors">
                  Comparison
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/documentation" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/examples" className="hover:text-white transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/subh700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SUBH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
