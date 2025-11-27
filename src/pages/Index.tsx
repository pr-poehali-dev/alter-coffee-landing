import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за заказ!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-accent rounded-full"></div>
        </div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-handwritten text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Alter Coffee
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              натуральная альтернатива кофе без нервозности и перегрузки
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Безкофеиновый напиток на основе цикория, какао и трав, который сохраняет любимый ритуал утреннего кофе, но бережно относится к вашей нервной системе. Наслаждайтесь вкусом без побочных эффектов.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Leaf" size={16} className="mr-2" />
                Веган
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="ShieldCheck" size={16} className="mr-2" />
                Без глютена
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Натуральный состав
              </Badge>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              onClick={scrollToOrder}
            >
              Попробовать Alter Coffee
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          
          <div className="flex justify-center animate-fade-in delay-200">
            <img 
              src="https://cdn.poehali.dev/projects/f1228b27-656d-450d-8814-643506727e46/files/cd224d12-c4b2-4587-8654-bfa2c7bc7f7d.jpg"
              alt="Alter Coffee Label"
              className="max-w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-12">
            В чём суть Alter Coffee?
          </h2>
          <div className="prose prose-lg mx-auto text-foreground/80 space-y-6 mb-10">
            <p className="text-lg leading-relaxed">
              Это напиток для тех, кто любит вкус и ритуал утреннего кофе, но устал от побочных эффектов: дрожи в руках, тревожности, скачков давления и бессонных ночей после чашки после обеда.
            </p>
            <p className="text-lg leading-relaxed">
              Alter Coffee — это полностью натуральная смесь на основе цикория, какао-бобов и трав. Никакого кофеина, но тот же уютный ритуал с горячей кружкой в руках.
            </p>
            <p className="text-lg leading-relaxed">
              Вы получаете глубокий, насыщенный вкус с нотками шоколада и пряностей — без перегрузки нервной системы.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Coffee" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Без кофеина</h3>
                    <p className="text-muted-foreground">Никаких скачков энергии и последующих спадов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Sprout" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">100% натуральный состав</h3>
                    <p className="text-muted-foreground">Только растительные ингредиенты, никаких добавок</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Moon" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Можно пить вечером</h3>
                    <p className="text-muted-foreground">Не помешает вашему сну и расслаблению</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Heart" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Бережное действие</h3>
                    <p className="text-muted-foreground">Подходит беременным и людям с чувствительностью к кофеину</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-4">
            Натуральный состав,
          </h2>
          <p className="font-handwritten text-4xl text-center text-muted-foreground mb-16">
            который работает мягко
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🌼</span>
                  </div>
                </div>
                <h3 className="font-handwritten text-3xl font-bold mb-3">Цикорий</h3>
                <p className="text-muted-foreground">
                  Глубокий вкус и лёгкая бодрость без кофеина
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🍫</span>
                  </div>
                </div>
                <h3 className="font-handwritten text-3xl font-bold mb-3">Какао-бобы</h3>
                <p className="text-muted-foreground">
                  Шоколадный оттенок и чувство комфорта
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">💜</span>
                  </div>
                </div>
                <h3 className="font-handwritten text-3xl font-bold mb-3">Лаванда</h3>
                <p className="text-muted-foreground">
                  Расслабляющий аромат и спокойствие
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🌿</span>
                  </div>
                </div>
                <h3 className="font-handwritten text-3xl font-bold mb-3">Пряности</h3>
                <p className="text-muted-foreground">
                  Корица и кардамон для уюта и тепла
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-16">
            Для тех, кто...
          </h2>
          
          <div className="space-y-6">
            {[
              {
                icon: 'Coffee',
                text: 'Хочет сократить кофеин, но не отказаться от любимой кружки утром',
              },
              {
                icon: 'Heart',
                text: 'Стал замечать тревожность и сбитый сон от обычного кофе',
              },
              {
                icon: 'Moon',
                text: 'Ищет более мягкий напиток, который можно пить даже вечером',
              },
              {
                icon: 'Leaf',
                text: 'Выбирает растительные и экологичные продукты',
              },
              {
                icon: 'Baby',
                text: 'Беременные и кормящие мамы, которые скучают по ритуалу с кофе',
              },
              {
                icon: 'Zap',
                text: 'Чувствителен к кофеину и ищет альтернативу без побочных эффектов',
              },
            ].map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <p className="text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-16">
            Как пить Alter Coffee
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: '🥄',
                title: 'Насыпать',
                description: '1-2 чайные ложки напитка в кружку',
              },
              {
                step: '02',
                icon: '💧',
                title: 'Залить',
                description: 'Горячей водой или растительным молоком',
              },
              {
                step: '03',
                icon: '🍯',
                title: 'Добавить',
                description: 'По желанию мёд, корицу или ваниль',
              },
              {
                step: '04',
                icon: '☕',
                title: 'Насладиться',
                description: 'Вашим новым любимым ритуалом',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-handwritten text-6xl text-muted-foreground/30 mb-4">
                  {item.step}
                </div>
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="font-handwritten text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-16">
            Что говорят наши клиенты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Мария К.',
                text: 'Наконец-то могу пить "кофе" вечером и спокойно засыпать! Вкус очень приятный, с шоколадными нотками.',
                rating: 5,
              },
              {
                name: 'Александр П.',
                text: 'Перешёл с обычного кофе на Alter Coffee. Нервная система сказала спасибо — больше никаких дрожащих рук и тревоги.',
                rating: 5,
              },
              {
                name: 'Елена В.',
                text: 'Во время беременности очень скучала по утреннему кофе. Alter Coffee стал настоящим спасением — вкусно и безопасно!',
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic leading-relaxed">"{review.text}"</p>
                  <p className="font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-handwritten text-5xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Это совсем без кофеина?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Да, Alter Coffee на 100% не содержит кофеина. В составе только цикорий, какао, травы и пряности. 
                Никакого воздействия на нервную систему, как от кофе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Подойдёт ли мне, если я не люблю цикорий?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Многие так думают! Но Alter Coffee — это сбалансированная смесь. Цикорий даёт основу, 
                а какао и пряности смягчают вкус, добавляя шоколадные и тёплые ноты. Попробуйте — возможно, вас приятно удивит!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли пить каждый день?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Конечно! Alter Coffee создан как ежедневная альтернатива обычному кофе. Вы можете пить его хоть несколько раз в день — 
                утром, днём, вечером — без ограничений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Чем Alter Coffee отличается от обычного кофе или какао?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                От кофе — отсутствием кофеина и мягким воздействием. От какао — более насыщенным, «кофейным» вкусом 
                благодаря цикорию и пряностям. Это идеальный баланс между комфортом и вкусом.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-5xl font-bold mb-4">
              Попробуйте Alter Coffee сейчас
            </h2>
            <p className="text-lg text-muted-foreground">
              Смесь для напитка в удобной экологичной упаковке. Хватит на 20-25 порций.
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <div className="inline-block">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-primary">890₽</span>
                    <span className="text-xl text-muted-foreground line-through">1290₽</span>
                  </div>
                  <Badge className="px-4 py-1">Скидка 30% на первую покупку</Badge>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Петров"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ivan@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (900) 123-45-67"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Количество упаковок</Label>
                  <Input 
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Заказать Alter Coffee
                  <Icon name="ShoppingCart" size={20} className="ml-2" />
                </Button>
              </form>

              <div className="flex justify-center gap-6 mt-8 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Leaf" size={18} />
                  <span>Vegan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="ShieldCheck" size={18} />
                  <span>Gluten Free</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Recycle" size={18} />
                  <span>Эко-упаковка</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-handwritten text-4xl font-bold mb-4">Alter Coffee</h3>
          <p className="text-muted-foreground mb-6">
            Мягкий ритуал вместо кофе. Натурально. Экологично. Заботливо.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 Alter Coffee. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
