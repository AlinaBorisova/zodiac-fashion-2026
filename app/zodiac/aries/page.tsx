import Link from "next/link";

export default function AriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900 dark:to-orange-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Новый год 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гид по стилю для женщины-Овна
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
              Символ года: Красная Огненная Лошадь
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              2026 год пройдет под знаком стихии Огня. Лошадь ценит свободу, динамику, смелость и страсть. Для Овнов это родная стихия, поэтому ваш образ должен быть максимально выразительным, дерзким и энергичным. Скромность в эту ночь лучше отложить.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Главные цвета удачи
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#D32F2F' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Алый / Красный</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#800020' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Бордо / Гранат</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#FF7F50' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Коралловый</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#FFD700' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Золото</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#CD7F32' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Медь / Бронза</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div 
                className="w-full h-16 sm:h-20 rounded-lg mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: '#0047AB' }}
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Электрик (акцент)</p>
            </div>
          </div>
        </section>

        {/* Outfit Ideas */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Что надеть: идеальные фасоны
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg">
                  01
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Платье с открытыми плечами или спиной.</strong> Подчеркнет вашу женственность и огненную натуру. Асимметричный крой и высокие разрезы приветствуются.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg">
                  02
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Брючный костюм.</strong> Выбирайте варианты с жакетом "с мужского плеча" или приталенным силуэтом, но обязательно в ярком цвете (красный, бордо) или с блестящей фактурой.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg">
                  03
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Комбинезон из струящейся ткани.</strong> Удобный и стильный вариант для тех, кто планирует много танцевать. Выбирайте модели с широкими брюками палаццо.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg">
                  04
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Акцент на фактуру.</strong> Пайетки, металлизированные нити, бархат, атлас или шелк. Ткань должна "играть" и переливаться в свете огней.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessories */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Аксессуары и детали
          </h2>
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
                  ✦
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Украшения:</strong> Крупные, заметные украшения из золота, меди или бронзы. Массивные серьги-цепи, браслеты-каффы или колье-чокеры.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
                  ✦
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Обувь:</strong> Туфли на высоком каблуке или эффектные босоножки металлических оттенков. Обувь должна добавлять стати и уверенности.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
                  ✦
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-red-600 dark:text-red-400">Сумка:</strong> Клатч с металлическим блеском, пайетками или жесткой формы.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tip Card */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
              Совет стилиста для Овна:
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ваш образ в 2026 году — это «Управляемый Огонь». Не бойтесь выглядеть слишком ярко. Если выбираете красное платье, дополните его золотыми деталями. Если костюм темный (например, глубокий бордо), сделайте ставку на яркую красную помаду и крупные золотые украшения.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}