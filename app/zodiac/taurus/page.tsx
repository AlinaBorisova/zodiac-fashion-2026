import Link from "next/link";

export default function TaurusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 dark:from-gray-900 dark:via-green-900 dark:to-amber-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-amber-500 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-2">
            Новый год 2026 • Год Красной Огненной Лошади
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            В чем встречать женщине-Тельцу
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto">
            Гармония земной стихии и огненной страсти
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

        {/* Main Strategy Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Главная стратегия образа
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
            <p className="text-lg sm:text-xl italic text-green-700 dark:text-green-400 mb-4 leading-relaxed border-l-4 border-green-500 pl-4">
              Женщина-Телец в 2026 году — это воплощение «тихой роскоши». Ваш образ должен транслировать стабильность, уверенность и благородство, чтобы задобрить импульсивную Огненную Лошадь, не изменяя своей природе.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Символ года ценит натуральность и свободу движения, что идеально совпадает с любовью Тельцов к комфорту. Главное правило: <strong className="text-green-600 dark:text-green-400">дорогие ткани, глубокие цвета и никаких стесняющих корсетов.</strong>
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Идеальная палитра
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <article className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Изумрудный зеленый
              </h3>
              <p className="text-base sm:text-lg opacity-95 leading-relaxed">
                Ваш главный цвет удачи. Он символизирует рост, финансовое благополучие и гармонию с природой. Глубокий зеленый цвет сбалансирует огненную энергию года.
              </p>
            </article>
            
            <article className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Золото и шампань
              </h3>
              <p className="text-base sm:text-lg opacity-95 leading-relaxed">
                Дань уважения Огненной Лошади. Металлический блеск, оттенки песка и теплого золота привлекут богатство. Выбирайте не кричащий блеск, а благородное сияние.
              </p>
            </article>
            
            <article className="bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Винный и терракота
              </h3>
              <p className="text-base sm:text-lg opacity-95 leading-relaxed">
                Если хотите добавить страсти, выбирайте землистые оттенки красного: бордо, марсала или терракотовый. Это идеальный компромисс между вашей стихией Земли и Огнем 2026 года.
              </p>
            </article>
          </div>
        </section>

        {/* Fabrics Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Ткани и фактуры
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Тельцы — главные гедонисты зодиака, поэтому тактильные ощущения выходят на первый план. Откажитесь от дешевой синтетики в пользу натуральных волокон.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 border-2 border-emerald-200 dark:border-emerald-700">
              Бархат
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 border-2 border-emerald-200 dark:border-emerald-700">
              Плотный шелк
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 border-2 border-emerald-200 dark:border-emerald-700">
              Кашемир
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 border-2 border-emerald-200 dark:border-emerald-700">
              Атлас
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 border-2 border-emerald-200 dark:border-emerald-700">
              Замша
            </span>
          </div>
        </section>

        {/* Style Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Стиль и фасоны
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Платье-комбинация
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Из плотного шелка или атласа в пол. Дополните его объемным жакетом или кашемировой накидкой, чтобы добавить уюта.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Бархатный костюм
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Брючный костюм свободного кроя из мягкого бархата изумрудного или шоколадного цвета. Это одновременно и статусно, и невероятно удобно.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Струящиеся силуэты
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Лошадь любит движение. Юбки-плиссе, широкие рукава или платья с открытой спиной создадут нужную динамику.
              </p>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Аксессуары и детали
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Минимализм, но высшего качества. Огненная Лошадь не любит подделок, а Телец ценит инвестиции.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                <span><strong className="text-green-600 dark:text-green-400">Украшения:</strong> Массивное золото, крупные изумруды или гранаты. Винтажные броши будут очень кстати.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                <span><strong className="text-green-600 dark:text-green-400">Обувь:</strong> Удобные лодочки или босоножки на устойчивом каблуке. Телец должен твердо стоять на ногах.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1 font-bold">•</span>
                <span><strong className="text-green-600 dark:text-green-400">Макияж:</strong> «Дорогая» естественность. Сияющая кожа, золотистые тени и помада теплых ягодных оттенков.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Advice Box */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              <span className="text-2xl sm:text-3xl mr-2">⭐</span>
              <strong>Совет звезд:</strong> Добавьте к образу одну деталь из натуральной кожи (например, ремень или сумочку) — это усилит связь с тотемом года и принесет удачу в карьере.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать другой знак
          </Link>
        </div>
      </main>
    </div>
  );
}