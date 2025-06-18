
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/components/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy",
    price: 899.99,
    image: "/placeholder.svg",
    description: "Smartphone moderno com câmera de alta qualidade e bateria de longa duração.",
    category: "eletronicos"
  },
  {
    id: 2,
    name: "Notebook Pro",
    price: 1299.99,
    image: "/placeholder.svg",
    description: "Notebook profissional para trabalho e estudos com processador rápido.",
    category: "eletronicos"
  },
  {
    id: 3,
    name: "Fone Bluetooth",
    price: 199.99,
    image: "/placeholder.svg",
    description: "Fone de ouvido sem fio com cancelamento de ruído e som cristalino.",
    category: "eletronicos"
  },
  {
    id: 4,
    name: "Camiseta Premium",
    price: 79.99,
    image: "/placeholder.svg",
    description: "Camiseta de algodão premium com design moderno e confortável.",
    category: "roupas"
  },
  {
    id: 5,
    name: "Calça Jeans",
    price: 149.99,
    image: "/placeholder.svg",
    description: "Calça jeans de alta qualidade com modelagem moderna.",
    category: "roupas"
  },
  {
    id: 6,
    name: "Tênis Esportivo",
    price: 299.99,
    image: "/placeholder.svg",
    description: "Tênis confortável para atividades esportivas e uso casual.",
    category: "roupas"
  },
  {
    id: 7,
    name: "Livro Programação",
    price: 89.99,
    image: "/placeholder.svg",
    description: "Guia completo para aprender programação do zero.",
    category: "livros"
  },
  {
    id: 8,
    name: "Romance Clássico",
    price: 45.99,
    image: "/placeholder.svg",
    description: "Romance clássico da literatura mundial.",
    category: "livros"
  }
];

const categories = [
  { id: "todos", name: "Todos os Produtos" },
  { id: "eletronicos", name: "Eletrônicos" },
  { id: "roupas", name: "Roupas & Acessórios" },
  { id: "livros", name: "Livros" }
];

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-6">
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4 mx-auto">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="text-sm"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
