import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        alt="Página não encontrada"
        src="https://illustrations.popsy.co/sky/crashed-error.svg"
        width={500}
        height={500}
        className="opacity-30"
      />
      <span className="text-sm -mt-4 italic text-stone-400 tracking-tight">
        Source: popsy.co
      </span>
      <p className="text-2xl text-primary mt-8">
        Oops! A página que você está procurando não existe.
      </p>
    </div>
  )
}
