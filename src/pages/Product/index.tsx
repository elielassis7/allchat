import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Notebook Pro X",
    description: "Notebook de alta performance para profissionais exigentes.",
    price: 7999.99,
    imageUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Mouse Gamer Ultra",
    description: "Mouse com alta precisão e iluminação RGB.",
    price: 299.9,
    imageUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Monitor 4K Vision",
    description: "Monitor 4K com cores vibrantes e alta taxa de atualização.",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   async function fetchProducts() {
    //     try {
    //       const response = await fetch("https://api.exemplo.com/produtos");
    //       const data = await response.json();
    //       setProducts(data);
    //     } catch (error) {
    //       console.error("Erro ao buscar produtos:", error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    //   fetchProducts();
    setProducts(mockProducts);
    setLoading(false);
  }, []);





  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <h1 className="text-3xl text-white">Carregando produtos...</h1>
      </div>
    );
  }

  return (
    <div className="py-20 flex flex-col items-center">
      <h1 className="text-3xl text-white mb-8">Produtos da Empresa de Tecnologia</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
            )}
            <h2 className="text-xl text-white font-bold mb-2">{product.name}</h2>
            <p className="text-gray-300 mb-2">{product.description}</p>
            <span className="text-green-400 font-semibold">R$ {product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}