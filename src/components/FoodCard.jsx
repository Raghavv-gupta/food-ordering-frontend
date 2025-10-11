import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const FoodCard = ({ id, name, description, price, rating, image }) => {
  const { addToCart, likes, toggleLike } = useCart();
  const isLiked = likes.includes(id);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="card-food group animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={() => toggleLike(id)}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm heart-animate",
            isLiked && "bg-secondary"
          )}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isLiked ? "fill-white text-white" : "text-secondary"
            )}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-display font-semibold text-foreground">{name}</h3>
          <div className="flex items-center space-x-1 bg-accent/20 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-foreground">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ${price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
