'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { useContext, useEffect, useState } from 'react'

import Button from './button'
import { DigimonFilterContext } from '../contexts/filterContext'
import { getDigimons } from '../services/digimonApi'
import { extractLevels } from '../utils/extractLevels'

export default function Nav() {
  const [allDigimonLevels, setAllDigimonLevels] = useState<string[]>([])

  const context = useContext(DigimonFilterContext)

  const {
    digimonName,
    setDigimonName,
    digimonLevel,
    setDigimonLevel,
    setGetData,
    getData,
  } = context

  useEffect(() => {
    getDigimons(context).then((digimons) => {
      setAllDigimonLevels(extractLevels(digimons))
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGetData(!getData)
  }

  return (
    <div className="min-h-100 fixed top-0 z-20 flex w-full cursor-pointer flex-wrap items-center justify-evenly bg-newblue-950 px-1 py-3 text-sm shadow-md sm:flex-nowrap sm:px-3 sm:text-lg lg:px-10">
      <div onClick={() => setGetData(!getData)}>
        <Image
          priority={true}
          width={2000}
          height={2000}
          src={logo}
          alt="logo"
          className="h-[50px] w-full md:h-[100px] md:w-full"
        />
      </div>
      <form
        name="digimonFilter"
        className="flex w-full items-center justify-center sm:flex sm:flex-row"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-wrap items-center justify-evenly">
          <input
            placeholder="Enter digimon name"
            type="text"
            value={digimonName}
            onChange={(e) => setDigimonName(e.target.value)}
            className="my-3 h-8 w-3/4 min-w-[190px] max-w-4xl rounded-xl p-2 focus:outline-none sm:h-12 md:w-1/2 md:p-4 lg:w-2/3"
          />

          <label
            htmlFor="digimon-level"
            className="flex items-center whitespace-nowrap text-newYellow-500"
          >
            <p className="mx-2">Choose a level:</p>
            <select
              id="digimon-level"
              value={digimonLevel}
              onChange={(e) => setDigimonLevel(e.target.value)}
              className="h-7 cursor-pointer rounded-lg border-[1px] border-newOrange-500 bg-newblue-950 text-center text-newYellow-500 focus:bg-newblue-950 focus:outline-none"
            >
              <option value="">None</option>
              {allDigimonLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Button
          disabled={!digimonLevel && !digimonName}
          className="h-12 text-sm font-bold sm:text-lg md:p-4"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  )
}
