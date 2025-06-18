
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/components/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy",
    price: 899.99,
    image: "/placeholder.svg",
    description: "Smartphone moderno com câmera de alta qualidade e bateria de longa duração."
  },
  {
    id: 2,
    name: "Notebook Pro",
    price: 1299.99,
    image: "/placeholder.svg",
    description: "Notebook profissional para trabalho e estudos com processador rápido."
  },
  {
    id: 3,
    name: "Fone Bluetooth",
    price: 199.99,
    image: "/placeholder.svg",
    description: "Fone de ouvido sem fio com cancelamento de ruído e som cristalino."
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 349.99,
    image: "/placeholder.svg",
    description: "Relógio inteligente para monitorar atividades e receber notificações."
  },
  {
    id: 5,
    name: "Tablet Touch",
    price: 599.99,
    image: "/placeholder.svg",
    description: "Tablet com tela sensível ao toque para entretenimento e produtividade."
  },
  {
    id: 6,
    name: "Câmera Digital",
    price: 799.99,
    image: "/placeholder.svg",
    description: "Câmera digital profissional para capturar momentos especiais."
  }
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
