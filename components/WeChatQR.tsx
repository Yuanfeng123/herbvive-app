import Image from 'next/image'

interface WeChatQRProps {
  /** 二维码边长（像素） */
  size?: number
  /** 外框样式（圆角、描边等） */
  className?: string
}

export default function WeChatQR({
  size = 112,
  className = 'rounded-lg ring-1 ring-border',
}: WeChatQRProps) {
  return (
    <div className={`inline-block overflow-hidden bg-white p-1.5 ${className}`}>
      <Image
        src="/wechat-qrcode.png"
        alt="HERBVIVE 官方微信二维码"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
