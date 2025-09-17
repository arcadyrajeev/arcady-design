"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const data = [
  { name: "Mon", value: 2400 },
  { name: "Tue", value: 1398 },
  { name: "Wed", value: 9800 },
  { name: "Thu", value: 3908 },
  { name: "Fri", value: 4800 },
  { name: "Sat", value: 3800 },
  { name: "Sun", value: 4300 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 pt-15">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide">Fintech Dashboard</h1>
        <Button className="bg-[#3cd7ad] hover:bg-[#2dbd95] text-black font-semibold">
          + Add Funds
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card className="bg-gradient-to-tr from-[#0f0f0f] to-[#0C1F18] border-[#3cd7ad] shadow-lg rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-gray-400">Total Balance</p>
              <h2 className="text-3xl font-extrabold mt-2 text-white">
                $12,480
              </h2>
              <span className="flex items-center text-[#3cd7ad] mt-1 text-sm">
                <ArrowUpRight className="w-4 h-4 mr-1 text-gray-400" /> +4.2%
              </span>
            </div>
            <Wallet className="w-10 h-10 text-gray-400" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-tr from-[#0f0f0f] to-[#0C1F18] border-[#3cd7ad] shadow-lg rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-gray-400">Monthly Spend</p>
              <h2 className="text-3xl font-extrabold mt-2 text-white">
                $2,960
              </h2>
              <span className="flex items-center text-red-400 mt-1 text-sm">
                <ArrowDownRight className="w-4 h-4 mr-1 text-gray-400" /> -1.5%
              </span>
            </div>
            <CreditCard className="w-10 h-10 text-gray-400" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-tr from-[#0f0f0f] to-[#0C1F18] border-[#3cd7ad] shadow-lg rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-gray-400">Investments</p>
              <h2 className="text-3xl font-extrabold mt-2 text-white">
                $8,300
              </h2>
              <span className="flex items-center text-[#3cd7ad] mt-1 text-sm">
                <TrendingUp className="w-4 h-4 mr-1 text-gray-400" /> +7.1%
              </span>
            </div>
            <TrendingUp className="w-10 h-10 text-gray-400" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-tr from-[#0f0f0f] to-[#0C1F18] border-[#3cd7ad] shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-400">
              Weekly Activity
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip cursor={{ fill: "#0f0f0f" }} />
                <Bar dataKey="value" fill="#3cd7ad" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-tr from-[#0f0f0f] to-[#0C1F18] border-[#3cd7ad] shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-400">
              Investment Growth
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip cursor={{ stroke: "#3cd7ad" }} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3cd7ad"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
