import { Link } from 'react-router-dom';
import { Shield, Heart, Home, Briefcase, Car, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Car,
      title: 'Auto Insurance',
      description: 'Comprehensive coverage for your vehicle with competitive rates and flexible payment options.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your home and belongings from unexpected damages and disasters.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with customized life insurance plans.',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Safeguard your business with comprehensive commercial insurance solutions.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: '24/7 Protection',
      description: 'Round-the-clock coverage and support when you need it most.',
    },
    {
      icon: Award,
      title: 'Trusted by Thousands',
      description: 'Over 50,000 satisfied customers trust us with their insurance needs.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Rates',
      description: 'Get the best coverage at prices that fit your budget.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our dedicated team is here to guide you every step of the way.',
    },
  ];

  const benefits = [
    'Fast and easy claims process',
    'No hidden fees or charges',
    'Customizable coverage options',
    'Multi-policy discounts available',
    'Instant online quotes',
    'Local agents nationwide',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">Trusted Insurance Partner Since 2010</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Protect What Matters Most
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Comprehensive insurance solutions tailored to your unique needs. Get peace of mind with Perfect Union Insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="bg-white rounded-lg p-3">
                          <Shield className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-white/40 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-white/30 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage options designed to protect you and your loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Perfect Union Insurance?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're committed to providing exceptional service and comprehensive coverage that adapts to your changing needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
                  <div>
                    <p className="text-sm opacity-90">Customer Satisfaction</p>
                    <p className="text-3xl font-bold">98%</p>
                  </div>
                  <Award className="h-12 w-12" />
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white">
                  <div>
                    <p className="text-sm opacity-90">Claims Processed</p>
                    <p className="text-3xl font-bold">50K+</p>
                  </div>
                  <TrendingUp className="h-12 w-12" />
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white">
                  <div>
                    <p className="text-sm opacity-90">Years of Experience</p>
                    <p className="text-3xl font-bold">14+</p>
                  </div>
                  <Shield className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Protected?</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust Perfect Union Insurance for their coverage needs. Get a free quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
