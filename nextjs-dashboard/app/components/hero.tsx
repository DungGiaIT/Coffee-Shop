// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Midnight Matchalatte
            <span className="block text-emerald-600 text-xl mt-2">Bestseller of the Month</span>
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <svg className="w-6 h-6 text-gray-300" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span className="text-gray-600">(128 reviews)</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the rich, earthy flavor of our premium matcha blend. Perfect for any time of day, but especially magical at midnight.
          </p>

          <div className="text-4xl font-bold text-emerald-600">
            $7.50
            <span className="text-sm text-gray-500 ml-2">+ Free Delivery</span>
          </div>

          <Link 
            href="/shop/matchalatte" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-200"
          >
            Order Now →
          </Link>
        </div>

        {/* Center Image */}
        <div className="lg:w-1/3 relative h-96 w-full">
          <Image
            src="/images/matchalate.webp"
            alt="Midnight Matchalatte"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customize Your Drink</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Size</h4>
                <div className="grid grid-cols-4 gap-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className={`flex items-center justify-center h-12 rounded-xl border-2 ${
                        size === 'M' 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-600' 
                        : 'border-gray-200 hover:border-emerald-400'
                      } transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">Toppings</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Whipped Cream', 'Caramel Drizzle', 'Chocolate Chips', 'Cinnamon'].map((topping) => (
                    <button
                      key={topping}
                      className="flex items-center justify-center h-12 rounded-xl border-2 border-gray-200 hover:border-emerald-400 transition-colors"
                    >
                      {topping}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                ✨
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Special Offer</h4>
                <p className="text-sm text-gray-600">Free topping with XL size</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}