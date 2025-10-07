import { Button } from "@/components/ui/button";
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
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      title: "Офисное пространство",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Минималистичная квартира",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    },
    {
      title: "Коммерческий центр",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Современный дом",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80"
    },
    {
      title: "Ресторан",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-[#2C2C2C]/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-tight text-[#2C2C2C]">
              NDA
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm hover:text-[#2C2C2C]/60 transition-colors text-[#2C2C2C]">О нас</a>
              <a href="#portfolio" className="text-sm hover:text-[#2C2C2C]/60 transition-colors text-[#2C2C2C]">Портфолио</a>
              <a href="#services" className="text-sm hover:text-[#2C2C2C]/60 transition-colors text-[#2C2C2C]">Услуги</a>
              <a href="#contact" className="text-sm hover:text-[#2C2C2C]/60 transition-colors text-[#2C2C2C]">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-full h-screen relative bg-[#E8E3DA] flex items-center justify-center">
        <img 
          src="https://cdn.poehali.dev/files/ca9cf857-bb7f-4b17-a5ab-097bc530608d.png" 
          alt="NDA - Neuro.Design.Architecture" 
          className="max-w-md w-full px-6"
        />
      </section>

      <section id="about" className="py-32 px-6 bg-white border-t border-[#2C2C2C]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-[#2C2C2C]">
            Воплощение вашего<br/>пространства в реальность
          </h2>
          <p className="text-xl text-[#5A5A5A] leading-relaxed max-w-3xl mx-auto">
            Воплощение вашего будущего, настоящего, после определенного времени 
            создания реализации с помощью архитектурных инновационных решений
          </p>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-light mb-20 text-center text-[#2C2C2C]">Портфолио</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden border border-[#2C2C2C] cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-light text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-light mb-20 text-center text-[#2C2C2C]">Услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#2C2C2C]">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-12 border-[#2C2C2C] hover:bg-[#2C2C2C] transition-all duration-500 cursor-pointer"
                style={{
                  borderRight: index % 2 === 0 ? '1px solid #2C2C2C' : 'none',
                  borderBottom: index < 2 ? '1px solid #2C2C2C' : 'none'
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-light text-[#2C2C2C] group-hover:text-white transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon 
                      name={service.icon} 
                      size={40} 
                      className="text-[#2C2C2C] group-hover:text-white transition-colors duration-500" 
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-[#2C2C2C] group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5A5A] group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-[#2C2C2C]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8 text-white">Начнём<br/>разработку</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Воплощение ваших идей в реальность начинается с первого контакта. 
                Свяжитесь с нами, и мы обсудим ваш проект.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Icon name="Mail" size={20} className="text-white/70" />
                  <span>info@nda-studio.ru</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Icon name="Phone" size={20} className="text-white/70" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Icon name="MapPin" size={20} className="text-white/70" />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <textarea 
                placeholder="Расскажите о вашем проекте" 
                rows={5}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
              <Button 
                className="w-full py-6 bg-white text-[#2C2C2C] hover:bg-white/90 font-medium text-lg"
              >
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-[#2C2C2C]/10 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#5A5A5A]">
              © 2025 NDA — Neuro.Design.Architecture
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors">
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
