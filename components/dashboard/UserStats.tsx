import { Card } from "@/components/ui/card"
import { Eye } from "lucide-react"
import Image from "next/image"

export function UserStats() {
  return (
    <div className="mt-6 bg-white rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <Image src="/assets/buchi.svg" alt="Buchi Image" width={40} height={40} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Buchi John</h3>
              <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                <Eye className="h-3 w-3" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-xs">✉️</span>
              <span>Buchi@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="h-20 w-px bg-gray-200 mx-8"></div>

        <div className="flex gap-6">
          <Card className="p-4 w-[280px]">
            <div className="text-sm text-gray-500">Total Liquidity Provided</div>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-2l font-bold">6,000,000</span>
              <span className="text-xs text-gray-500 mb-1">cNGN</span>
            </div>
          </Card>
          <Card className="p-4 w-[280px]">
            <div className="text-sm text-gray-500">No. of Orders Completed</div>
            <div className="mt-2 text-2l font-bold">1024</div>
          </Card>
          <Card className="p-4 w-[280px]">
            <div className="text-sm text-gray-500">Avg. Order Value</div>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-2l font-bold">100</span>
              <span className="text-xs text-gray-500 mb-1">cNGN</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 