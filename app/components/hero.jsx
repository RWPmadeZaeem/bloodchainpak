export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6 px-4 py-12 md:py-16 lg:py-18">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">Be The Lifeline</h1>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-2">
          Donate <span className="text-[#EC1D23]">Blood</span>, Save Lives
        </div>
      </div>
      <div className="text-center text-[#6A6A6A] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl px-4">
        <p className="text-sm sm:text-base md:text-lg leading-normal">
          Every second, someone in Pakistan needs blood to survive—whether it's an accident victim, a patient battling
          illness, or a child fighting thalassemia. Blood Chain Pakistan is on a mission to ensure no life is lost due
          to blood shortages. Join thousands of donors across the country and be the reason someone gets a second chance
          at life. Your one act of kindness can create a ripple of hope, healing, and happiness for countless
          individuals.
        </p>
      </div>
      <button className="bg-[#EC1D23] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full hover:bg-red-700 transition-colors duration-200 mt-4 md:mt-4">
        Donate Now
      </button>
    </div>
  )
}
