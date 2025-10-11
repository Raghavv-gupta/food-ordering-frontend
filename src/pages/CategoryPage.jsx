import React from 'react';
import { useParams } from 'react-router-dom';
import { foodData } from '../data/foodData';
import FoodCard from '../components/FoodCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CategoryPage = () => {
  const { category } = useParams();
  const items = category ? foodData[category] || [] : [];

  const categoryNames = {
    pizza: 'Pizzas',
    burgers: 'Burgers',
    drinks: 'Drinks',
    desserts: 'Desserts',
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8 animate-fade-in">
              {categoryNames[category] || 'Menu'}
            </h1>

            {/* Food Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <FoodCard {...item} />
                </div>
              ))}
            </div>

            {/* No Items Message */}
            {items.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No items found in this category.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
