import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredProducts = [
    {
      id: 1,
      name: 'Studio Pro X1',
      category: 'premium',
      price: 29990,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
      description: 'Профессиональный конденсаторный микрофон для студии',
    },
    {
      id: 2,
      name: 'Classic Voice',
      category: 'mid',
      price: 8990,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
      description: 'Динамический микрофон для вокала',
    },
    {
      id: 3,
      name: 'Podcast USB',
      category: 'budget',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
      description: 'USB-микрофон для подкастов и стриминга',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,400 Q300,200 600,400 T1200,400" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M0,420 Q300,220 600,420 T1200,420" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M0,380 Q300,180 600,380 T1200,380" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-6 animate-fade-in">
            Звук в деталях
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Микрофоны для профессионалов и энтузиастов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/catalog">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                Каталог микрофонов
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/compare">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                Сравнить модели
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Популярные модели</h2>
            <p className="text-lg text-muted-foreground">Выбор профессионалов</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className="hover-scale"
            >
              Все
            </Button>
            <Button
              variant={activeCategory === 'premium' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('premium')}
              className="hover-scale"
            >
              Premium
            </Button>
            <Button
              variant={activeCategory === 'mid' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('mid')}
              className="hover-scale"
            >
              Средний класс
            </Button>
            <Button
              variant={activeCategory === 'budget' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('budget')}
              className="hover-scale"
            >
              Бюджетные
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts
              .filter(p => activeCategory === 'all' || p.category === activeCategory)
              .map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-secondary relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold">{product.price.toLocaleString()} ₽</span>
                      <Button className="hover-scale">
                        <Icon name="ShoppingCart" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <Icon name="Award" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия на всё оборудование</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <Icon name="Truck" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим по всей России за 1-3 дня</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <Icon name="Headphones" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Консультации по выбору и настройке</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;