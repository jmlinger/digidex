'use client'
import Image from 'next/image'
import { IAppProps } from '../interfaces/digimon'
import Button from './button'
import { Reveal } from '../utils/reveal'

export default function Card({ data }: IAppProps) {
  return (
    <div className="flex w-screen flex-row flex-wrap items-center justify-center gap-10 pt-12">
      {data?.map(({ name, level, img, _id }) => (
        <Reveal key={_id} width={'feat-content'}>
          <div className="rounded-2x relative flex h-[450px] w-[260px] transform flex-col items-center justify-evenly gap-y-4 overflow-hidden rounded-lg border-newOrange-500 bg-newblue-900 transition-transform duration-300 hover:scale-105 md:w-[300px]">
            <h1 className="bold relative z-10 w-full px-3 text-center text-xl font-bold text-newYellow-500 md:text-2xl">
              {name}
            </h1>
            <div className="relative z-10 flex h-40 w-2/3 items-center justify-center">
              <Image
                src={img}
                priority={true}
                placeholder="blur"
                blurDataURL={img}
                width={200}
                height={200}
                alt="digimon-image"
                className="rounded-lg object-contain"
              />
            </div>
            <Button className="z-10 mt-4 w-3/4 cursor-default rounded-full border-newOrange-500 p-2 text-base font-semibold opacity-90 md:text-lg">
              {level}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
