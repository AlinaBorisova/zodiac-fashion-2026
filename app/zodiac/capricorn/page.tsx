import Link from "next/link";

export default function CapricornPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-stone-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-700 via-amber-600 to-gray-800 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Козерог 2026
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гид по стилю для встречи года Красной Огненной Лошади
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 mb-6 sm:mb-8 transition-colors"
        >
          <span>←</span>
          <span>Назад к выбору</span>
        </Link>

        {/* Concept Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              ✨ Общая концепция
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Символ 2026 года — <strong className="text-red-600 dark:text-red-400">Красная Огненная Лошадь</strong>. Это год страсти, динамики и честности. Для Козерогов, знака земной стихии, важно найти баланс между своей природной сдержанностью и огненной энергией года.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ваш ключ к успеху — <strong className="text-amber-600 dark:text-amber-400">«Дорогая простота»</strong>. Образ должен транслировать статус, уверенность и стабильность. Откажитесь от кричащей мишуры в пользу благородных фактур и идеального кроя.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              🎨 Цветовая палитра
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Огненная Лошадь любит красный, но Козерогам лучше адаптировать тренд под свою «земную» натуру. Используйте глубокие, насыщенные оттенки, которые заземляют огненную энергию.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-4">
              <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                <div className="text-lg sm:text-xl font-bold">Терракота</div>
              </div>
              <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                <div className="text-lg sm:text-xl font-bold">Шоколад</div>
              </div>
              <div className="bg-gradient-to-br from-green-700 to-green-800 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                <div className="text-lg sm:text-xl font-bold">Олива</div>
              </div>
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                <div className="text-lg sm:text-xl font-bold">Графит</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                <div className="text-lg sm:text-xl font-bold">Золото</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic leading-relaxed">
              <em>Совет: Если хотите добавить яркости, используйте насыщенный винный (марсала) или глубокий изумрудный цвет.</em>
            </p>
          </div>
        </section>

        {/* Style & Materials Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              👗 Фасон и материалы
            </h2>
            <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1 font-bold">•</span>
                <span><strong className="text-amber-600 dark:text-amber-400">Ткани:</strong> Выбирайте натуральные, тактильно приятные материалы. Бархат, плотный шелк, кашемир или качественная шерсть. Лошадь ценит натуральность.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1 font-bold">•</span>
                <span><strong className="text-amber-600 dark:text-amber-400">Крой:</strong> Лаконичный и элегантный. Платье-футляр, брючный костюм с идеальной посадкой или юбка-макси с блузой сложного кроя.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1 font-bold">•</span>
                <span><strong className="text-amber-600 dark:text-amber-400">Комфорт:</strong> Лошадь — животное свободолюбивое. Ваша одежда не должна сковывать движений. Вам должно быть удобно танцевать и двигаться.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              💎 Аксессуары и детали
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Так как стихия года — Огонь, а цвет — Красный, добавьте золотые украшения, чтобы привлечь финансовое благополучие.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                <span>Массивные золотые серьги или браслеты.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                <span>Клатч с пайетками или металлической фурнитурой (как акцент).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                <span>Обувь на устойчивом каблуке — символ вашей твердой почвы под ногами.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Advice Box */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-red-500">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              <strong className="text-red-600 dark:text-red-400">⛔ Чего избегать:</strong> Кислотных, неоновых цветов и дешевой синтетики. Огненная Лошадь не терпит фальши, а Козерогу не к лицу «кричащая» безвкусица. Избегайте также чрезмерно мрачных, полностью черных луков без ярких аксессуаров.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-amber-600 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}