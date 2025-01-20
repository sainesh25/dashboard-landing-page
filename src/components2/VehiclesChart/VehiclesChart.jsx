"use client"

import { ChevronRight } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "CAR", value: 25, color: "#FF69B4" },
  { name: "BIKE AND SCOOTER", value: 35, color: "#FF7F50" },
  { name: "TRUCK", value: 20, color: "#87CEEB" },
  { name: "AUTO", value: 15, color: "#FFD700" },
  { name: "TRACTOR", value: 5, color: "#40E0D0" },
]

export function VehiclesChart() {
  return (
    <div className="bg-white p-4 w-full rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4 text-gray-500 flex items-center justify-center">Vehicle Type <ChevronRight className="w-5 h-5" /> App Registered Users Count Sub Tradewise</h3>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Legend
              verticalAlign="top"
              formatter={(value) => <span className="text-gray-500">{value}</span>}
              iconSize={20}
              iconType="rect"
              
            />
            <Pie data={data} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="value" >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

