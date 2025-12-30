import Link from "next/link";

export default function PiscesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Рыбы
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Образ для Нового года 2026
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Symbol Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Символ 2026 года: Красная Огненная Лошадь
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              В 2026 году правит <span className="text-red-600 dark:text-red-400 font-semibold">Красная Огненная Лошадь</span>. Это знак страсти, динамики, свободы и благородства. Стихия огня требует яркости и самовыражения, однако Лошадь ценит элегантность и качество, а не дешевый блеск.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Для Рыб это год контрастов: ваша водная стихия встречается с огнем года. Задача — найти баланс между своей природной романтичностью и огненной энергией праздника.
            </p>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Идеальная палитра для Рыб
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Астрологи рекомендуют Рыбам отказаться от слишком агрессивного красного в пользу оттенков, которые отражают вашу глубину, но имеют «искру», чтобы задобрить Лошадь.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#4B0082' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Индиго</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#20B2AA' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Морская волна</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md bg-gradient-to-br from-yellow-400 to-yellow-600"
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Золото</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#E6E6FA' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Жемчужный</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#800020' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Глубокий винный</p>
            </div>
          </div>

          <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
              <span><strong className="text-indigo-600 dark:text-indigo-400">Фиолетовый и Индиго:</strong> Мистические цвета, идеально резонирующие с интуицией Рыб.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
              <span><strong className="text-indigo-600 dark:text-indigo-400">Морская волна с золотом:</strong> Компромисс стихий. Вода — ваша стихия, золото — дань уважения Огненной Лошади.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
              <span><strong className="text-indigo-600 dark:text-indigo-400">Жемчужно-белый:</strong> Символ чистоты и начала нового цикла.</span>
            </li>
          </ul>
        </section>

        {/* Outfits Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Фасоны и материалы
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Лошадь любит движение, поэтому одежда не должна сковывать. Для Рыб ключевые слова: <span className="text-indigo-600 dark:text-indigo-400 font-semibold">текучесть, мерцание, загадка</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">👗</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Платье-русалка
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Облегающий силуэт с расширением к низу, желательно из ткани с пайетками-«чешуей».
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">👘</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Пижамный шик
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Шелковый костюм свободного кроя. Элегантно, удобно и очень модно.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">✨</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Струящиеся ткани
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Атлас, натуральный шелк, шифон, бархат. Ткань должна «играть» на свету.
              </p>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Аксессуары и образ
            </h2>
            <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
                <span><strong className="text-indigo-600 dark:text-indigo-400">Украшения:</strong> Обязательно золото (желтое или розовое). Камни: аквамарин, жемчуг, перламутр.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
                <span><strong className="text-indigo-600 dark:text-indigo-400">Обувь:</strong> Туфли цвета металлик или с блестящим декором. Удобная колодка, чтобы можно было танцевать.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
                <span><strong className="text-indigo-600 dark:text-indigo-400">Макияж:</strong> «Влажный» эффект кожи, хайлайтер, тени с шиммером. Акцент на глаза.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">•</span>
                <span><strong className="text-indigo-600 dark:text-indigo-400">Прическа:</strong> Мягкие «голливудские» волны или слегка небрежные локоны.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What to Avoid Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
              Чего избегать
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Чтобы не отпугнуть удачу, откажитесь от:
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                <span>Дешевой синтетики и кислотных неоновых цветов.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                <span>Хищных "животных" принтов (леопард, змея) — Лошадь их не жалует.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                <span>Скучной домашней одежды (халатов, старых джинсов).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}