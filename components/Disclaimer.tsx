import { getTranslations } from 'next-intl/server'

export default async function Disclaimer() {
  const t = await getTranslations('Disclaimer')
  return (
    <div className="bg-mist border-t border-border py-7 px-12">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-[11px] text-ink-soft leading-[1.7] opacity-80">
          {t('body')}
        </p>
      </div>
    </div>
  )
}
