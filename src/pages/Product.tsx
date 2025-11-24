import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const allProducts = [
    {
      id: 1,
      name: 'Studio Pro X1',
      type: 'Конденсаторный',
      pattern: 'Кардиоида',
      price: 29990,
      rating: 4.9,
      reviews: 156,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      ],
      badge: 'Bestseller',
      description: 'Профессиональный студийный конденсаторный микрофон с исключительным качеством звука. Идеален для записи вокала, акустических инструментов и подкастов.',
      specs: {
        connection: 'XLR',
        frequency: '20Hz - 20kHz',
        spl: '130dB',
        sensitivity: '-34dB',
        impedance: '200 Ом',
        power: '48V фантомное питание',
        weight: '450г',
        dimensions: '165 x 52 мм',
      },
      features: [
        'Большая диафрагма 34мм',
        'Низкий уровень собственных шумов',
        'Широкий частотный диапазон',
        'Встроенный поп-фильтр',
        'Прочный металлический корпус',
        'Амортизационное крепление в комплекте',
      ],
      includes: [
        'Микрофон Studio Pro X1',
        'Амортизационное крепление',
        'XLR кабель 3м',
        'Защитный чехол',
        'Инструкция',
      ],
    },
    {
      id: 2,
      name: 'Classic Voice',
      type: 'Динамический',
      pattern: 'Суперкардиоида',
      price: 8990,
      rating: 4.7,
      reviews: 243,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      ],
      badge: null,
      description: 'Классический динамический микрофон для вокала и живых выступлений. Надежная конструкция и отличная обратная связь.',
      specs: {
        connection: 'XLR',
        frequency: '50Hz - 15kHz',
        spl: '144dB',
        sensitivity: '-54dB',
        impedance: '300 Ом',
        power: 'Не требуется',
        weight: '320г',
        dimensions: '180 x 50 мм',
      },
      features: [
        'Динамическая капсюль',
        'Высокая устойчивость к обратной связи',
        'Не требует питания',
        'Прочный стальной корпус',
        'Встроенный ветрозащитный фильтр',
        'Проверено временем',
      ],
      includes: [
        'Микрофон Classic Voice',
        'Держатель для стойки',
        'Чехол',
        'Документация',
      ],
    },
    {
      id: 3,
      name: 'Podcast USB',
      type: 'USB',
      pattern: 'Кардиоида',
      price: 4990,
      rating: 4.5,
      reviews: 512,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      ],
      badge: 'Popular',
      description: 'USB-микрофон plug-and-play для подкастов, стриминга и удаленной работы. Встроенная звуковая карта и простая настройка.',
      specs: {
        connection: 'USB-C',
        frequency: '20Hz - 20kHz',
        spl: '110dB',
        sensitivity: '-38dB',
        impedance: '16 Ом',
        power: 'USB питание',
        weight: '280г',
        dimensions: '155 x 48 мм',
      },
      features: [
        'Plug & Play - без драйверов',
        'Встроенный АЦП 24бит/96кГц',
        'Регулятор усиления на корпусе',
        'Выход для наушников 3.5мм',
        'Светодиодный индикатор',
        'Совместимость: Windows, Mac, Linux',
      ],
      includes: [
        'Микрофон Podcast USB',
        'USB-C кабель 2м',
        'Настольная стойка',
        'Поп-фильтр',
        'Руководство',
      ],
    },
    {
      id: 4,
      name: 'Broadcast Master',
      type: 'Конденсаторный',
      pattern: 'Мультипаттерн',
      price: 45990,
      rating: 5.0,
      reviews: 89,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      ],
      badge: 'Premium',
      description: 'Топовый студийный микрофон с переключаемой диаграммой направленности. Для профессиональных студий звукозаписи.',
      specs: {
        connection: 'XLR',
        frequency: '10Hz - 22kHz',
        spl: '140dB',
        sensitivity: '-32dB',
        impedance: '150 Ом',
        power: '48V фантомное питание',
        weight: '580г',
        dimensions: '210 x 55 мм',
      },
      features: [
        '3 диаграммы направленности',
        'Позолоченная диафрагма',
        'Расширенный частотный диапазон',
        'Ламповая схемотехника',
        'Переключатель пред-ослабления',
        'Премиум комплектация',
      ],
      includes: [
        'Микрофон Broadcast Master',
        'Амортизатор Shock Mount',
        'Поп-фильтр',
        'Кабель XLR 5м',
        'Деревянный кейс',
        'Сертификат',
      ],
    },
    {
      id: 5,
      name: 'Stream Lite',
      type: 'USB',
      pattern: 'Круговая',
      price: 2990,
      rating: 4.3,
      reviews: 678,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      ],
      badge: 'Budget',
      description: 'Бюджетный USB-микрофон для начинающих стримеров и блогеров. Простота и доступность.',
      specs: {
        connection: 'USB-A',
        frequency: '100Hz - 16kHz',
        spl: '100dB',
        sensitivity: '-42dB',
        impedance: '32 Ом',
        power: 'USB питание',
        weight: '180г',
        dimensions: '120 x 40 мм',
      },
      features: [
        'Компактный размер',
        'Простое подключение USB',
        'Круговая диаграмма',
        'Кнопка mute на корпусе',
        'Базовая стойка в комплекте',
        'Отличная цена',
      ],
      includes: [
        'Микрофон Stream Lite',
        'USB кабель 1.5м',
        'Мини-стойка',
        'Инструкция',
      ],
    },
    {
      id: 6,
      name: 'Stage Dynamic Pro',
      type: 'Динамический',
      pattern: 'Гиперкардиоида',
      price: 12990,
      rating: 4.8,
      reviews: 334,
      inStock: true,
      images: [
        'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      ],
      badge: null,
      description: 'Профессиональный динамический микрофон для живых выступлений. Максимальная устойчивость к обратной связи.',
      specs: {
        connection: 'XLR',
        frequency: '40Hz - 16kHz',
        spl: '150dB',
        sensitivity: '-51dB',
        impedance: '350 Ом',
        power: 'Не требуется',
        weight: '340г',
        dimensions: '175 x 52 мм',
      },
      features: [
        'Гиперкардиоидная диаграмма',
        'Максимальная изоляция',
        'Усиленный корпус',
        'Высокий SPL',
        'Встроенный амортизатор',
        'Для концертов',
      ],
      includes: [
        'Микрофон Stage Dynamic Pro',
        'Клипса для стойки',
        'Транспортный чехол',
        'Гарантия 3 года',
      ],
    },
  ];

  const product = allProducts.find((p) => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 px-4 text-center">
          <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
          <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
          <Link to="/catalog">
            <Button size="lg">Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    toast.success(`${product.name} (${quantity} шт.) добавлен в корзину`);
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.type === product.type)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/catalog" className="hover:text-primary transition-colors">
              Каталог
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <div className="sticky top-32">
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden mb-4 group">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover-scale ${
                          selectedImage === idx
                            ? 'border-primary'
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                {product.badge && <Badge className="text-sm">{product.badge}</Badge>}
                {product.inStock ? (
                  <Badge variant="secondary" className="text-sm">
                    <Icon name="Check" size={14} className="mr-1" />В наличии
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-sm">
                    Нет в наличии
                  </Badge>
                )}
              </div>

              <h1 className="text-5xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? 'text-accent fill-accent'
                            : 'text-muted'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {product.rating} ({product.reviews} отзывов)
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-bold">
                    {product.price.toLocaleString()} ₽
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={18} />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={18} />
                    </Button>
                  </div>

                  <Button
                    size="lg"
                    className="flex-1 hover-scale"
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    <span>Доставка по Москве — 1-2 дня</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RotateCcw" size={16} />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    <span>Официальная гарантия 2 года</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link to="/compare" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full hover-scale">
                    <Icon name="ArrowLeftRight" size={20} className="mr-2" />
                    Сравнить
                  </Button>
                </Link>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Heart" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Share2" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="specs" className="mb-16 animate-fade-in">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="features">Особенности</TabsTrigger>
              <TabsTrigger value="includes">Комплектация</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="bg-card rounded-2xl border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground capitalize">
                      {key === 'connection' && 'Подключение'}
                      {key === 'frequency' && 'Частотный диапазон'}
                      {key === 'spl' && 'Макс. SPL'}
                      {key === 'sensitivity' && 'Чувствительность'}
                      {key === 'impedance' && 'Импеданс'}
                      {key === 'power' && 'Питание'}
                      {key === 'weight' && 'Вес'}
                      {key === 'dimensions' && 'Размеры'}
                    </span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="bg-card rounded-2xl border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="includes" className="bg-card rounded-2xl border p-8">
              <ul className="space-y-3">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg">
                    <Icon name="Package" size={20} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          {relatedProducts.length > 0 && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">Похожие товары</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct, index) => (
                  <div
                    key={relProduct.id}
                    onClick={() => navigate(`/product/${relProduct.id}`)}
                    className="group bg-card rounded-lg overflow-hidden border hover:shadow-2xl transition-all cursor-pointer hover-scale animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square bg-secondary overflow-hidden">
                      <img
                        src={relProduct.images[0]}
                        alt={relProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">
                        {relProduct.name}
                      </h3>
                      <p className="text-2xl font-bold">
                        {relProduct.price.toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
