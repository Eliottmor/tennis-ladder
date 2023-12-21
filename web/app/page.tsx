import { ReactNode } from 'react'

export default function Page() {

  interface CardProps {
    children: ReactNode
  }

  function Card({ children }:CardProps) {
    return (
      <div
        className='bg-gradient-to-r from-cyan-500 to-blue text-white border-2 border-white p-2 rounded-lg flex flex-col direction bg-white w-44 h-56'
      >
        {children}
      </div>
    )
  }
  return (
    <>
      <h2 className='pt-4 text-center text-base'>Start creating your tennis journey now!</h2>
      <section className='text-lg p-4 flex justify-around'>
        <Card>
          <div className='font-semibold self-center'>TRACK</div>
          <p className='text-sm mt-auto'>Track your scores</p>
        </Card>
        <Card>
          <div className='font-semibold self-center'>WELCOMING</div>
          <p className='text-sm mt-auto self-center'>For any level</p>
        </Card>
        <Card>
          <div className='font-semibold self-center'>STATS</div>
          <p className='text-sm mt-auto text-center'>Compare your stats with other players</p>
        </Card>
        <Card>
          <div className='font-semibold self-center'>PROGRESSION</div>
          <p className='text-sm mt-auto text-center'>View your progress overtime</p>
        </Card>
      </section>
    </>
  )
}
