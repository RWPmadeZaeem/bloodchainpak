import Image from "next/image"

function InfoSection() {
  return (
    <div className="w-full py-8 md:py-16">
      <div className="flex flex-col items-center space-y-4 md:space-y-6 px-4">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">What is Blood Chain?</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#6A6A6A] text-center max-w-4xl">
          A Lifesaving Mission to End Blood Shortages Across Pakistan
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-8 md:mt-10 px-4 sm:px-8 lg:px-32 md:items-center md:justify-around gap-6 md:gap-8">
        <p className="text-[#6A6A6A] text-base md:text-lg lg:text-xl max-w-md order-2 md:order-1">
          Blood Chain Pakistan is a non-profit organization dedicated to solving blood shortages across the country.
          With a network of passionate volunteers, we work to raise awareness, mobilize donors, and connect them with
          pati See more...
        </p>
        <div className="w-full md:w-1/2 relative h-32 sm:h-40 md:h-48 lg:h-56 order-1 md:order-2">
          <Image src="/bloodchain-pak.png" alt="bloodchain" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default InfoSection
