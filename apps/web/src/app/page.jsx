import { useState } from "react";
import { Star, Heart, Leaf, Instagram, Facebook, Link2 } from "lucide-react";

function WhatsAppContact() {
  const [waMessage, setWaMessage] = useState("");
  // Include country code without '+' for wa.me links
  const whatsappNumber = "919599254980"; // +91 95992 54980
  const handleWhatsAppSend = () => {
    const text = waMessage && waMessage.trim().length > 0
      ? waMessage
      : "Hello! I have a query about Moon Pure products.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="wa-message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="wa-message"
          rows="4"
          value={waMessage}
          onChange={(e) => setWaMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="Type your question..."
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleWhatsAppSend}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
      >
        Send on WhatsApp
      </button>
      <p className="text-sm text-gray-500">We’ll open WhatsApp to send your message to +91 95992 54980.</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                style={{
                  borderRadius: "50%"
                }}
                src="/logo-moonpure.jpg"
                alt="Moon Pure Glow"
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold text-gray-900">Moon Pure</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pure. Natural. Handmade.
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the beauty of handcrafted soaps, lip balms, and candles
              made with love and natural ingredients. Each product is carefully
              created to nourish your skin and elevate your daily rituals.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#products" className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Explore Products
              </a>
              <a href="#about" className="border border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Natural
              </h3>
              <p className="text-gray-600">
                Made with pure, natural ingredients sourced responsibly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Handcrafted
              </h3>
              <p className="text-gray-600">
                Each product is lovingly made by hand in small batches
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully crafted for the highest quality and effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection of handmade essentials, each crafted with
              care and natural ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Handmade Soaps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
                <img
                  src="/images/soaps.jpg"
                  alt="Handmade Soaps"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Handmade Soaps
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxurious handcrafted soaps made with natural oils and
                  botanicals. Gentle on your skin, rich in moisture, and
                  available in delightful scents.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Natural ingredients</li>
                  <li>• Moisturizing formula</li>
                  <li>• Various scents available</li>
                  <li>• Eco-friendly packaging</li>
                </ul>
              </div>
            </div>

            {/* Lip Balms */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
                <img
                  src="/images/balm.jpg"
                  alt="Lip Balm"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lip Balms
                </h3>
                <p className="text-gray-600 mb-4">
                  Nourishing lip balms that protect and moisturize your lips.
                  Made with natural waxes and oils for long-lasting hydration.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Long-lasting moisture</li>
                  <li>• Natural beeswax base</li>
                  <li>• SPF protection available</li>
                  <li>• Smooth application</li>
                </ul>
              </div>
            </div>

            {/* Candles */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
                <img
                  src="/images/candle.jpg"
                  alt="Hand Poured Candle"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Candles
                </h3>
                <p className="text-gray-600 mb-4">
                  Hand-poured candles made with natural soy wax and essential
                  oils. Create a warm, inviting atmosphere in your home.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Natural soy wax</li>
                  <li>• Essential oil fragrances</li>
                  <li>• Clean burning</li>
                  <li>• Long burn time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Moon Pure
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Moon Pure was born from a passion for creating beautiful,
                natural products that nourish both body and soul. We believe in
                the power of handmade craftsmanship and the beauty of natural
                ingredients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every product in our collection is carefully handcrafted in
                small batches, ensuring the highest quality and attention to
                detail. We source our ingredients responsibly and prioritize
                sustainability in everything we do.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to bring you products that are not only effective
                but also a joy to use, transforming your daily routines into
                moments of self-care and mindfulness.
              </p>
            </div>
            <div className="rounded-lg h-96 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              <img
                src="/images/aboutmoonglow.jpg"
                alt="Moonpure Glow"
                className="w-auto h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or want to learn more about Moon
              Pure? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">Moonpure01@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">9599254980</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    House number 375, 3rd Floor Sector 9a
                    <br />
                    Near Gauri Shankar Mandir Road Gurgaon, Pin code 122006.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <WhatsAppContact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  style={{
                    borderRadius: "50%"
                  }}
                  src="/logo-moonpure.jpg"
                  alt="Moon Pure"
                  className="h-12 w-12"
                />
                <h3 className="text-2xl font-bold">Moon Pure</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Handcrafted natural products made with love. Bringing you the
                finest soaps, lip balms, and candles for your daily rituals.
              </p>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#home" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="hover:text-white">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex items-center gap-4 text-gray-300">
                  <a
                    href="https://www.instagram.com/moon_pureglow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-white"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-white"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="hover:text-white"
                  >
                    <Link2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Moon Pure. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
