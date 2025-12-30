import Link from "next/link";

export default function LeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-yellow-900 dark:to-orange-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-2">
            Новый Год 2026 • Год Красной Огненной Лошади
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Королевский выход Льва
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гид по стилю для женщин знака Лев: как засиять в главную ночь года, привлечь удачу и укротить огненную стихию.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Symbol Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Символ года: Огненная Лошадь
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              2026 год пройдет под знаком <span className="text-red-600 dark:text-red-400 font-semibold">Красной Огненной Лошади</span>. Это время безудержной энергии, страсти, напора и благородства. Стихия Огня идеально резонирует с натурой Льва, усиливая вашу природную харизму и желание быть в центре внимания.
            </p>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-yellow-500">
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                <strong className="text-yellow-600 dark:text-yellow-400">Главное правило для Льва:</strong> Не скромничайте. В эту ночь вы — королева бала. Лошадь любит смелых, ярких и уверенных в себе личностей.
              </p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Палитра удачи
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Золото и металлик
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Главный выбор для Львицы. Символ богатства, солнечной энергии и статуса. Пайетки, люрекс или жидкое золото.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-red-600 to-red-800 shadow-md"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Алый и бордо
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Цвет стихии года. Выбирайте насыщенные, дорогие оттенки: кармин, винный, марсала. Страсть и лидерство.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-purple-600 to-purple-800 shadow-md"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Королевский пурпур
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Цвет власти и мистики. Идеально сочетается с золотыми украшениями и придает образу загадочность.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-24 h-24 sm:h-24 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-gray-800 to-black shadow-md"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  Глубокий черный
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Допустим только при наличии ярких акцентов. Используйте бархат или кожу, дополняя образ крупным золотом.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outfit Ideas */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Идеальный образ
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="text-5xl sm:text-6xl flex-shrink-0">✨</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                    Блеск и сияние
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Платья, полностью расшитые пайетками, или наряды из ткани "металлик". Лев должен сиять буквально. Фасон может быть лаконичным (например, платье-футляр), если ткань сама по себе является акцентом.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="text-5xl sm:text-6xl flex-shrink-0">👑</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                    Роскошные фактуры
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Откажитесь от простого хлопка. Ваш выбор на 2026 год — <strong className="text-yellow-600 dark:text-yellow-400">бархат, плотный шелк, атлас или парча</strong>. Эти ткани создают ощущение тяжелого люкса, который так любит Огненная Лошадь.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="text-5xl sm:text-6xl flex-shrink-0">✂️</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                    Дерзкий крой
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Асимметрия, высокий разрез на бедре, открытая спина или глубокое декольте. Выберите одну акцентную зону. Лошадь ценит свободу движений, поэтому наряд не должен сковывать.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="mb-8 sm:mb-12">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Аксессуары
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Крупное золото:</strong> Массивные серьги, колье-цепи или широкие браслеты. Бижутерия должна выглядеть дорого.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Акцент на волосы:</strong> Диадемы, золотые ободки или заколки с камнями. Львиная грива — ваша гордость.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Сумка:</strong> Клатч жесткой формы с блестками или металлической фурнитурой.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Бьюти-образ
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Прическа:</strong> Голливудские локоны, высокий "конский" хвост (дань символу года) или гладкая укладка с эффектом мокрых волос.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Макияж:</strong> Золотистые тени, глиттер, классические стрелки или яркая красная помада. Кожа должна сиять (используйте хайлайтер).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                  <span><strong className="text-yellow-600 dark:text-yellow-400">Маникюр:</strong> Красный лак, золотая втирка, дизайн "кошачий глаз" или фольга.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              ⛔ Анти-тренды для Льва в 2026
            </h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Категорически избегайте скучных домашних образов, старых футболок, джинсов (даже нарядных) и дешевых синтетических тканей. Не стоит выбирать «мышиные» серые цвета или бледную пастель — они погасят вашу огненную энергию.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}