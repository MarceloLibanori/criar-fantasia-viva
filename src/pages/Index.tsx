
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/components/CartContext";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("Index component rendering");

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa Loja
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra produtos incríveis com entrega rápida. Faça seu pedido via WhatsApp!
            </p>
          </div>
          <ProductGrid />
        </main>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
