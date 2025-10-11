import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    toast.success('Order placed successfully!');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 animate-fade-in">
              <h1 className="text-4xl font-display font-bold">Shopping Cart</h1>
              <Link to="/menu/pizza">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Empty Cart */}
            {cart.length === 0 ? (
              <div className="text-center py-16 animate-scale-in">
                <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
                <Link to="/menu/pizza">
                  <Button className="btn-hero">Browse Menu</Button>
                </Link>
              </div>
            ) : (
              /* Cart Items */
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-muted rounded-lg p-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Total & Checkout Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mt-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-display font-bold">Total:</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      onClick={handleCheckout}
                      className="flex-1 btn-hero"
                      size="lg"
                    >
                      Checkout
                    </Button>
                    <Button
                      onClick={clearCart}
                      variant="outline"
                      size="lg"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;
