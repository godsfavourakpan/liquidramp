import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Asset {
  id: string
  name: string
  network: string
  orderLimit: string
  balance: string
  isActive: boolean
}

const mockAssets: Asset[] = [
  {
    id: "1",
    name: "cNGN",
    network: "Base Network",
    orderLimit: "1 - 1,500",
    balance: "1,500.00",
    isActive: true
  }
]

export function SpendableBalance() {
  return (
    <div className="border border-[#DEE1E6] rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="font-medium">Spendable Balance</div>
        <div className="flex gap-2">
          <Button className="bg-[#009310] hover:bg-green-600">
            <span className="mr-1">+</span> Liquidity
          </Button>
          <Button className="bg-[#F4F5F7] text-[#000000]"> 
            Withdraw
          </Button>
          <Button className="bg-[#F4F5F7] text-[#000000]"> 
            ⋯
          </Button>
        </div>
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold">3,500</span>
        <span className="text-xs text-gray-500 mb-2">cNGN</span>
      </div>

      <div className="mt-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left text-sm font-medium text-gray-500">Asset</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Order Limits</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">LP Balance</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Liquidity Status</th>
            </tr>
          </thead>
          <tbody>
            {mockAssets.map((asset) => (
              <tr key={asset.id} className="border-b">
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Image src="/assets/cngnlogo.svg" alt="cNGN Logo" width={30} height={30} />
                      <div className="absolute -bottom-1 -right-1">
                        <Image src="/assets/baselogo.svg" alt="Base Logo" width={16} height={16} />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.network}</div>
                    </div>
                  </div>
                </td>
                <td className="py-2">
                  <div className="text-sm">
                    {asset.orderLimit} <span className="text-xs text-gray-500">cNGN</span>
                  </div>
                </td>
                <td className="py-2">
                  <div className="text-sm">
                    {asset.balance} <span className="text-xs text-gray-500">cNGN</span>
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 border border-green-200 rounded-full flex items-center gap-1 bg-[#0093101A]">
                        <span className="text-sm text-green-600">Active</span>
                        <div className="relative h-4 w-7 rounded-full bg-green-600">
                          <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="bg-[#F4F5F7] hover:bg-[#F4F5F7]">
                        Top Up
                      </Button>
                      <Button variant="ghost" size="sm" className="bg-[#F4F5F7] hover:bg-[#F4F5F7]">
                        <span className="text-lg">⋯</span>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 