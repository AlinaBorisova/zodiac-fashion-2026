import Link from "next/link";

export default function AquariusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-cyan-900 dark:to-indigo-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Новый год 2026: гид для Водолея
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Год Красной Огненной Лошади — время для смелых экспериментов и футуризма
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Introduction Card */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              🔥 Энергия года и ваш знак
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              2026 год пройдет под покровительством <strong className="text-orange-600 dark:text-orange-400">Огненной Лошади</strong>. Это символ неукротимой энергии, страсти и движения вперед. Для воздушного Водолея это идеальное время, чтобы проявить свою креативность.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Вам не обязательно одеваться в красное с ног до головы. Лошадь ценит смелость и нестандартный подход, которые являются вторым именем Водолея. Ваш ключ к успеху — <strong className="text-cyan-600 dark:text-cyan-400">футуристичный шик</strong>.
            </p>
          </div>
        </section>

        {/* Color Palette Card */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              🎨 Главные цвета ночи
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Звезды рекомендуют Водолеям отказаться от скучных и «земных» оттенков. Ваша палитра должна напоминать о космосе, технологиях и свободе.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg border-4 border-white dark:border-gray-800"></div>
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">Неоновый голубой</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-300 to-slate-400 shadow-lg border-4 border-white dark:border-gray-800"></div>
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">Жидкое серебро</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg border-4 border-white dark:border-gray-800"></div>
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">Ультрамарин</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-red-700 to-red-900 shadow-lg border-4 border-white dark:border-gray-800"></div>
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">Акцент: Бордо</span>
              </div>
            </div>
          </div>
        </section>

        {/* Style & Fabrics Card */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              👗 Фасон и материалы
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              В эту ночь вы должны выглядеть как гостья из будущего. Забудьте о классических вечерних платьях в пол — выбирайте дерзость и геометрию.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Асимметрия:</strong> Платья на одно плечо, неровные подолы, сложные вырезы на талии или спине.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Ткани:</strong> Металлизированные ткани, пайетки (эффект рыбьей чешуи), люрекс, гладкий атлас, винил или эко-кожа.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Силуэт:</strong> Свободный, струящийся, но с четкими акцентами. Подойдут комбинезоны с широкими брюками палаццо.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm sm:text-base font-medium">
                Футуризм
              </span>
              <span className="px-3 sm:px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm sm:text-base font-medium">
                Металлик
              </span>
              <span className="px-3 sm:px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm sm:text-base font-medium">
                Авангард
              </span>
            </div>
          </div>
        </section>

        {/* Accessories Card */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              💎 Аксессуары и детали
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Именно детали сделают образ завершенным. Огненная Лошадь любит блеск, а Водолей — оригинальность.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Украшения:</strong> Массивные серебряные каффы, чокеры из металла, кольца геометрических форм.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Обувь:</strong> Туфли или босоножки цвета металлик, каблуки необычной формы.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">•</span>
                <span><strong className="text-cyan-600 dark:text-cyan-400">Макияж:</strong> Акцент на глаза — сияющие стрелки, глиттер, холодные хайлайтеры.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Warning Card */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
              ⛔ Чего избегать
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Чтобы не спугнуть удачу в 2026 году, откажитесь от:
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>Скучных базовых цветов (бежевый, серый, мышиный).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>Старых, заношенных вещей — образ должен транслировать новизну.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>Чрезмерной скромности — позвольте себе сиять.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}