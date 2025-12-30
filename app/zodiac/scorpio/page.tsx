import Link from "next/link";

export default function ScorpioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-gray-50 dark:from-gray-900 dark:via-red-900 dark:to-purple-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-800 via-purple-800 to-red-900 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Скорпион 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Магнетизм, страсть и энергия огня
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Symbol Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              🔥 Символ года: Красная Огненная Лошадь
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              2026 год пройдет под знаком безудержной энергии, страсти и движения вперед. 
              Для Скорпиона это идеальное время проявить свою природную сексуальность и мистическую притягательность. 
              Лошадь не любит скуку — ваш образ должен быть смелым, драматичным и запоминающимся.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Colors */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
              Палитра силы
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span 
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md border-2 border-white dark:border-gray-700"
                  style={{ backgroundColor: '#800020' }}
                />
                <div className="flex-1">
                  <span className="font-semibold text-red-700 dark:text-red-400">Бургунди и Марсала</span> — ваш главный "козырь". Глубокий винный оттенок подчеркнет вашу власть и страсть.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span 
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md border-2 border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: '#000000' }}
                />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-300">Мистический Черный</span> — допустим, но обязательно с яркими "огненными" акцентами (золото, красный).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span 
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md border-2 border-white dark:border-gray-700"
                  style={{ backgroundColor: '#4b0082' }}
                />
                <div className="flex-1">
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Глубокий Пурпур</span> — цвет магии и интуиции, идеально резонирующий с вашей натурой.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span 
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md border-2 border-white dark:border-gray-700"
                  style={{ backgroundColor: '#d4af37' }}
                />
                <div className="flex-1">
                  <span className="font-semibold text-yellow-700 dark:text-yellow-400">Золото и Медь</span> — чтобы задобрить стихию Огня и привлечь богатство.
                </div>
              </li>
            </ul>
          </article>

          {/* Fabrics & Textures */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
              Ткани и фактуры
            </h3>
            <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span><span className="font-semibold text-red-700 dark:text-red-400">Бархат</span> — королевская ткань, создающая ощущение роскоши и глубины.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span><span className="font-semibold text-red-700 dark:text-red-400">Шелк и Атлас</span> — текучие ткани, подчеркивающие изгибы фигуры (стихия Воды + энергия Огня).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span><span className="font-semibold text-red-700 dark:text-red-400">Кожа</span> — для создания дерзкого, слегка "хищного" образа, который любит Лошадь.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span><span className="font-semibold text-red-700 dark:text-red-400">Полупрозрачные вставки</span> — интрига и загадка, свойственные только Скорпионам.</span>
              </li>
            </ul>
          </article>
        </div>

        {/* The Look Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Ваш идеальный образ
            </h3>
            <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Откажитесь от скромности. В новогоднюю ночь 2026 Скорпион должен сиять. 
                Идеальный выбор — <strong className="text-red-600 dark:text-red-400">платье в пол с высоким разрезом</strong> или открытой спиной. 
                Если предпочитаете брюки, выберите элегантный комбинезон из струящейся ткани или 
                брючный костюм темно-бордового цвета на голое тело (или с кружевным бра).
                Стиль — <span className="font-semibold text-purple-600 dark:text-purple-400">«Drama Queen»</span> или <span className="font-semibold text-purple-600 dark:text-purple-400">«Роковая Женщина»</span>.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Аксессуары и макияж
            </h3>
            <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong className="text-red-600 dark:text-red-400">Украшения:</strong> Массивное золото, крупные серьги-кольца, чокеры с красными камнями (рубин, гранат). 
                Змеиная тематика в украшениях усилит вашу природную энергетику.
              </p>
              <p>
                <strong className="text-red-600 dark:text-red-400">Бьюти-образ:</strong> Акцент на губы — винные, темно-красные, сливовые оттенки. 
                Глаза можно выделить в технике "smoky eyes" с добавлением бронзовых или медных теней, 
                чтобы отразить стихию Огня.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Быстрые советы
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
              <span className="text-4xl sm:text-5xl mb-4 block">❌</span>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Избегайте скучного серого и блеклых пастельных тонов без аксессуаров.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-yellow-500">
              <span className="text-4xl sm:text-5xl mb-4 block">✨</span>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Добавьте блеска: пайетки или металлизированная нить приветствуются.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500">
              <span className="text-4xl sm:text-5xl mb-4 block">👠</span>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Обувь должна быть изящной, но удобной для танцев до утра.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}