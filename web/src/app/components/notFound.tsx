import agumon from '../assets/newlogo.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div
      id="not-found"
      className="absolute left-1/2 top-[50%] flex -translate-x-1/2 -translate-y-1/2 flex-wrap items-center justify-center"
    >
      <Image
        src={agumon}
        alt="image"
        className="max-w-[120px] sm:max-w-[240px]"
      />
      <h1 className="relative whitespace-nowrap text-xl font-bold text-newYellow-500 sm:text-4xl xl:text-6xl">
        DIGIMON NOT FOUND
      </h1>
    </div>
  )
}
