import Link from "next/link";

export default function GeminiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-purple-50 dark:from-gray-900 dark:via-yellow-900 dark:to-purple-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-500 via-amber-500 to-purple-600 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Новый Год 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гид по стилю для женщины-Близнеца
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

        {/* Intro Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Энергия 2026 года
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">🐎</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Символ</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Красная Огненная Лошадь</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">🔥</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Стихия</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Огонь</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
              <span className="text-5xl sm:text-6xl mb-4 block">♊</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Задача Близнецов</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Сиять, удивлять и быть в движении</p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Огненная Лошадь 2026 года — это страсть, динамика и свобода самовыражения. Для Близнецов это идеальное время: ваша природная легкость и креативность отлично резонируют с энергией года. Главное правило — никаких скучных и сковывающих нарядов!
          </p>
        </section>

        {/* Colors Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Цветовая палитра удачи
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            В 2026 году Близнецам стоит совместить свои счастливые цвета с огненной гаммой года. Ваша цель — найти баланс между воздушностью и страстью.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <span className="block text-xl sm:text-2xl font-bold mb-2">Желтый</span>
              <span className="text-xs sm:text-sm opacity-90">Ваш главный цвет удачи 2026</span>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <span className="block text-xl sm:text-2xl font-bold mb-2">Золотой</span>
              <span className="text-xs sm:text-sm opacity-90">Богатство и успех</span>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <span className="block text-xl sm:text-2xl font-bold mb-2">Красный</span>
              <span className="text-xs sm:text-sm opacity-90">Энергия Лошади</span>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <span className="block text-xl sm:text-2xl font-bold mb-2">Фиолетовый</span>
              <span className="text-xs sm:text-sm opacity-90">Интуиция и магия</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic leading-relaxed">
            <em>Совет: Если чистый красный кажется вам слишком агрессивным, выбирайте оттенки винного, терракотового или используйте его в аксессуарах. Желтый и золотой — идеальный выбор для привлечения финансового благополучия.</em>
          </p>
        </section>

        {/* Style & Fabrics */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Фасоны и материалы
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Струящиеся силуэты
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Лошадь любит свободу движений. Выбирайте платья из шелка, атласа или шифона. Асимметричный крой, разрезы на юбке или открытая спина подчеркнут вашу двойственную и игривую натуру.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Блеск и фактура
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Не бойтесь пайеток, люрекса и металлизированных тканей. Золотое платье-комбинация или брючный костюм из бархата глубокого винного цвета — тренд сезона.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
            Актуальные детали для Близнецов:
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                <span><strong className="text-yellow-600 dark:text-yellow-400">Асимметрия:</strong> Платья на одно плечо или с неровным подолом.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                <span><strong className="text-yellow-600 dark:text-yellow-400">Разрезы:</strong> Высокие разрезы на бедре, не сковывающие шаг в танце.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                <span><strong className="text-yellow-600 dark:text-yellow-400">Бахрома:</strong> Напоминает гриву лошади и красиво играет в движении.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1 font-bold">•</span>
                <span><strong className="text-yellow-600 dark:text-yellow-400">Трансформеры:</strong> Наряды со съемными элементами (рукава, шлейф), чтобы менять образ в течение ночи.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Beauty & Accessories */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Аксессуары и бьюти-образ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                Украшения
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                2026 год требует <strong className="text-yellow-600 dark:text-yellow-400">золота</strong>. Массивные серьги, многослойные цепи, крупные браслеты-каффы. Лошадь любит роскошь, но не вычурность.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Золотые украшения (предпочтительнее серебра).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Натуральные камни красных и желтых оттенков (рубин, янтарь, цитрин).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Клатчи жесткой формы с пайетками или металлической фурнитурой.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                Макияж и прическа
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Близнецам стоит сделать ставку на легкость. Избегайте "железобетонных" укладок.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span><strong>Волосы:</strong> "Конский хвост" (высокий и гладкий), легкие голливудские волны или небрежные локоны.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span><strong>Макияж:</strong> Акцент на губы (красная помада) или глаза (золотые/бронзовые смоки). Хайлайтер обязателен — кожа должна сиять.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Чек-лист: Да и Нет
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                ДА (можно)
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Яркие, насыщенные цвета (желтый, красный, золото)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Натуральные дорогие ткани</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Свободные фасоны, не стесняющие движений</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Новая, ни разу не надетая вещь (к обновлению)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Золотые украшения</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                НЕТ (нельзя)
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>❌</span>
                  <span>Скучные серые и блеклые тона</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span>
                  <span>Синтетика, в которой "не дышит" тело</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span>
                  <span>Слишком тесные корсеты</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span>
                  <span>Леопардовый и змеиный принт (хищники пугают Лошадь)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span>
                  <span>Дешевая бижутерия</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}