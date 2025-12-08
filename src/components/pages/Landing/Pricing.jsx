import React from 'react'
import { Check, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'One-Time Offer',
      price: '18,000',
      featured: true,
      features: [
        '90-Day Civil Cheatcamp Access',
        'Live Coaching: 12 Sessions',
        'AutoCAD & Revit Mastery',
        'Project Management Training',
        'Personality Development Program',
        'Real Internship Experience',
        'Complete Professional Portfolio',
        'Industry-Recognized Certification'
      ]
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Diagonal Accent Background - Design 2 */}
      <div className="absolute inset-0">
        {/* Top right diagonal stripes */}
        <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(232, 63, 37, 0.08) 20px, rgba(232, 63, 37, 0.08) 40px)'
          }}></div>
        </div>

        {/* Bottom left solid block */}
        <div className="absolute bottom-0 left-0 w-72 h-48 bg-gray-800/5"></div>
        
        {/* Red accent corner */}
        <div className="absolute bottom-12 left-12 w-40 h-40 bg-red-500/8"></div>

        {/* Floating squares */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-red-500/40"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-red-500/20 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-gray-400/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span 
              className="bg-[#e83f25] text-white px-4 py-2 rounded-full text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Premium
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#2b2b2b] mb-4"
            style={{ fontFamily: 'Antonio, sans-serif' }}
          >
            Civil Cheatcamp Investment
          </h2>
          <p 
            className="text-gray-700 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            One-time investment to transform into an industry-ready Civil Engineer in 90 days
          </p>
        </div>

        {/* Pricing Cards - CENTERED */}
        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl border border-gray-100"
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
                  <span className="text-2xl align-top">₹</span>
                  {plan.price}
                </span>
                <span 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  /3 mo
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
                    <Check className="w-5 h-5 text-[#e83f25] flex-shrink-0 mt-0.5" />
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