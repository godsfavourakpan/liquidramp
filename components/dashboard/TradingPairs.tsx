import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TradingPair {
  id: string
  pair: string
  rate: string
  orderLimit: string
  isActive: boolean
}

const mockTradingPairs: TradingPair[] = [
  {
    id: "1",
    pair: "cNGN/NGN",
    rate: "1:10",
    orderLimit: "1 - 200",
    isActive: true
  },
  {
    id: "2",
    pair: "cNGN/USD",
    rate: "$ 0.00067",
    orderLimit: "1 - 1,500",
    isActive: true
  },
  {
    id: "3",
    pair: "cNGN/GHS",
    rate: "$ 0.00647",
    orderLimit: "1 - 1,500",
    isActive: true
  }
]

export function TradingPairs() {
  return (
    <div className="border border-[#DEE1E6] rounded-lg p-6">
      <div className="font-medium">Trading Pair</div>

      <div className="mt-4 flex gap-2">
        <Badge variant="outline" className="bg-gray-900 text-white border-gray-900">
          BASE
        </Badge>
        <Badge variant="outline" className="bg-[#F4F5F7] text-[#5F636891] border-gray-200">
          ETH
        </Badge>
        <Badge variant="outline" className="bg-[#F4F5F7] text-[#5F636891] border-gray-200">
          BSC
        </Badge>
        <Badge variant="outline" className="bg-[#F4F5F7] text-[#5F636891] border-gray-200">
          TRON
        </Badge>
        <Badge variant="outline" className="bg-[#F4F5F7] text-[#5F636891] border-gray-200">
          POL
        </Badge>
      </div>

      <div className="mt-6 border border-[#F4F5F7] rounded-lg">
        <div className="grid grid-cols-5 gap-2 text-sm font-medium text-gray-500 border-b border-[#DEE1E6] p-3 bg-[#F4F5F7]">
          <div>Asset</div>
          <div>Rates</div>
          <div>Order Limits</div>
          <div className="pl-4">Action</div>
          <div></div>
        </div>

        {/* Trading pairs */}
        <div>
          {mockTradingPairs.map((pair, index) => (
            <div
              key={pair.id}
              className={`grid grid-cols-5 gap-2 items-center p-3 ${
                index > 0 ? "border-t border-[#DEE1E6]" : ""
              } bg-[#F4F5F7]`}
            >
              <div className="flex items-center gap-2">
                <span>{pair.pair}</span>
              </div>
              <div>{pair.rate}</div>
              <div className="whitespace-nowrap">
                {pair.orderLimit} <span className="text-xs text-gray-500">cNGN</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <div className="px-2 py-0.5 border border-green-200 rounded-full flex items-center gap-1 bg-[#0093101A]">
                  <span className="text-xs text-green-600">Active</span>
                  <div className="relative h-4 w-7 rounded-full bg-green-600">
                    <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Button variant="ghost" size="icon">
                  <span className="text-lg">⋯</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 