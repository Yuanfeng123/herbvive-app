'use client'

export default function ProductShelfImage() {
  return (
    <img
      src="/pic.png"
      alt="HERBVIVE 产品瓶装展示"
      className="w-full max-w-[520px] h-auto block"
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}
