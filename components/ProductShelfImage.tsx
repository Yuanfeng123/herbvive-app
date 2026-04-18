'use client'

import { useTranslations } from 'next-intl'

export default function ProductShelfImage() {
  const t = useTranslations('Products')

  return (
    <img
      src="/pic.png"
      alt={t('imageAlt')}
      className="w-full max-w-[520px] h-auto block"
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}
