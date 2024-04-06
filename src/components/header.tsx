import nlwUniteIcon from '../assets/nwl-unite-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} />

      <nav className='flex items-center gap-5'>
        <a href="" className='text-zinc-300'>Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}