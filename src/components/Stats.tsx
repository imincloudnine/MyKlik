export default function Stats() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-xl text-gray-800 mb-10 font-regular">Telah hadir bersama</p>
        <div className="flex flex-col sm:flex-row justify-center gap-12 md:gap-28">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">500+</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600">Kantor</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">150+</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600">Apartemen</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">100.000</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600">Pengguna</p>
          </div>
        </div>
      </div>
    </section>
  );
}