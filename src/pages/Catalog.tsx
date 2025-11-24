import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Studio Pro X1',
      type: 'condenser',
      price: 29990,
      rating: 4.9,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      specs: ['XLR', '20Hz-20kHz', '130dB SPL'],
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Classic Voice',
      type: 'dynamic',
      price: 8990,
      rating: 4.7,
      reviews: 243,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      specs: ['XLR', '50Hz-15kHz', '144dB SPL'],
      badge: null,
    },
    {
      id: 3,
      name: 'Podcast USB',
      type: 'usb',
      price: 4990,
      rating: 4.5,
      reviews: 512,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      specs: ['USB-C', '20Hz-20kHz', 'Cardioid'],
      badge: 'Popular',
    },
    {
      id: 4,
      name: 'Broadcast Master',
      type: 'condenser',
      price: 45990,
      rating: 5.0,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      specs: ['XLR', '10Hz-22kHz', '140dB SPL'],
      badge: 'Premium',
    },
    {
      id: 5,
      name: 'Stream Lite',
      type: 'usb',
      price: 2990,
      rating: 4.3,
      reviews: 678,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      specs: ['USB-A', '100Hz-16kHz', 'Omnidirectional'],
      badge: 'Budget',
    },
    {
      id: 6,
      name: 'Stage Dynamic Pro',
      type: 'dynamic',
      price: 12990,
      rating: 4.8,
      reviews: 334,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      specs: ['XLR', '40Hz-16kHz', '150dB SPL'],
      badge: null,
    },
  ];

  const types = [
    { value: 'all', label: 'Все типы' },
    { value: 'condenser', label: 'Конденсаторные' },
    { value: 'dynamic', label: 'Динамические' },
    { value: 'usb', label: 'USB' },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (selectedType === 'all' || p.type === selectedType)
  );

  const addToCart = (productId: number, productName: string) => {
    setCartItems([...cartItems, productId]);
    toast.success(`${productName} добавлен в корзину`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartItems.length} />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Каталог микрофонов</h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {filteredProducts.length} моделей в наличии
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="sticky top-32 space-y-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Filter" size={20} />
                    Фильтры
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-3 block">Тип микрофона</label>
                      <div className="space-y-2">
                        {types.map((type) => (
                          <Button
                            key={type.value}
                            variant={selectedType === type.value ? 'default' : 'outline'}
                            className="w-full justify-start hover-scale"
                            onClick={() => setSelectedType(type.value)}
                          >
                            {type.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">
                        Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                      </label>
                      <Slider
                        min={0}
                        max={50000}
                        step={1000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-4"
                      />
                    </div>
                  </div>
                </div>

                <Link to="/compare">
                  <Button variant="outline" className="w-full hover-scale">
                    <Icon name="ArrowLeftRight" size={20} className="mr-2" />
                    Сравнить модели
                  </Button>
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-lg overflow-hidden border hover:shadow-2xl transition-all duration-500 animate-fade-in hover-scale"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative aspect-square bg-secondary overflow-hidden">
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 z-10">
                          {product.badge}
                        </Badge>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.specs.map((spec, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          {product.price.toLocaleString()} ₽
                        </span>
                        <Button
                          onClick={() => addToCart(product.id, product.name)}
                          className="hover-scale"
                        >
                          <Icon name="ShoppingCart" size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground mb-6">Попробуйте изменить фильтры</p>
                  <Button onClick={() => { setPriceRange([0, 50000]); setSelectedType('all'); }}>
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
