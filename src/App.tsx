import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Star,
  ArrowRight,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  X,
} from "lucide-react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ana Clara Santos",
    role: "Paciente de Limpeza de Pele",
    text: "A limpeza de pele na clínica foi incrível! Minha pele ficou macia, renovada e sem impurezas. Recomendo demais!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carlos Eduardo Lima",
    role: "Paciente de Tratamento Anti-Idade",
    text: "Fiz o tratamento anti-idade e estou maravilhado com os resultados. Minha pele está mais firme e jovem. Equipe super profissional!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Mariana Costa",
    role: "Paciente de Terapia de Luz Pulsada (IPL)",
    text: "A terapia de luz pulsada foi um divisor de águas para mim. Minhas manchas diminuíram significativamente e minha pele está radiante!",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Fernanda Oliveira",
    role: "Paciente de Drenagem Linfática",
    text: "A drenagem linfática facial é relaxante e eficiente. Percebi uma melhora incrível no inchaço e na textura da minha pele.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const products = [
  {
    name: "Limpeza de Pele Profunda",
    description:
      "Tratamento de limpeza facial para remover impurezas e revitalizar a pele.",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tratamento Anti-Idade",
    description:
      "Sessão de rejuvenescimento facial com técnicas avançadas para reduzir rugas e linhas de expressão.",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1596740926849-2d473dee8d60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Terapia de Luz Intensa Pulsada (IPL)",
    description:
      "Tratamento para manchas, vasinhos e rejuvenescimento com tecnologia de luz pulsada.",
    price: "$300",
    image:
      "https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Drenagem Linfática Facial",
    description:
      "Massagem facial para reduzir inchaço, melhorar a circulação e promover o bem-estar da pele.",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1551184451-76b762941ad6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const benefits = [
  {
    title: "Natural Ingredientes",
    description:
      "Ingredientes 100% orgânicos e naturais provenientes sustentáveis",
    image:
      "https://i.pinimg.com/736x/16/63/71/1663714c32769f23cdf807d704263abc.jpg",
  },
  {
    title: "Cruelty Free",
    description: "Nunca testado em animais e totalmente vegano",
    image:
      "https://static.vecteezy.com/system/resources/previews/007/627/608/non_2x/cruelty-free-silhouette-green-icon-not-tested-on-animals-pictogram-not-experiment-on-rabbit-bunny-symbol-natural-ingredients-product-no-cruelty-sign-vegan-stamp-isolated-illustration-vector.jpg",
  },
  {
    title: "Eco Friendly",
    description:
      "Embalagens sustentáveis ​​e práticas ambientalmente conscientes",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

// Definindo as seções do site para a navegação
const sections = [
  { id: "hero", name: "Início" },
  { id: "benefits", name: "Benefícios" },
  { id: "products", name: "Serviços" },
  { id: "testimonials", name: "Depoimentos" },
  { id: "newsletter", name: "Comunidade" },
  { id: "instagram", name: "Instagram" },
];

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 md:px-6"
    >
      {children}
    </motion.section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (testimonialRef.current) {
      const clone = testimonialRef.current.cloneNode(true);
      testimonialRef.current.appendChild(clone);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSearchOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 sticky top-0 bg-white/80 backdrop-blur-sm z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm">K</span>
          </div>
          <span className="text-sm hidden md:block">Kaes Estetica</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-center"
            aria-label="Pesquisar"
          >
            <Search className="w-5 h-5" />
          </button>

          <Menu className="w-5 h-5 md:hidden" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-600">
              Início
            </a>
            <a href="#" className="text-sm hover:text-gray-600">
              Sobre
            </a>
            <a href="#" className="text-sm hover:text-gray-600">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">Navegação Rápida</h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-md flex items-center gap-3 transition-colors"
                  >
                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                      {section.name.charAt(0)}
                    </span>
                    <span>{section.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Section id="hero">
        <div className="grid md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col justify-between h-[60vh] md:h-[80vh] order-2 md:order-1">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm"
              >
                Kaes Estetica
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }} // Texto começa invisível, deslocado 20px para baixo e com blur
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Texto termina visível, no lugar e sem blur
                transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }} // Atraso de 0.4s, duração de 1.2s e easing suave
                className="text-4xl md:text-5xl font-light leading-tight"
              >
                Tudo o que precisa. <br></br>Elevando autoestima através de
                Mulheres.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Venha nos Conhecer
              </button>
              <p className="text-xs text-gray-500">
                *Consulte os preços dos nossos serviços
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[40vh] md:h-[80vh] order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beauty product"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full">
              <span className="text-sm">Kaes </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Por que nos escolher ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experimente a diferença com nosso compromisso com a qualidade,
            sustentabilidade e beleza natural.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products Section */}
      <Section id="products">
        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-light">Serviços Destaque</h2>
            <button className="text-sm hover:underline">Veja tudo</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium">{product.price}</p>
                  <button className="text-sm underline">Fazer orçamento</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials">
        <div className="overflow-hidden">
          <h2 className="text-3xl font-light mb-12 text-center">
            O que as pessoas costumam dizer
          </h2>
          <div ref={testimonialRef} className="flex gap-6 animate-scroll">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section id="newsletter">
        <div className="bg-gray-50 py-20 px-4 md:px-6 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">
              Inscreva-se na nossa Comunidade
            </h2>
            <p className="text-gray-600 mb-8">
              Fique atualizado com nossos últimos produtos e dicas de beleza.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Insira seu email"
                className="px-6 py-3 rounded-full border border-gray-300 w-full md:w-80 focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center">
                Increver-se
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Instagram Feed Section */}
      <Section id="instagram">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Nos siga @kaesestetica</h2>
          <p className="text-gray-600">
            Junte-se à nossa comunidade e compartilhe sua jornada de beleza
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(2)].map((insta, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1551184451-76b762941ad6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D-${1550000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`}
                alt="Instagram post"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />{" "}
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">K</span>
                </div>
                <span className="text-sm">Kaes Estetica</span>
              </div>
              <p className="text-gray-600 text-sm">
                Descubra sua beleza natural com nossa coleção premium de
                cuidados com a pele.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Compras</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Todos os Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Mais Vendidos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Novas Tendências
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Sobre</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Nossa história
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Ingredientes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Sustentabilidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Centro de Ajuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Retornos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2025 Kaes Estetica. Todos direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
