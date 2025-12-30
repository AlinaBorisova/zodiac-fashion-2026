import Link from "next/link";

export default function LibraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:via-pink-900 dark:to-amber-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-2">
            Гид по стилю • 2026
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Новый год для женщины-Весы
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Встречаем год Красной Огненной Лошади. Как сохранить воздушную гармонию Весов и угодить страстному символу года.
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
            <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-pink-600 dark:text-pink-400">2026 год</strong> пройдет под знаком <em>Красной Огненной Лошади</em>. Это год энергии, страсти и движения. Для утонченных Весов важно найти баланс между своей любовью к эстетике и динамикой огненной стихии. Астрологи рекомендуют делать ставку на <strong className="text-amber-600 dark:text-amber-400">«Розовое золото»</strong> — идеальный компромисс между роскошью и нежностью.
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Цветовая палитра удачи
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md"
                style={{ backgroundColor: '#B76E79' }}
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Розовое золото
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Главный цвет силы для Весов в 2026 году. Сочетает блеск огня и мягкость Венеры.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md"
                style={{ backgroundColor: '#722F37' }}
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Винный / Марсала
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Благородный оттенок красного, который понравится Лошади, но не будет агрессивным.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md"
                style={{ backgroundColor: '#FFCC99' }}
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Нежный персик
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Воздушный и теплый оттенок для создания романтичного и легкого образа.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md"
                style={{ backgroundColor: '#B87333' }}
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Медь и бронза
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Теплые металлические оттенки принесут финансовую удачу и уверенность.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Looks Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Идеи образов
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <span className="text-5xl sm:text-6xl mb-4 block">✨</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Блестящая элегантность
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Платье-комбинация из шелка или атласа в цвете "шампань" или "розовое золото".</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Струящаяся ткань подчеркнет стихию Воздуха.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Дополните образ накидкой из полупрозрачной ткани или легким боа.</span>
                </li>
              </ul>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <span className="text-5xl sm:text-6xl mb-4 block">💃</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Огненная динамика
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Брючный костюм свободного кроя из бархата винного оттенка.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Лошадь любит свободу движений — никаких жестких корсетов.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Асимметричный топ на одно плечо добавит изюминку.</span>
                </li>
              </ul>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <span className="text-5xl sm:text-6xl mb-4 block">🎀</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Романтичный шик
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Плиссированная юбка миди персикового цвета с металлизированной нитью.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Объемный свитер-паутинка или топ с пайетками.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Акцент на талии с помощью золотистого ремня.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Fabrics and Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                🧵 Ткани и фактуры
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Красная Огненная Лошадь ценит натуральность и качество. Дешевая синтетика под запретом.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span><strong>Бархат и велюр:</strong> создают ощущение роскоши и уюта.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span><strong>Натуральный шелк:</strong> идеально для Весов, дарит прохладу и блеск.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span><strong>Пайетки и люрекс:</strong> уместны в меру, чтобы имитировать искры огня.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                💎 Аксессуары
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Золото — металл 2026 года. Серебро лучше отложить, если оно не имеет теплого подтона или позолоты.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Крупные серьги или колье из розового или желтого золота.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Украшения с натуральными камнями: гранат, рубин, янтарь (для поддержки Огня).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                  <span>Клатчи необычной формы, но удобные в руке.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-trends Section */}
        <section className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Чего лучше избегать в эту ночь
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl text-red-500">✕</span>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Тотальный черный (слишком мрачно)</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl text-red-500">✕</span>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Кислотные неоновые цвета</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl text-red-500">✕</span>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Леопардовый принт (Лошадь — не хищник)</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl text-red-500">✕</span>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Сковывающая одежда</span>
            </div>
          </div>
        </section>

        {/* Beauty Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Бьюти-образ
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                Макияж
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Сияющая кожа ("эффект влажного свечения"). Теплые тени (золотистые, бронзовые). Для губ выберите ягодные оттенки или классический красный, если наряд сдержанный.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                Прическа
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Легкая небрежность. "Голливудская волна", низкий гладкий хвост или распущенные локоны. Главное — волосы должны выглядеть живыми и подвижными.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}