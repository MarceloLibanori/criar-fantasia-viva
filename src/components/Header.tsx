
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const { getCartItemsCount } = useCart();
  const itemsCount = getCartItemsCount();

  console.log("Header component rendering, items count:", itemsCount);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loja Online
          </h1>
        </div>
        
        <Button 
          onClick={onCartClick}
          variant="outline" 
          className="relative hover:bg-blue-50"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Carrinho
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {itemsCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};
