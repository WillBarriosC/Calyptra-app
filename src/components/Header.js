import Image from "next/image";
import img from "/public/img-header.jpg";

export default function Header({ scrollHandler }) {
  return (
    
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full"
              src={img}
              placeholder="blur"
              alt="Cover"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            
            <h1 className="mt-4 text-center font-bold uppercase  sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">
                Life is most healthy with
              </span>
              <span className="block text-gray-800">Fruits</span>
            </h1>

            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 sm:px-8"
                onClick={scrollHandler}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  );
}
