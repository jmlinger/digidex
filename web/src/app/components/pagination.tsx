import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import Button from './button'
import { getPageElements } from '../utils/paginationUtils'
import { PaginationProps } from '../interfaces/digimon'

export default function Pagination(props: PaginationProps) {
  const { data, setDataPerPage } = props

  const [page, setPage] = useState<number>(1)
  const [elementsPerPage, setElementsPerPage] = useState<number>(10)

  const numberOfPages = Math.ceil(data.length / elementsPerPage)

  // Efeito para atualizar os dados exibidos quando a página ou elementos por página mudam
  useEffect(() => {
    if (data) {
      setDataPerPage(getPageElements(data, page, elementsPerPage))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, elementsPerPage])

  // Efeito para retornar à página um após uma pesquisa
  useEffect(() => {
    if (data) {
      setDataPerPage(getPageElements(data, page, elementsPerPage))
      setPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  // Função para alternar entre páginas (anterior, próxima ou número específico)
  function togglePage(info: number | string) {
    if (info === 'prev' && page > 1) {
      setPage(page - 1)
    } else if (info === 'next' && page < numberOfPages) {
      setPage(page + 1)
    } else if (typeof info === 'number') {
      setPage(info)
    }
  }

  function handlePageSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setPage(Number(e.target.value))
    e.target.value = ''
  }

  function handleElementsPerPageChange(e: ChangeEvent<HTMLSelectElement>) {
    setElementsPerPage(Number(e.target.value))
    setPage(1)
  }

  const numberOfPagesArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  )

  return (
    <section
      id="pagination"
      className="flex flex-col items-center gap-5 sm:gap-10 md:flex-row"
    >
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center gap-5 sm:flex sm:flex-row">
        <Button
          disabled={page === 1}
          type="button"
          onClick={() => togglePage('prev')}
          className="w-20 text-sm sm:text-lg"
        >
          Prev
        </Button>
        <div className="col-span-2 row-start-2 flex items-center justify-center gap-5">
          {numberOfPagesArray.map((pageNumber) => {
            // Se houver mais de 6 páginas, exibe um dropdown no meio da lista.
            if (numberOfPages > 6) {
              // Se a página estiver entre a 5ª e a penúltima página, não renderiza nada.
              if (pageNumber > 5 && pageNumber < numberOfPages)
                return <Fragment key={pageNumber}></Fragment>

              // Renderiza o dropdown para seleção de página.
              return (
                <div
                  key={pageNumber}
                  className="flex items-center justify-center"
                >
                  {pageNumber === 5 ? (
                    <select
                      id="pageSelector"
                      onChange={(e) => handlePageSelectChange(e)}
                      defaultValue=""
                      data-page={page >= 5 && page < numberOfPages}
                      className="w-6 cursor-pointer appearance-none border-newYellow-500 bg-newblue-950 text-center text-2xl text-newYellow-500 focus:bg-newblue-950 focus:outline-none data-[page=true]:text-newOrange-500"
                    >
                      <option value="" hidden>
                        ...
                      </option>
                      {numberOfPagesArray
                        .slice(4, numberOfPagesArray.length - 1)
                        .map((n) => (
                          <option
                            key={n}
                            value={n}
                            data-page={n === page}
                            className="text-base text-newYellow-500 data-[page=true]:font-extrabold data-[page=true]:text-newOrange-500 sm:text-lg"
                          >
                            {n}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <button
                      key={pageNumber}
                      data-page={pageNumber === page}
                      className="pages text-newYellow-500 hover:text-lg hover:font-extrabold hover:text-newOrange-500 data-[page=true]:text-base data-[page=true]:font-extrabold data-[page=true]:text-newOrange-500 sm:data-[page=true]:text-lg"
                      onClick={() => togglePage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )}
                </div>
              )
            }

            // Renderização padrão para 6 páginas ou menos.
            return (
              <div
                key={pageNumber}
                className="flex items-center justify-center"
              >
                <button
                  data-page={pageNumber === page}
                  className="pages text-newYellow-500 hover:text-lg hover:font-extrabold hover:text-newOrange-500 data-[page=true]:text-lg data-[page=true]:font-extrabold data-[page=true]:text-newOrange-500"
                  onClick={() => togglePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </div>
            )
          })}
        </div>

        <Button
          disabled={page >= numberOfPages}
          type="button"
          onClick={() => togglePage('next')}
          className="w-20 text-sm sm:text-lg"
        >
          Next
        </Button>
      </div>

      <h1 className="font-extrabold text-newYellow-500 sm:text-xl  md:absolute md:left-5 lg:left-10">
        Digimons: {data.length}
      </h1>

      <label
        htmlFor="elements-per-page"
        className=" flex gap-2 text-sm text-newYellow-500 sm:text-lg  md:absolute md:right-5 lg:right-10"
      >
        Digimons per page:
        <select
          id="elements-per-page"
          onChange={(e) => handleElementsPerPageChange(e)}
          defaultValue={elementsPerPage}
          className="cursor-pointer rounded-lg border-2 border-newOrange-500 bg-newblue-950 text-center text-newYellow-500 focus:bg-newblue-950 focus:outline-none"
        >
          {[10, 20, 30, 40, 50].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}
