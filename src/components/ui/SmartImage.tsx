import { useState } from 'react'

/**
 * Renderiza a imagem informada em `src`. Caso o arquivo ainda não tenha sido
 * adicionado pelo cliente em /public/images, exibe um placeholder elegante
 * com o nome do arquivo esperado — facilitando a substituição futura sem
 * quebrar o layout.
 */
export default function SmartImage({
  src,
  alt,
  label,
  icon = 'bi-image',
  className = '',
  imgClassName = '',
}: {
  src: string
  alt: string
  label?: string
  icon?: string
  className?: string
  imgClassName?: string
}) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex min-w-0 flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-[#C6A15B]/40 bg-gradient-to-br from-white to-[#F3E8CF] text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <i className={`bi ${icon} text-3xl text-[#9C7B3C]`} aria-hidden="true" />
        <div className="w-full min-w-0 px-3 sm:px-4">
          <p className="break-words text-[10px] font-semibold uppercase leading-relaxed tracking-wide text-[#7D5E24] sm:text-xs">
            {label ?? alt}
          </p>
          <p className="mt-1 break-all text-[10px] text-[#777777] sm:text-[11px]">{src}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
      className={`${className} ${imgClassName}`}
    />
  )
}
