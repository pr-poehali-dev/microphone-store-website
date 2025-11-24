import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Studio Pro X1',
      price: 29990,
      quantity: 1,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
    },
    {
      id: 2,
      name: 'Podcast USB',
      price: 4990,
      quantity: 2,
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Товар удален из корзины');
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SOUND10') {
      toast.success('Промокод применен! Скидка 10%');
    } else {
      toast.error('Неверный промокод');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoCode.toUpperCase() === 'SOUND10' ? subtotal * 0.1 : 0;
  const delivery = subtotal > 5000 ? 0 : 500;
  const total = subtotal - discount + delivery;

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartItems.length} />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Корзина</h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {cartItems.length} {cartItems.length === 1 ? 'товар' : 'товара'}
          </p>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <Icon name="ShoppingCart" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h2 className="text-3xl font-bold mb-4">Корзина пуста</h2>
              <p className="text-muted-foreground mb-8">Добавьте товары из каталога</p>
              <Link to="/catalog">
                <Button size="lg" className="hover-scale">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  В каталог
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 animate-fade-in">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-lg border p-6 flex gap-6 hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-32 h-32 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold text-accent">
                          {item.price.toLocaleString()} ₽
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="text-lg font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="Trash2" size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-card rounded-lg border p-6 sticky top-32">
                  <h2 className="text-2xl font-bold mb-6">Итого</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары</span>
                      <span className="font-semibold">{subtotal.toLocaleString()} ₽</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка</span>
                        <span className="font-semibold">-{discount.toLocaleString()} ₽</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className="font-semibold">
                        {delivery === 0 ? 'Бесплатно' : `${delivery} ₽`}
                      </span>
                    </div>

                    {subtotal < 5000 && delivery > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Бесплатная доставка от 5000 ₽
                      </p>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-between mb-6">
                    <span className="text-xl font-bold">Всего</span>
                    <span className="text-3xl font-bold text-accent">
                      {total.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button onClick={applyPromo} variant="outline">
                        <Icon name="Tag" size={18} />
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full hover-scale"
                    onClick={() => toast.success('Заказ оформлен! Мы свяжемся с вами')}
                  >
                    Оформить заказ
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Shield" size={16} />
                      <span>Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Truck" size={16} />
                      <span>Доставка 1-3 дня</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="RotateCcw" size={16} />
                      <span>Возврат 14 дней</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
