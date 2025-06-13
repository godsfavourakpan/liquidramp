import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Overview() {
  return (
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
  )
} 