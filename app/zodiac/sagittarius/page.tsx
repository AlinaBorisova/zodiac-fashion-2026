import Link from "next/link";

export default function SagittariusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Стрелец: образ 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гид по стилю для встречи года Красной Огненной Лошади. Объединяем страсть огня и элегантность Юпитера.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Intro Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              🔥 Энергия Года
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              2026 год пройдет под покровительством <strong className="text-purple-600 dark:text-purple-400">Красной Огненной Лошади</strong>. Для девушки-Стрельца это время триумфа, так как ваша родная стихия — Огонь — совпадает с энергией года. Лошадь ценит свободу, динамику и смелость, что идеально резонирует с вашим характером. Ваш образ должен кричать о уверенности, авантюризме и роскоши.
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Ваша палитра удачи
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 dark:text-gray-400">
            Астрологи рекомендуют сочетать цвета огненной стихии с оттенками вашего покровителя Юпитера.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Фиолет</div>
              <div className="text-xs sm:text-sm opacity-90">(Юпитер)</div>
            </div>
            <div className="bg-gradient-to-br from-red-700 to-red-900 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Винный</div>
              <div className="text-xs sm:text-sm opacity-90">(Лошадь)</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Золото</div>
              <div className="text-xs sm:text-sm opacity-90">(Успех)</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Терракот</div>
              <div className="text-xs sm:text-sm opacity-90">(Огонь)</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">Изумруд</div>
              <div className="text-xs sm:text-sm opacity-90">(Акцент)</div>
            </div>
          </div>
        </section>

        {/* Fashion Trends Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Что надеть: тренды зимы 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">👗</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Силуэт и Ткани
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Струящиеся ткани:</strong> Шелк, атлас и бархат — главные фавориты для создания эффекта "жидкого огня".</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Драпировки и асимметрия:</strong> Платья с одним открытым плечом или глубоким разрезом на ноге подчеркнут свободолюбие Стрельца.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Пайетки:</strong> Тренд зимы 2026. Выбирайте платья, полностью расшитые пайетками в оттенках бургунди или темного золота.</span>
                </li>
              </ul>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">✨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Стиль Стрельца
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Бохо-Шик:</strong> Если строгая классика не для вас, выбирайте многослойные образы с этническими мотивами.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Комфорт + Роскошь:</strong> Лошадь любит движение. Ваш наряд не должен сковывать. Брючные костюмы из бархата или платье-комбинация поверх брюк — хит сезона.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Макси длина:</strong> Длинные платья в пол со шлейфом или "крыльями" (накидками) создадут королевский образ.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Beauty Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Бьюти-образ 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Макияж: "Vampy & Glow"
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Главный тренд новогодней ночи 2026 — сочетание идеальной сияющей кожи ("glass skin") с дерзкими акцентами.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm sm:text-base font-medium">
                  Винные губы
                </span>
                <span className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm sm:text-base font-medium">
                  Металлик на веках
                </span>
                <span className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm sm:text-base font-medium">
                  Цветные стрелки
                </span>
                <span className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm sm:text-base font-medium">
                  Активные румяна (80-е)
                </span>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Прическа: дерзость и женственность
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Никаких сложных "башен" из лака. В моде легкость и текстура.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-full text-sm sm:text-base font-medium">
                  Голливудская волна
                </span>
                <span className="px-3 sm:px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-full text-sm sm:text-base font-medium">
                  Эффект мокрых волос
                </span>
                <span className="px-3 sm:px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-full text-sm sm:text-base font-medium">
                  Ленты в волосах
                </span>
                <span className="px-3 sm:px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-full text-sm sm:text-base font-medium">
                  Гладкий высокий хвост
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Аксессуары и детали
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  💎 Украшения
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Массивность — ваше все. Крупные золотые серьги-кольца, многослойные цепи или винтажные броши. Золото предпочтительнее серебра, так как оно усиливает солнечную энергию Стрельца.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  👜 Сумка
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Необычный клатч — жесткой геометрической формы или, наоборот, мягкий "пельмешек" из бархата. Трендовый декор: бахрома или перья.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Чек-лист: да и нет
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                ✅ ДА
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>❤️</span>
                  <span>Красный, фиолетовый, золотой</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>💃</span>
                  <span>Разрезы, открытая спина</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✨</span>
                  <span>Массивные украшения</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>👠</span>
                  <span>Удобная, но эффектная обувь</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                ❌ НЕТ
              </h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>❄️</span>
                  <span>Холодный серый и серебро</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🤐</span>
                  <span>Слишком тесная, сковывающая одежда</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>😐</span>
                  <span>Скучные, "офисные" фасоны</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>👻</span>
                  <span>Бледный макияж без акцентов</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}