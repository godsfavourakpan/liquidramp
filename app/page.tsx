import { Header } from "@/components/dashboard/Header"
import { UserStats } from "@/components/dashboard/UserStats"
import { TransactionsTable } from "@/components/dashboard/TransactionsTable"
import { SpendableBalance } from "@/components/dashboard/SpendableBalance"
import { TradingPairs } from "@/components/dashboard/TradingPairs"
import { Overview } from "@/components/dashboard/Overview"

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

const mockTransactions: Transaction[] = [
  {
    id: 1,
    type: "Deposit",
    asset: "cNGN",
    quantity: 100000,
    amount: 100000,
    walletAddress: "0x1234...5678",
    time: "2 hours ago",
    status: "Completed"
  },
  {
    id: 2,
    type: "Withdrawal",
    asset: "cNGN",
    quantity: 50000,
    amount: 50000,
    walletAddress: "0x8765...4321",
    time: "5 hours ago",
    status: "Pending"
  },
  {
    id: 3,
    type: "Deposit",
    asset: "cNGN",
    quantity: 75000,
    amount: 75000,
    walletAddress: "0x1234...5678",
    time: "1 day ago",
    status: "Completed"
  },
  {
    id: 4,
    type: "Withdrawal",
    asset: "cNGN",
    quantity: 25000,
    amount: 25000,
    walletAddress: "0x8765...4321",
    time: "2 days ago",
    status: "Failed"
  },
  {
    id: 5,
    type: "Deposit",
    asset: "cNGN",
    quantity: 200000,
    amount: 200000,
    walletAddress: "0x1234...5678",
    time: "3 days ago",
    status: "Completed"
  },
  {
    id: 6,
    type: "Withdrawal",
    asset: "cNGN",
    quantity: 100000,
    amount: 100000,
    walletAddress: "0x8765...4321",
    time: "4 days ago",
    status: "Completed"
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <div className="mt-8">
          <Overview />
        </div>
        <div className="mt-8">
          <UserStats />
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SpendableBalance />
          </div>
          <div>
            <TradingPairs />
          </div>
        </div>
        <div className="mt-8">
          <TransactionsTable transactions={mockTransactions} />
        </div>
      </div>
    </div>
  )
}
