import { Link } from 'react-router-dom';
import { brand } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt={`${brand.name} logo`} className="h-8 w-auto" />
          <span className="font-display font-semibold text-charcoal">{brand.name}</span>
        </Link>
        <p className="text-gray-500 text-sm">{brand.tagline}</p>
      </div>
    </footer>
  );
}
