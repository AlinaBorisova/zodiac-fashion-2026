import Link from "next/link";

export default function VirgoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900 dark:to-green-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-amber-500 via-green-600 to-amber-600 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-2">
            Новый год 2026 • Год Красной Огненной Лошади
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Звездный стиль для Девы
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Практичное руководство по созданию идеального образа. Элегантность, качество и благородство — ваши главные ключи к успеху в год Огненной Лошади.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Philosophy Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Главная концепция
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Символ 2026 года — <strong className="text-red-600 dark:text-red-400">Красная Огненная Лошадь</strong>. Это животное ценит страсть, движение и прямоту, но для земной Девы важна гармония стихий. Ваш идеальный образ в новогоднюю ночь — это <em className="text-amber-600 dark:text-amber-400">«тихая роскошь»</em> (Quiet Luxury). Избегайте кричащей вульгарности. Лошадь уважает ваше врожденное чувство стиля, аккуратность и внимание к деталям.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Ваша палитра удачи
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Девам стоит делать ставку на природные, «дорогие» оттенки, разбавленные золотом Огня.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#F5DEB3' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Шампань</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#800020' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Винный / Бордо</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#556B2F' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Глубокий оливковый</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#8B4513' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Шоколад</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md bg-gradient-to-br from-yellow-500 to-yellow-600"
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Золото / Бронза</p>
            </div>
          </div>
        </section>

        {/* Outfit Ideas */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Что надеть: 3 идеальных образа
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Платье-комбинация из шелка
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Выбирайте длину миди или макси. Струящаяся ткань в оттенках топленого молока, карамели или жемчужно-серого цвета подчеркнет вашу женственность. Накиньте на плечи жакет оверсайз, чтобы добавить образу структурности.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Бархатный брючный костюм
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Хит сезона 2026. Глубокий бордовый или изумрудный бархат выглядит по-королевски. Брюки должны быть свободными (палаццо), а жакет — слегка приталенным. Это комфорт, который любит Дева, и роскошь, которую ценит Лошадь.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Юбка плиссе и акцентный топ
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Сочетайте юбку металлического оттенка (бронза или теплое золото) со спокойным кашемировым джемпером или лаконичной блузой. Баланс текстур успокоит огненную стихию года и подчеркнет ваш вкус.
              </p>
            </div>
          </div>
        </section>

        {/* Accessories & Beauty */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Детали образа
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                Аксессуары
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                  <span><strong className="text-green-600 dark:text-green-400">Золото:</strong> Обязательный элемент 2026 года. Массивные серьги или многослойные цепи.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                  <span><strong className="text-green-600 dark:text-green-400">Камни:</strong> Янтарь, гранат или сердолик добавят энергии Огня.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                  <span><strong className="text-green-600 dark:text-green-400">Сумка:</strong> Жесткий клатч геометрической формы.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                Бьюти-образ
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                  <span><strong className="text-green-600 dark:text-green-400">Макияж:</strong> "Old Money" — идеальный тон, ухоженные брови и акцент на губы (терракотовый или теплый красный).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                  <span><strong className="text-green-600 dark:text-green-400">Маникюр:</strong> Однотонное покрытие винного цвета или золотой френч.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Taboos Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-900/20 dark:to-green-900/20 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-amber-500">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Чего избегать Деве в эту ночь
            </h3>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Небрежность:</strong> Лошадь не прощает растянутых футболок и домашней одежды, даже если вы празднуете дома.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Холодные цвета:</strong> Старайтесь избегать тотального черного, синего и серебряного без теплых золотых акцентов. Это цвета Воды, которая конфликтует с Огнем года.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1 font-bold">•</span>
                <span><strong className="text-red-600 dark:text-red-400">Дешевая синтетика:</strong> Делайте ставку на качество ткани, а не на обилие дешевых блесток.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-amber-500 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}