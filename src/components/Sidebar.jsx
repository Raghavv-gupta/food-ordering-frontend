import { Link, useLocation } from 'react-router-dom';
import { categories } from '@/data/foodData';
import { Pizza, Beef, Coffee, Cake } from 'lucide-react';

const iconMap = {
  pizza: Pizza,
  burgers: Beef,
  drinks: Coffee,
  desserts: Cake
};

const Sidebar = () => {
  const location = useLocation();
  const currentCategory = location.pathname.split('/').pop();

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-6">
      <h2 className="text-xl font-display font-bold mb-6 text-foreground">Menu</h2>
      <nav className="space-y-2">
        {categories.map((category) => {
          const Icon = iconMap[category.id];
          const isActive = currentCategory === category.id;

          return (
            <Link
              key={category.id}
              to={`/menu/${category.id}`}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{category.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
