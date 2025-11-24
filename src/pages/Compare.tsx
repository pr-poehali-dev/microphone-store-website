import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Compare = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Studio Pro X1',
      price: 29990,
      type: 'Конденсаторный',
      connection: 'XLR',
      frequency: '20Hz - 20kHz',
      spl: '130dB',
      pattern: 'Кардиоида',
      weight: '450г',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      pros: ['Широкий частотный диапазон', 'Низкий уровень шума', 'Студийное качество'],
      cons: ['Требует фантомное питание', 'Высокая цена'],
    },
    {
      id: 2,
      name: 'Classic Voice',
      price: 8990,
      type: 'Динамический',
      connection: 'XLR',
      frequency: '50Hz - 15kHz',
      spl: '144dB',
      pattern: 'Суперкардиоида',
      weight: '320г',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      pros: ['Прочная конструкция', 'Не требует питания', 'Отличная цена'],
      cons: ['Узкий частотный диапазон', 'Меньшая чувствительность'],
    },
    {
      id: 3,
      name: 'Podcast USB',
      price: 4990,
      type: 'USB',
      connection: 'USB-C',
      frequency: '20Hz - 20kHz',
      spl: '110dB',
      pattern: 'Кардиоида',
      weight: '280г',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      pros: ['Plug & Play', 'Встроенный АЦП', 'Доступная цена'],
      cons: ['Только цифровой выход', 'Зависит от USB порта'],
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState<number[]>([1, 2]);

  const compareProducts = selectedProducts.map((id) =>
    allProducts.find((p) => p.id === id)
  ).filter(Boolean);

  const handleSelectProduct = (index: number, productId: string) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = parseInt(productId);
    setSelectedProducts(newSelected);
  };

  const addCompareSlot = () => {
    if (selectedProducts.length < 3) {
      const unusedProduct = allProducts.find(p => !selectedProducts.includes(p.id));
      if (unusedProduct) {
        setSelectedProducts([...selectedProducts, unusedProduct.id]);
      }
    }
  };

  const removeCompareSlot = (index: number) => {
    if (selectedProducts.length > 2) {
      setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
    }
  };

  const specs = [
    { key: 'price', label: 'Цена', format: (val: number) => `${val.toLocaleString()} ₽` },
    { key: 'type', label: 'Тип', format: (val: string) => val },
    { key: 'connection', label: 'Подключение', format: (val: string) => val },
    { key: 'frequency', label: 'Частотный диапазон', format: (val: string) => val },
    { key: 'spl', label: 'Макс. SPL', format: (val: string) => val },
    { key: 'pattern', label: 'Диаграмма', format: (val: string) => val },
    { key: 'weight', label: 'Вес', format: (val: string) => val },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Сравнение моделей</h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Выберите до 3 микрофонов для детального сравнения
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {compareProducts.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Select
                  value={product?.id.toString()}
                  onValueChange={(value) => handleSelectProduct(index, value)}
                >
                  <SelectTrigger className="mb-4">
                    <SelectValue placeholder="Выберите микрофон" />
                  </SelectTrigger>
                  <SelectContent>
                    {allProducts.map((p) => (
                      <SelectItem key={p.id} value={p.id.toString()}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {product && (
                  <div className="bg-card rounded-lg border overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square bg-secondary">
                      {selectedProducts.length > 2 && (
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeCompareSlot(index)}
                        >
                          <Icon name="X" size={18} />
                        </Button>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-3xl font-bold text-accent mb-4">
                        {product.price.toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {selectedProducts.length < 3 && (
              <button
                onClick={addCompareSlot}
                className="border-2 border-dashed border-muted rounded-lg p-12 flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-secondary/50 transition-all group animate-fade-in"
              >
                <Icon name="Plus" size={48} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                  Добавить для сравнения
                </span>
              </button>
            )}
          </div>

          <div className="bg-card rounded-lg border overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-secondary">
                    <th className="p-4 text-left font-semibold">Характеристика</th>
                    {compareProducts.map((product, index) => (
                      <th key={index} className="p-4 text-left font-semibold min-w-[200px]">
                        {product?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, specIndex) => (
                    <tr key={spec.key} className="border-b hover:bg-secondary/50 transition-colors">
                      <td className="p-4 font-medium">{spec.label}</td>
                      {compareProducts.map((product, prodIndex) => (
                        <td key={prodIndex} className="p-4">
                          {product && spec.format((product as any)[spec.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  <tr className="border-b hover:bg-secondary/50 transition-colors">
                    <td className="p-4 font-medium">Преимущества</td>
                    {compareProducts.map((product, index) => (
                      <td key={index} className="p-4">
                        <ul className="space-y-2">
                          {product?.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Icon name="Plus" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-secondary/50 transition-colors">
                    <td className="p-4 font-medium">Недостатки</td>
                    {compareProducts.map((product, index) => (
                      <td key={index} className="p-4">
                        <ul className="space-y-2">
                          {product?.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Icon name="Minus" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {compareProducts.map((product, index) => (
              product && (
                <Button key={index} size="lg" className="hover-scale">
                  Купить {product.name}
                  <Icon name="ShoppingCart" size={18} className="ml-2" />
                </Button>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
