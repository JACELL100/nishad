import { Heart, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-rose-500 animate-pulse" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              Dear Prajusha
            </h1>
            <Heart className="w-8 h-8 text-rose-500 animate-pulse" fill="currentColor" />
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <p className="text-xl text-gray-600 italic">From the heart of Nishad</p>
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
            Every moment with you feels like a beautiful dream I never want to wake up from.
            Your smile lights up my world in ways I never thought possible.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            You make ordinary days extraordinary, and every memory we create together
            becomes a treasure I hold close to my heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <img
              src="/nish1.jpg"
              alt="Nishad and Prajusha"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-semibold">Every moment with you is magical</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <img
              src="/nish2.jpg"
              alt="Nishad and Prajusha together"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-semibold">You make me the happiest</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why I Love You</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3">Your Smile</h3>
              <p className="text-rose-50">
                It brightens even my darkest days and reminds me that happiness is real.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3">Your Kindness</h3>
              <p className="text-rose-50">
                The way you care for others and show compassion makes my heart swell with pride.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3">Your Spirit</h3>
              <p className="text-rose-50">
                Your energy, your laughter, your way of seeing beauty in everything inspires me daily.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              My Promise to You
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I promise to always make you laugh, to support your dreams, and to be there
              through every high and low. I promise to cherish every moment we share and
              create countless more memories together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With you, I've found not just love, but my best friend, my partner, and my home.
            </p>
            <div className="inline-block">
              <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
              <p className="text-2xl font-semibold text-gray-800">Forever Yours,</p>
              <p className="text-3xl font-bold text-rose-600 mt-2">Nishad</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Made with love and dedication</p>
        </div>
      </div>
    </div>
  );
}

export default App;
