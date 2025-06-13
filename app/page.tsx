import { Bell, ChevronDown, ChevronRight, Search, User2, Wallet, Eye, Filter, RefreshCw, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Top progress bar */}
      <div className="bg-[#009310] w-full px-4 py-2 text-white flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <Progress value={56} className="w-24 h-2 bg-green-600" indicatorClassName="bg-white" />
          <span className="text-sm">56%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">A level upgrade message here!</span>
          <Button
            size="sm"
            variant="outline"
            className="bg-white text-green-500 border-white hover:bg-white/90 hover:text-green-500"
          >
            Upgrade
          </Button>
        </div>
      </div>

      {/* Header */}
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

      {/* Main content */}
      <main className="max-w-8xl mx-auto px-32 py-8">
        {/* Overview */}
        <div>
          <span className="text-sm text-gray-500">Overview</span>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Hello, Buchi</h1>
              <Badge variant="outline" className="bg-orange-50 text-orange-500 border-orange-200">
                RAMPER
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Token:</span>
                <div className="flex items-center gap-1">
                  <div className="bg-white rounded-lg p-2 flex items-center gap-1">
                    <Image src="/assets/cngnlogo.svg" alt="cNGN Logo" width={20} height={20} />
                    <span className="text-sm font-medium">cNGN</span>
                  </div>
                  <div className="bg-white rounded-r-lg p-2">
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Switch View:</span>
                <div className="flex items-center gap-1">
                  <div className="bg-white rounded-lg p-2">
                    <span className="text-sm font-medium">On-Ramp</span>
                  </div>
                  <div className="bg-white rounded-r-lg p-2">
                    <ChevronDown className="h-6 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Stats */}
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

        {/* Balance and Trading Pair */}
        <div className="mt-8 bg-white rounded-lg p-6">
          <div className="grid grid-cols-[1.5fr_1fr] gap-8">
            {/* Spendable Balance */}
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
                    <tr className="border-b">
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Image src="/assets/cngnlogo.svg" alt="cNGN Logo" width={30} height={30} />
                            <div className="absolute -bottom-1 -right-1">
                              <Image src="/assets/baselogo.svg" alt="Base Logo" width={16} height={16} />
                            </div>
                          </div>
                          <div>
                            <div className="font-medium">cNGN</div>
                            <div className="text-xs text-gray-500">Base Network</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2">
                        <div className="text-sm">
                          1 - 1,500 <span className="text-xs text-gray-500">cNGN</span>
                        </div>
                      </td>
                      <td className="py-2">
                        <div className="text-sm">
                          1,500.00 <span className="text-xs text-gray-500">cNGN</span>
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
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trading Pair */}
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
                  <div className="grid grid-cols-5 gap-2 items-center p-3 bg-[#F4F5F7]">
                    <div className="flex items-center gap-2">
                      <span>cNGN/NGN</span>
                    </div>
                    <div>1:10</div>
                    <div className="whitespace-nowrap">
                      1 - 200 <span className="text-xs text-gray-500">cNGN</span>
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

                  <div className="grid grid-cols-5 gap-2 items-center p-3 border-t border-[#DEE1E6] bg-[#F4F5F7]">
                    <div className="flex items-center gap-2">
                      <span>cNGN/USD</span>
                    </div>
                    <div>$ 0.00067</div>
                    <div className="whitespace-nowrap">
                      1 - 1,500 <span className="text-xs text-gray-500">cNGN</span>
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

                  <div className="grid grid-cols-5 gap-2 items-center p-3 border-t border-[#DEE1E6] bg-[#F4F5F7]">
                    <div className="flex items-center gap-2">
                      <span>cNGN/GHS</span>
                    </div>
                    <div>$ 0.00647</div>
                    <div className="whitespace-nowrap">
                      1 - 1,500 <span className="text-xs text-gray-500">cNGN</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <span className="text-[#009310] font-medium cursor-pointer">In progress</span>
              <span className="text-gray-500 font-medium cursor-pointer">Completed</span>
              <span className="text-gray-500 font-medium cursor-pointer">Failed</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-[500px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="border border-gray-200 rounded-md p-2 bg-white">
                  <Filter className="h-4 w-4 text-gray-500" />
                </div>
                <div className="border border-gray-200 rounded-md p-2 bg-white">
                  <RefreshCw className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-white">
                    <th className="p-4 text-left w-10">
                      <input type="checkbox" className="rounded border-[#009310] text-[#009310] focus:ring-[#009310] checked:bg-[#009310] checked:border-[#009310]" />
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Transaction
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Asset
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Quantity
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Amount
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Wallet Address
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Time
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        Status
                        <span className="text-xs">↑↓</span>
                      </div>
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500"></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4">
                        <input type="checkbox" className="rounded border-[#009310] text-[#009310] focus:ring-[#009310] checked:bg-[#009310] checked:border-[#009310]" />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 5L17 10" stroke="#009310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 14L12 19L17 14" stroke="#009310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>On-ramp</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-[#009310]">cNGN</span> - USD
                      </td>
                      <td className="p-4">100</td>
                      <td className="p-4">150,000</td>
                      <td className="p-4">0x******23fd23</td>
                      <td className="p-4">{i <= 2 ? "1 mins ago" : "2 mins ago"}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                          <span className="text-sm text-orange-500">
                            {i <= 2 ? "Awaiting flat payment" : "Processing token release"}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4 text-[#009310]" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
