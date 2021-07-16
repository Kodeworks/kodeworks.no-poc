function TailwindPalette({tailwindColor = 'kw-green'}) {
  return (
    <div className="grid flex-1 min-w-0 grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-50`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">50</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-100`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">100</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-200`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">200</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-300`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">300</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-400`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">400</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-500`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">500</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-600`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">600</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-700`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">700</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-800`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">800</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div
          className={`w-full h-10 rounded ring-1 ring-inset ring-black ring-opacity-0 bg-${tailwindColor}-900`}
        ></div>
        <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
          <div className="w-6 font-medium text-gray-900">900</div>
        </div>
      </div>
    </div>
  )
}

export default TailwindPalette
