import Link from "next/link";

const zodiacSigns = [
  { id: "aries", name: "Овен", emoji: "♈", color: "from-red-500 to-orange-500" },
  { id: "taurus", name: "Телец", emoji: "♉", color: "from-green-500 to-emerald-500" },
  { id: "gemini", name: "Близнецы", emoji: "♊", color: "from-yellow-500 to-amber-500" },
  { id: "cancer", name: "Рак", emoji: "♋", color: "from-silver-400 to-gray-300" },
  { id: "leo", name: "Лев", emoji: "♌", color: "from-yellow-400 to-orange-400" },
  { id: "virgo", name: "Дева", emoji: "♍", color: "from-green-400 to-teal-400" },
  { id: "libra", name: "Весы", emoji: "♎", color: "from-pink-400 to-rose-400" },
  { id: "scorpio", name: "Скорпион", emoji: "♏", color: "from-red-600 to-red-800" },
  { id: "sagittarius", name: "Стрелец", emoji: "♐", color: "from-purple-500 to-indigo-500" },
  { id: "capricorn", name: "Козерог", emoji: "♑", color: "from-gray-600 to-gray-800" },
  { id: "aquarius", name: "Водолей", emoji: "♒", color: "from-blue-400 to-cyan-400" },
  { id: "pisces", name: "Рыбы", emoji: "♓", color: "from-blue-500 to-indigo-500" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Welcome Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Стиль на Новый год 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Откройте свой уникальный стиль одежды на Новый год по знаку зодиака
          </p>
          <div className="mt-4 sm:mt-6 text-6xl sm:text-7xl lg:text-8xl">
            ✨🎄🎁
          </div>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/zodiac/${sign.id}`}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sign.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {sign.emoji}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {sign.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <p>Выберите свой знак зодиака и узнайте свой стиль на 2026 год</p>
        </div>
      </main>
    </div>
  );
}