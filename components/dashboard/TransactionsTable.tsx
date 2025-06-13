import { Button } from "@/components/ui/button"
import { ChevronRight, Filter, RefreshCw, Search } from "lucide-react"

interface Transaction {
  id: number
  type: string
  asset: string
  quantity: number
  amount: number
  walletAddress: string
  time: string
  status: string
}

interface TransactionsTableProps {
  transactions: Transaction[]
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
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
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-[#009310] text-[#009310] focus:ring-[#009310] checked:bg-[#009310] checked:border-[#009310]" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 5L17 10" stroke="#009310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 14L12 19L17 14" stroke="#009310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{transaction.type}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-[#009310]">{transaction.asset}</span>
                  </td>
                  <td className="p-4">{transaction.quantity}</td>
                  <td className="p-4">{transaction.amount}</td>
                  <td className="p-4">{transaction.walletAddress}</td>
                  <td className="p-4">{transaction.time}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-orange-500">
                        {transaction.status}
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
  )
} 