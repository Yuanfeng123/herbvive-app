import Image from 'next/image'

interface WeChatQRProps {
  size?: number
  className?: string
  /** Accessible label (localized by parent) */
  alt: string
}

export default function WeChatQR({
  size = 112,
  className = 'rounded-lg ring-1 ring-border',
  alt,
}: WeChatQRProps) {
  return (
    <div className={`inline-block overflow-hidden bg-white p-1.5 ${className}`}>
      <Image
        src="/wechat-qrcode.png"
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
