import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время');
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Пн-Вс: 9:00 - 21:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@soundpro.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Звуковая, 123',
      description: 'Шоурум с демо-зоной',
    },
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', link: '#' },
    { icon: 'Youtube', name: 'YouTube', link: '#' },
    { icon: 'Instagram', name: 'Instagram', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">Контакты</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Мы всегда на связи и рады помочь
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-card rounded-lg p-8 border text-center hover:shadow-xl transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Icon name={method.icon as any} size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-2xl font-bold mb-2">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl font-bold mb-6">Напишите нам</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и наш специалист свяжется с вами для консультации
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Иван Иванов" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-scale">
                  Отправить сообщение
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-secondary rounded-lg p-8 border">
                <h3 className="text-2xl font-bold mb-4">Часы работы</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота - Воскресенье</span>
                    <span className="font-semibold">10:00 - 19:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-8 border">
                <h3 className="text-2xl font-bold mb-4">Мы в соцсетях</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <Icon name={social.icon as any} size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 border">
                <h3 className="text-2xl font-bold mb-4">Посетите наш шоурум</h3>
                <p className="text-muted-foreground mb-4">
                  Приходите к нам в шоурум, чтобы послушать и протестировать микрофоны перед покупкой
                </p>
                <Button variant="outline" className="w-full hover-scale">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-12 text-center animate-fade-in">
            <Icon name="Headphones" size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Нужна консультация?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Наши эксперты помогут подобрать идеальный микрофон под ваши задачи и бюджет
            </p>
            <Button size="lg" variant="secondary" className="hover-scale">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
