interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-yellow-200 overflow-hidden">
      {/* Pixel art background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
        <div className="w-full h-24 bg-pink-400 pixel-border-top" />
        <div className="flex-1 bg-blue-300" />
        <div className="w-full h-24 bg-green-400 pixel-border-bottom" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-8 py-12 rounded-2xl shadow-xl bg-white border-4 border-blue-500 pixel-border animate-slide-up">
        <h1 className="font-retro text-5xl font-extrabold text-pink-500 mb-4 animate-pop">
          Soc Ops
        </h1>
        <p className="font-retro text-lg text-blue-700 mb-8 animate-fade-in delay-100">
          Social Bingo, Retro Edition
        </p>

        {/* How to play section with pixel art */}
        <div className="w-full bg-yellow-100 rounded-lg p-6 shadow-md border-4 border-green-400 mb-8 animate-fade-in delay-200">
          <h2 className="font-retro text-green-700 mb-3 text-lg">
            How to Play
          </h2>
          <ul className="text-left text-blue-800 text-base space-y-2">
            <li className="animate-fade-in delay-300">
              🕹️ Find people who match the questions
            </li>
            <li className="animate-fade-in delay-400">
              🟩 Tap a square when you find a match
            </li>
            <li className="animate-fade-in delay-500">
              🏆 Get 5 in a row to win!
            </li>
          </ul>
        </div>

        {/* Call to action button with pixel style */}
        <button
          onClick={onStart}
          className="w-full bg-pink-400 text-white font-retro py-4 px-8 rounded-lg text-lg border-4 border-blue-500 shadow-lg hover:bg-green-400 hover:text-blue-900 transition-all duration-300 animate-pop delay-600"
        >
          Start Game
        </button>

        {/* Footer with playful tagline */}
        <div className="mt-10 text-xs text-green-700 opacity-80 animate-fade-in delay-700 font-retro">
          <span>Press Start to play!</span>
        </div>
      </div>

      {/* Custom retro font and pixel border styles */}
      <style>{`
        .font-retro { font-family: 'Press Start 2P', monospace; }
        .pixel-border { box-shadow: 0 0 0 4px #222, 0 0 0 8px #fff; }
        .pixel-border-top { box-shadow: 0 4px 0 0 #222; }
        .pixel-border-bottom { box-shadow: 0 -4px 0 0 #222; }
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
      {/* Google Fonts: Press Start 2P */}
      <link
        href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
