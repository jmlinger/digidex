'use client'

import Card from './components/card'
import { useContext, useEffect, useState } from 'react'

import Loading from './components/loading'
import NotFound from './components/notFound'

import Pagination from './components/pagination'
import UpButton from './components/upButton'
import { getDigimons } from './services/digimonApi'
import { IDigimon } from './interfaces/digimon'
import { DigimonFilterContext } from './contexts/filterContext'

export default function Home() {
  const [digimonsPerPage, setDigimonsPerPage] = useState<IDigimon[]>([])
  const [digimons, setDigimons] = useState<IDigimon[]>([])

  const context = useContext(DigimonFilterContext)

  useEffect(() => {
    getDigimons(context).then((data) => {
      setDigimons(data)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.getData])

  return (
    <main className="mt-32 flex h-full w-full flex-col items-center justify-center bg-newblue-950 py-16 md:mt-44">
      {digimons === null && <NotFound />}

      {digimons?.length === 0 && <Loading />}

      {digimons && (
        <>
          <Pagination data={digimons} setDataPerPage={setDigimonsPerPage} />
          <Card data={digimonsPerPage} />
          <UpButton></UpButton>
        </>
      )}
    </main>
  )
}
