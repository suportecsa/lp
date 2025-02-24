import React, { useEffect, useRef } from "react";
import {
  Menu,
  Search,
  Star,
  ArrowRight,
  ShoppingBag,
  Heart,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entusiasta da Beleza",
    text: "Os produtos transformaram completamente minha rotina de cuidados com a pele. Minha pele nunca esteve tão boa!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emily Davis",
    role: "Maquiadora Profissional",
    text: "Como maquiadora profissional, sou muito exigente com skincare. Esses produtos superam todas as expectativas.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michelle Wong",
    role: "Dermatologista",
    text: "Eu recomendo esses produtos para meus clientes. Os resultados falam por si só.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const products = [
  {
    name: "Limpador Facial",
    description: "Limpador diário para sua pele macia e feliz.",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1611861317409-7dcc62856a8a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vitamina C",
    description: "Antioxidante poderoso para sua pele",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Serum",
    description: "Formula anti-idade",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1696025522422-aa9a74e4f3d5?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const benefits = [
  {
    title: "Natural Ingredientes",
    description:
      "Ingredientes 100% orgânicos e naturais provenientes de fazendas sustentáveis",
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

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
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

  useEffect(() => {
    if (testimonialRef.current) {
      const clone = testimonialRef.current.cloneNode(true);
      testimonialRef.current.appendChild(clone);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 sticky top-0 bg-white/80 backdrop-blur-sm z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm">N</span>
          </div>
          <span className="text-sm hidden md:block">Natural</span>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
          <Menu className="w-5 h-5 md:hidden" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-600">
              Compra
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

      {/* Hero Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col justify-between h-[60vh] md:h-[80vh] order-2 md:order-1">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm"
              >
                Mágica Natural
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-light leading-tight"
              >
                Desbloqueie sua beleza interior com nossa coleção de autocuidado
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Comece as Compras
              </button>
              <p className="text-xs text-gray-500">
                *Frete qualificado gratuito e devoluções
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
              src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Beauty product"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full">
              <span className="text-sm">/Products</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
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
      <Section>
        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-light">Produtos Destaque</h2>
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
                  <button className="text-sm underline">Comprar</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
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
      <Section>
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
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Nos siga @natural</h2>
          <p className="text-gray-600">
            Junte-se à nossa comunidade e compartilhe sua jornada de beleza
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1550000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`}
                alt="Instagram post"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
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
                  <span className="text-white text-sm">NL</span>
                </div>
                <span className="text-sm">Natural</span>
              </div>
              <p className="text-gray-600 text-sm">
                Descubra sua beleza natural com nossa coleção premium de
                cuidados com a pele.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    Todos os Produtos
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
              <h3 className="font-medium mb-4">About</h3>
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
              <h3 className="font-medium mb-4">Contact</h3>
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
              © 2025 Natural. Todos direitos reservados. João Reis.
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
