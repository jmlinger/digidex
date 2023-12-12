import React, { useEffect, useState } from 'react'
import Button from './button'
import { ArrowUp } from 'lucide-react'

export default function UpButton() {
  const [visible, setVisible] = useState(false)

  function scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 720 && setVisible(true)
      window.scrollY < 720 && setVisible(false)
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      id="up-button"
      data-visible={visible}
      className="fixed bottom-2 right-2 z-10 scale-0 rounded-full bg-newblue-950 transition-transform duration-150 data-[visible=true]:scale-100"
    >
      <Button className="rounded-full font-semibold" onClick={scrolltoTop}>
        <ArrowUp className="h-7 w-7 sm:h-10 sm:w-10" />
      </Button>
    </div>
  )
}
