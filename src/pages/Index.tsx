import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Index = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and aromatic single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with avocado, cherry tomatoes, and feta' },
    { name: 'Blueberry Pancakes', price: '$9.00', description: 'Fluffy pancakes with fresh blueberries and maple syrup' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew & Bites</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">Artisanal coffee & fresh local cuisine</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-amber-900 mb-6">
              Founded in 2015, Brew & Bites started as a small coffee cart in the city center. 
              Today we're proud to serve our community with ethically sourced coffee and 
              locally produced ingredients in a warm, welcoming space.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Coffee className="text-amber-600" size={24} />
              <span className="text-amber-900">Specialty grade coffee beans</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-amber-600" size={24} />
              <span className="text-amber-900">Locally sourced ingredients</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cafe interior" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-amber-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Hours</h2>
            <div className="space-y-4">
              {['Monday - Friday: 7am - 7pm', 'Saturday: 8am - 8pm', 'Sunday: 8am - 5pm'].map((time, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Clock className="text-amber-600" size={20} />
                  <span className="text-amber-900">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Find Us</h2>
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="text-amber-600 mt-1" size={20} />
              <span className="text-amber-900">123 Coffee Street, Beanville, CA 90210</span>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018546!2d-73.987844924525!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689879723456!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Brew & Bites</h3>
              <p className="max-w-xs">Serving the community with love and great coffee since 2015.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-300 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-amber-300 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-300 transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;