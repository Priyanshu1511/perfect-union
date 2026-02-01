import { Shield, Target, Eye, Heart, Users, Award, TrendingUp, Clock } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in everything we do, building trust with every interaction.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your needs are our priority. We go above and beyond to ensure your satisfaction and peace of mind.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery, continuously improving to exceed expectations.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in giving back and supporting the communities we serve through various initiatives.',
    },
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate' },
    { icon: TrendingUp, value: '$2.5B', label: 'Claims Paid' },
    { icon: Clock, value: '14+', label: 'Years of Service' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Service',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Thompson',
      role: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Perfect Union Insurance</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Building stronger communities through comprehensive insurance solutions and unwavering commitment to our customers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protecting Families Since 2010
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Perfect Union Insurance was founded with a simple yet powerful mission: to make quality insurance accessible and understandable for everyone. What started as a small local agency has grown into a trusted national provider serving over 50,000 families and businesses.
                </p>
                <p>
                  Our founders recognized that insurance could be confusing and intimidating. They set out to change that by creating a company that puts people first, explains things clearly, and delivers on its promises.
                </p>
                <p>
                  Today, we're proud to be one of the fastest-growing insurance providers in the country, but we've never lost sight of our core values: integrity, transparency, and exceptional service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Office team"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide comprehensive, affordable insurance solutions that give our customers peace of mind and financial security. We strive to be more than just an insurance provider – we aim to be a trusted partner in protecting what matters most to you.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and customer-centric insurance provider in the nation, setting new standards for transparency, service excellence, and innovation in the insurance industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence reflected in our achievements
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Family</h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Experience the Perfect Union difference. Let us protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get a Free Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
