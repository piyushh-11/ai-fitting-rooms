import React from 'react'
import Navbar from '../components/Navbar'
import before from '../assets/before.jpg'
import after from '../assets/after.jpg'

const Home = () => {
  const [isYearly, setIsYearly] = React.useState(true)

  // Calculate monthly equivalent prices for yearly plans
  const basicMonthly = 5;
  const basicYearly = 50 / 12; // $4.17/mo
  const basicSaving = Math.round((basicMonthly - basicYearly) * 100) / 100;
  
  const premiumMonthly = 10;
  const premiumYearly = 100 / 12; // $8.33/mo
  const premiumSaving = Math.round((premiumMonthly - premiumYearly) * 100) / 100;
  
  const ultraMonthly = 20;
  const ultraYearly = 200 / 12; // $16.67/mo
  const ultraSaving = Math.round((ultraMonthly - ultraYearly) * 100) / 100;

  return (
    <div className="pt-16"> {/* Added padding-top to account for fixed navbar */}
      <Navbar />
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-blue-600">Dress</span> Smarter,
                <br />Not <span className="text-blue-600">Harder</span>
              </h1>
                <p className="text-xl text-gray-600 mb-8">
                Our AI-powered outfit generator takes the guesswork out of clothes shopping. 
                Upload a picture of you and see how you look in different outfits.
                </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
              <div className="flex items-center justify-between space-x-6">
                <div className="w-[48%] rounded-xl overflow-hidden shadow-xl transform hover:border border-white transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 text-center text-white font-semibold tracking-wide">
                  BEFORE
                </div>
                <img
                  src={before}
                  alt="Before using Outfit Maker"
                  className="w-full object-cover"
                  loading="lazy"
                />
                </div>
                <div className="w-[48%] rounded-xl overflow-hidden shadow-xl transform hover:border border-white transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-center text-white font-semibold tracking-wide">
                  AFTER
                </div>
                <img
                  src={after}
                  alt="After using Outfit Maker"
                  className="w-full object-cover"
                  loading="lazy"
                />
                </div>
              </div>
              <div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                ✨ AI-Powered Magic ✨
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-bl from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload a full-length image</h3>
              <p className="text-gray-600">Snap or upload a full-length picture of yourself to use as a base.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Select clothing items</h3>
              <p className="text-gray-600">Pick the type of clothing you want to try (tops, pants, accessories, and more)</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI overlays clothes on you</h3>
              <p className="text-gray-600">Watch AI overlay your selected clothing onto your photo seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-gradient-to-tr from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-1 rounded-lg inline-flex relative shadow-lg">
              <div
                className="absolute top-1 bottom-1 transition-all duration-300 ease-in-out rounded-md bg-blue-100 shadow-sm"
                style={{
                  width: '48%',
                  left: isYearly ? '50%' : '2%',
                  transform: isYearly ? 'translateX(0)' : 'translateX(0)',
                }}
              />
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-1 rounded-md relative z-10 transition-colors duration-300 ${!isYearly ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-md relative z-10 transition-colors duration-300 ${isYearly ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-200 shadow-sm relative flex flex-col h-full transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1">
              {isYearly && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${basicSaving}/mo
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-4">
                  ${isYearly ? basicYearly.toFixed(2) : basicMonthly}<span className="text-lg text-gray-500">/mo</span>
                </p>
                {isYearly && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${50}/year)</p>
                )}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Basic outfit suggestions</li>
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>5 outfits per month</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02]">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-lg border border-blue-200 shadow-lg relative flex flex-col h-full transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"></div>
              {isYearly && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${premiumSaving}/mo
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-4">
                  ${isYearly ? premiumYearly.toFixed(2) : premiumMonthly}<span className="text-lg text-gray-500">/mo</span>
                </p>
                {isYearly && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${100}/year)</p>
                )}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Advanced AI suggestions</li>
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Unlimited outfits</li>
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority support</li>
                </ul>
              </div>
              <div className="mt-auto relative z-10">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-200 shadow-sm relative flex flex-col h-full transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1">
              {isYearly && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${ultraSaving}/mo
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-4">Ultra</h3>
                <p className="text-4xl font-bold mb-4">
                  ${isYearly ? ultraYearly.toFixed(2) : ultraMonthly}<span className="text-lg text-gray-500">/mo</span>
                </p>
                {isYearly && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${200}/year)</p>
                )}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Custom AI model</li>
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>API access</li>
                  <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 support</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">How does Outfit Maker work?</h3>
              <p className="text-gray-600">Our AI-powered system analyzes your preferences and style to create perfect outfit combinations from your wardrobe.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I customize my style preferences?</h3>
              <p className="text-gray-600">Yes! You can set your style preferences and update them anytime to get personalized outfit recommendations.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">How often are new features added?</h3>
              <p className="text-gray-600">We regularly update our platform with new features and improvements based on user feedback.</p>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default Home