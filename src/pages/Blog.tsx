import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Как выбрать микрофон для домашней студии',
      excerpt: 'Полное руководство по выбору микрофона для записи музыки и вокала в домашних условиях',
      category: 'Гайды',
      date: '15 марта 2024',
      readTime: '8 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
    },
    {
      id: 2,
      title: 'Конденсаторный vs динамический: что лучше?',
      excerpt: 'Разбираем принципиальные отличия двух основных типов микрофонов и когда какой использовать',
      category: 'Обзоры',
      date: '12 марта 2024',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
    },
    {
      id: 3,
      title: 'Настройка микрофона для подкаста',
      excerpt: 'Пошаговая инструкция по настройке USB-микрофона для качественной записи подкастов',
      category: 'Туториалы',
      date: '8 марта 2024',
      readTime: '10 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
    },
    {
      id: 4,
      title: 'Акустическая обработка комнаты',
      excerpt: 'Как правильно обустроить помещение для качественной записи звука',
      category: 'Советы',
      date: '5 марта 2024',
      readTime: '12 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/958c1570-f788-4d26-9933-01c7852f0b30.jpg',
    },
    {
      id: 5,
      title: 'Лучшие микрофоны для стриминга 2024',
      excerpt: 'Топ-10 микрофонов для стримеров на любой бюджет',
      category: 'Подборки',
      date: '1 марта 2024',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/13ff3748-2ee8-437e-beec-3c6804dd492c.jpg',
    },
    {
      id: 6,
      title: 'Уход за профессиональным оборудованием',
      excerpt: 'Как правильно хранить и обслуживать дорогие студийные микрофоны',
      category: 'Советы',
      date: '28 февраля 2024',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/f5b51095-7c93-4821-a22d-7ed2c3d67a5a/files/7400e34f-0880-4f76-ae01-5d5ad0a63348.jpg',
    },
  ];

  const categories = ['Все', 'Гайды', 'Обзоры', 'Туториалы', 'Советы', 'Подборки'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">Блог о звуке</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Гайды, обзоры и советы по выбору микрофонов
            </p>
          </div>

          <div className="flex gap-3 mb-12 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === 'Все' ? 'default' : 'outline'}
                className="hover-scale"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group bg-card rounded-lg overflow-hidden border hover:shadow-2xl transition-all duration-500 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 left-4">
                    {article.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold story-link">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center bg-secondary rounded-2xl p-12 animate-fade-in">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Получайте новые статьи о звуке, обзоры оборудования и эксклюзивные скидки
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="hover-scale">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
