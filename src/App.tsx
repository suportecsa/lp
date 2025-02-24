import React, { useEffect, useRef } from 'react';
import { Menu, Search, Star, ArrowRight, ShoppingBag, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    text: "The products have completely transformed my skincare routine. My skin has never felt better!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emily Davis",
    role: "Makeup Artist",
    text: "As a professional makeup artist, I'm very particular about skincare. These products exceed all expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michelle Wong",
    role: "Dermatologist",
    text: "I recommend these products to my clients. The results speak for themselves.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const products = [
  {
    name: "Facial Cleanser",
    description: "Gentle daily cleanser",
    price: "$29",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Moisturizer",
    description: "Hydrating cream",
    price: "$45",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Serum",
    description: "Anti-aging formula",
    price: "$65",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const benefits = [
  {
    title: "Natural Ingredients",
    description: "100% organic and natural ingredients sourced from sustainable farms",
    image: "https://images.unsplash.com/photo-1546868871-0f936769675e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Cruelty Free",
    description: "Never tested on animals and completely vegan friendly",
    image: "https://images.unsplash.com/photo-1586039891449-3df31e617979?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Eco Friendly",
    description: "Sustainable packaging and environmentally conscious practices",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
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
            <span className="text-white text-sm">NS</span>
          </div>
          <span className="text-sm hidden md:block">Naturame</span>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
          <Menu className="w-5 h-5 md:hidden" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-600">Shop</a>
            <a href="#" className="text-sm hover:text-gray-600">About</a>
            <a href="#" className="text-sm hover:text-gray-600">Contact</a>
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
                Natural magic
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-light leading-tight"
              >
                Unlock your inner beauty with our self care collection
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start shopping
              </button>
              <p className="text-xs text-gray-500">
                *Free qualified shipping and returns
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
          <h2 className="text-3xl font-light mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our commitment to quality, sustainability, and natural beauty.</p>
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
            <h2 className="text-3xl font-light">Featured Products</h2>
            <button className="text-sm underline">View all</button>
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
                  <button className="text-sm underline">Add to cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="overflow-hidden">
          <h2 className="text-3xl font-light mb-12 text-center">What Our Customers Say</h2>
          <div 
            ref={testimonialRef}
            className="flex gap-6 animate-scroll"
          >
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
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
            <h2 className="text-3xl font-light mb-6">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Stay updated with our latest products and beauty tips.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full border border-gray-300 w-full md:w-80 focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Instagram Feed Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Follow Us @naturame</h2>
          <p className="text-gray-600">Join our community and share your beauty journey</p>
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
                  <span className="text-white text-sm">NS</span>
                </div>
                <span className="text-sm">Naturame</span>
              </div>
              <p className="text-gray-600 text-sm">Discover your natural beauty with our premium skincare collection.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">All Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Best Sellers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Ingredients</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Email Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">© 2024 Naturame. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-black"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-black"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;