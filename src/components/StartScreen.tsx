interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#334155]">
      {/* Animated geometric background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-fade-in"
        >
          <circle
            cx="720"
            cy="450"
            r="320"
            fill="url(#radial)"
            opacity="0.18"
          />
          <defs>
            <radialGradient
              id="radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(720 450) scale(320)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#0ea5e9" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-8 py-12 rounded-3xl shadow-xl bg-white/80 backdrop-blur-lg border border-sky-200 animate-slide-up">
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 mb-4 animate-pop">
          Soc Ops
        </h1>
        <p className="font-serif text-xl text-sky-900 mb-8 animate-fade-in delay-100">
          Social Bingo, Reimagined
        </p>

        {/* How to play section with staggered animation */}
        <div className="w-full bg-white/90 rounded-xl p-6 shadow-md border border-sky-100 mb-8 animate-fade-in delay-200">
          <h2 className="font-semibold text-sky-700 mb-3 text-lg">
            How to Play
          </h2>
          <ul className="text-left text-sky-800 text-base space-y-2">
            <li className="animate-fade-in delay-300">
              🔍 Find people who match the questions
            </li>
            <li className="animate-fade-in delay-400">
              🟦 Tap a square when you find a match
            </li>
            <li className="animate-fade-in delay-500">
              🏆 Get 5 in a row to win!
            </li>
          </ul>
        </div>

        {/* Call to action button with motion */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold py-5 px-10 rounded-xl text-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-400 transition-all duration-300 animate-pop delay-600"
        >
          Start Game
        </button>

        {/* Footer with playful tagline */}
        <div className="mt-10 text-xs text-sky-700 opacity-80 animate-fade-in delay-700">
          <span>Ready to break the ice? Let the games begin!</span>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        .animate-fade-in { opacity: 0; animation: fadeIn 1s forwards; }
        .animate-slide-up { transform: translateY(40px); opacity: 0; animation: slideUp 1.2s cubic-bezier(.68,-0.55,.27,1.55) forwards; }
        .animate-pop { transform: scale(0.95); opacity: 0; animation: popIn 0.8s cubic-bezier(.68,-0.55,.27,1.55) forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes slideUp { to { transform: translateY(0); opacity: 1; } }
        @keyframes popIn { to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
