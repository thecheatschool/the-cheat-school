import React from 'react'
import { Check, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plans = [
    
    {
      name: 'PRO',
      price: '299',
      featured: true,
      features: [
        'Complete documentation',
        'Working materials in Sketch',
        '100GB cloud storage',
        '500 team members',
        'Premium support'
      ]
    },
    
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background image effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span 
              className="bg-white text-[#0a0a0f] px-4 py-2 rounded-full text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Premium
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Antonio, sans-serif' }}
          >
            See Our Pricing
          </h2>
          <p 
            className="text-gray-300 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            You have Free Unlimited Updates and Premium Support on each package
          </p>
        </div>

        {/* Pricing Cards - CENTERED */}
        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 max-w-sm w-full"
            >
              {/* Plan Name */}
              <h3 
                className="text-2xl font-bold text-[#2b2b2b] mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span 
                  className="text-5xl md:text-6xl font-bold text-[#2b2b2b]"
                  style={{ fontFamily: 'Antonio, sans-serif' }}
                >
                  <span className="text-3xl align-top">$</span>
                  {plan.price}
                </span>
                <span 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  /mo
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Check className="w-5 h-5 text-[#2b2b2b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing