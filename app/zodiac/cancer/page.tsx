import Link from "next/link";

export default function CancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-pink-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-400 via-pink-300 to-blue-300 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Образ для женщины-Рака
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Встречаем Новый год 2026: Год Огненной Лошади
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Concept Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Главная концепция образа
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              2026 год пройдет под покровительством <strong className="text-pink-600 dark:text-pink-400">Красной Огненной Лошади</strong>. Для чувствительных и женственных Раков это вызов — соединить свою водную натуру с огненной энергией года. Ваш идеальный образ должен транслировать <em className="text-slate-600 dark:text-slate-400">«мягкую силу»</em>: гармонию, утонченность и домашний уют, приправленный благородным блеском.
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Идеальная палитра
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Астрологи рекомендуют Ракам избегать агрессивного красного "тотал-лука", несмотря на стихию года. Ваша сила — в сложных, сияющих оттенках, которые успокаивают Огненную Лошадь.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md border-2 border-amber-200 dark:border-amber-700">
                <div className="text-lg sm:text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">Шампань</div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-gray-200 dark:from-slate-700 dark:to-gray-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md border-2 border-slate-300 dark:border-slate-600">
                <div className="text-lg sm:text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">Жемчуг</div>
              </div>
              <div className="bg-gradient-to-br from-pink-300 to-rose-400 dark:from-pink-700 dark:to-rose-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-lg sm:text-xl font-bold mb-2 text-white">Розовое золото</div>
              </div>
              <div className="bg-gradient-to-br from-green-200 to-emerald-300 dark:from-green-700 dark:to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md">
                <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Мятный</div>
              </div>
            </div>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Жемчужно-белый:</strong> Главный цвет силы для Рака в 2026 году. Символизирует интуицию и чистоту.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Серебристый и дымчатый:</strong> Подчеркивают загадочность вашего знака.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Акценты:</strong> Чтобы угодить Лошади, добавьте к пастельному наряду золотые украшения или аксессуары теплых тонов (персиковый, терракотовый).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Fabrics and Style Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Фасоны и материалы
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Лошадь ценит свободу движения и благородство, а Рак — комфорт. Откажитесь от жестких корсетов и строгих костюмов.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Струящиеся ткани:</strong> Натуральный шелк, атлас, шифон или легкий бархат. Ткань должна "течь", как вода.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Женственные силуэты:</strong> Платья в бельевом стиле, юбки-миди с мягкими складками, блузы с объемными рукавами.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Детали:</strong> Кружево, воланы, открытая спина или плечи — элементы, подчеркивающие вашу чувственность.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Украшения и аксессуары
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Детали сделают образ завершенным. В 2026 году для Рака важна эмоциональная привязка к вещам.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Семейные реликвии:</strong> Винтажная брошь или бабушкино колье станут лучшим оберегом.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Жемчуг и лунный камень:</strong> Идеальные камни для вашего знака в эту ночь.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 mt-1 font-bold">•</span>
                <span><strong className="text-pink-600 dark:text-pink-400">Мягкий блеск:</strong> Выбирайте клатчи с перламутровым переливом или туфли цвета металлик, но не слишком кричащие.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Anti-trends Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
              Чего стоит избегать
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Чтобы не спугнуть удачу, откажитесь от следующих решений:
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Хищные принты:</strong> Леопард и змеиная кожа под строгим запретом — Лошадь их не любит.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Неон и кислотные цвета:</strong> Выглядит дешево и раздражает благородный символ года.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Острые углы:</strong> Избегайте агрессивной геометрии в крое и украшениях.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}