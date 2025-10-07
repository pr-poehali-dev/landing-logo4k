import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Ruler",
      title: "Архитектурное проектирование",
      description: "Разработка концепций и полного пакета проектной документации для жилых и коммерческих объектов"
    },
    {
      icon: "PenTool",
      title: "Дизайн интерьеров",
      description: "Создание уникальных интерьерных решений с акцентом на эргономику и эстетику пространства"
    },
    {
      icon: "Box",
      title: "3D-визуализация",
      description: "Фотореалистичная визуализация проектов для полного понимания будущего пространства"
    },
    {
      icon: "Building2",
      title: "Авторский надзор",
      description: "Контроль реализации проекта на всех этапах строительства и отделки"
    }
  ];

  const portfolio = [
    {
      title: "Загородная резиденция",
      category: "Частная архитектура",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      title: "Офисное пространство",
      category: "Коммерческая недвижимость",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Минималистичная квартира",
      category: "Дизайн интерьеров",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    },
    {
      title: "Коммерческий центр",
      category: "Общественные здания",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Городская вилла",
      category: "Частная архитектура",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    },
    {
      title: "Лофт пространство",
      category: "Дизайн интерьеров",
      image: "https://images.unsplash.com/photo-1556228578-dd6a8f2c1e64?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="absolute top-0 w-full bg-[#8B7355]/10 backdrop-blur-md border-b border-[#8B7355]/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/eeba8c30-2349-466e-b18b-01e7c07891cb.png" 
                alt="NDA" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm hover:text-[#8B7355] transition-colors text-[#2C2C2C] font-medium">О студии</a>
              <a href="#portfolio" className="text-sm hover:text-[#8B7355] transition-colors text-[#2C2C2C] font-medium">Портфолио</a>
              <a href="#services" className="text-sm hover:text-[#8B7355] transition-colors text-[#2C2C2C] font-medium">Услуги</a>
              <a href="#contact" className="text-sm hover:text-[#8B7355] transition-colors text-[#2C2C2C] font-medium">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-full h-screen relative bg-background">
        <img 
          src="https://cdn.poehali.dev/files/ca9cf857-bb7f-4b17-a5ab-097bc530608d.png" 
          alt="NDA Logo" 
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-end pr-20 md:pr-32">
          <div className="max-w-lg space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-[#2C2C2C] leading-tight">
              Пространства<br/>с характером
            </h1>
            <p className="text-lg md:text-xl text-[#8B7355] font-light">
              Архитектура. Дизайн. Технологии.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-6 gap-3 auto-rows-[80px]">
              <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80" 
                alt="Architecture 1"
                className="col-span-1 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80" 
                alt="Architecture 2"
                className="col-span-3 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" 
                alt="Architecture 3"
                className="col-span-2 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&q=80" 
                alt="Architecture 4"
                className="col-span-2 row-span-3 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" 
                alt="Architecture 5"
                className="col-span-2 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80" 
                alt="Architecture 6"
                className="col-span-2 row-span-1 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80" 
                alt="Architecture 7"
                className="col-span-1 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80" 
                alt="Architecture 8"
                className="col-span-3 row-span-3 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&q=80" 
                alt="Architecture 9"
                className="col-span-2 row-span-1 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80" 
                alt="Architecture 10"
                className="col-span-2 row-span-2 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&q=80" 
                alt="Architecture 11"
                className="col-span-1 row-span-1 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80" 
                alt="Architecture 12"
                className="col-span-2 row-span-1 w-full h-full object-cover grayscale"
              />
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" 
                alt="Architecture 13"
                className="col-span-4 row-span-2 w-full h-full object-cover grayscale"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-light text-[#2C2C2C] leading-tight">
                Neuro.Design.<br/>Architecture
              </h2>
              <div className="space-y-6 text-lg text-[#5A5A5A] leading-relaxed">
                <p>
                  NDA — архитектурная студия, основанная на синтезе нейротехнологий, дизайна и архитектурного мастерства. 
                  Мы создаём пространства, которые объединяют функциональность с эстетикой, разум с чувствами.
                </p>
                <p>
                  Наш подход базируется на глубоком анализе потребностей клиента и контекста проекта. 
                  Каждое решение рождается на стыке технологий, искусства и человеческого опыта, 
                  создавая гармоничные пространства с неповторимым характером.
                </p>
                <p>
                  Мы специализируемся на проектировании частных резиденций, коммерческих объектов 
                  и общественных пространств, уделяя особое внимание деталям и качеству реализации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16">Избранные проекты</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Услуги</h2>
          <p className="text-center text-muted-foreground mb-16">Комплексный подход к реализации проектов</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary transition-colors duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-secondary rounded-sm">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Начнём проект</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Готовы обсудить ваш проект? Свяжитесь с нами для консультации 
            и узнайте, как мы можем воплотить ваши идеи в реальность.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8">
              <Icon name="Mail" size={18} className="mr-2" />
              Написать нам
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Email</p>
              <p className="font-medium">info@nda-studio.ru</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Телефон</p>
              <p className="font-medium">+7 (495) 123-45-67</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Адрес</p>
              <p className="font-medium">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 NDA Studio. Neuro.Design.Architecture
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;