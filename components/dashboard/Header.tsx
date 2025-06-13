import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-gray-200 px-24 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2 pl-4">
        <Image src="/assets/liquidlogo.svg" alt="LiquidRamp Logo" width={24} height={24} />
        <span className="font-bold text-lg">LiquidRamp</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="border border-gray-200 rounded-lg p-2 bg-[#F4F5F7]">
          <Image src="/assets/notificationicon.svg" alt="Notification" width={24} height={24} />
        </div>
        <div className="flex items-center gap-2 bg-[#F4F5F7] rounded-lg px-3 py-2">
          <Image src="/assets/walleticon.svg" alt="Wallet" width={24} height={24} />
          <span className="text-sm text-gray-500">0x616f...227E</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#F4F5F7] rounded-lg p-2">
            <Image src="/assets/buchi.svg" alt="Buchi Image" width={24} height={24} />
          </div>
          <div className="bg-[#F4F5F7] rounded-r-lg p-2">
            <ChevronDown className="h-6 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
} 