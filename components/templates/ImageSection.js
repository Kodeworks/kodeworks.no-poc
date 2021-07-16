const ImageSection = () => {
  return (
    <section class="relative bg-gray-900 my-16">
      <div class="mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div class="md:mr-auto md:w-1/2 md:pr-10">
          <h2 class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Vi muliggjør ideer!
          </h2>
          <p class="mt-3 text-lg text-gray-300">
            Vi er en gjeng som gjør det mulig for deg å gjennomføre ideer.
            Hvordan du gjør det, bestemmer du helt selv!
          </p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Les mer om oss
                <svg
                  class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-56 bg-transparent sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"
          alt=""
        />
      </div>
    </section>
  )
}
export default ImageSection
