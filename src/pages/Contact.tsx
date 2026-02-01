import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Insurance Ave, Suite 100', 'New York, NY 10001'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Toll-Free: (800) 123-4567'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@perfectunion.com', 'support@perfectunion.com'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our friendly team and get the answers you need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4 shadow-lg`}>
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours. Or call us directly for immediate assistance.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="insuranceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Insurance Type *
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      required
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your insurance needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fast Response Time</h4>
                      <p className="text-blue-50 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Guidance</h4>
                      <p className="text-blue-50 text-sm">Speak with experienced insurance professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Personalized Solutions</h4>
                      <p className="text-blue-50 text-sm">Custom insurance plans tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">No Obligation Quotes</h4>
                      <p className="text-blue-50 text-sm">Get free quotes with no strings attached</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-semibold mb-3">Emergency Claims</h4>
                  <p className="text-blue-50 text-sm mb-4">
                    For urgent claims or 24/7 roadside assistance, call our emergency hotline:
                  </p>
                  <div className="text-2xl font-bold">(800) 911-HELP</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155324027546!2d-73.98784668459395!3d40.75889797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959824586!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
