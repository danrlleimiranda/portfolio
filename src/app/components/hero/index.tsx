import style from './hero.module.css'

export default function Hero() {
  return (
    <section className={`hero flex justify-start p-20 w-2/3 ${style.hero} ${style.heroFont}`}>
        <div className='w-fit flex flex-col p-6 mt-32'>
            <div className='mb-4 text-[#64ffda]'>
        <h1 className={`text-lg ${style.heroFont} font-bold`}>Olá, meu nome é</h1>
            </div>
        <h2 className={`text-7xl ${style.heroFont} font-bold text-[#ccd6f6]`}>Dan Miranda</h2>
        <h3 className={`text-7xl ${style.heroFont} font-bold text-[#8892b0]`}>Eu sou Desenvolvedor web.</h3>
        </div>
    </section>
  )
}
