"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid, Image, DollarSign } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"

export const Dashboard = ({ isSidebarOpen }) => {

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "Rs. 250",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "Rs. 150",
      paymentMethod: "PhonePe UPI",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "Rs. 350",
      paymentMethod: "Bank Transfer",
    }
  ]

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-3))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <div
      className={`mt-16 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "lg:pl-[240px]" : "lg:pl-0"
        } lg:flex-row`}
    >
      <main className="flex-1 p-4 lg:border-r lg:p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">Hello Soham, welcome back!</p>
        </header>

        <div className="space-y-6">

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">Rs. 750</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Earning by categories</h2>
                <Button variant="ghost" size="sm"
                  onClick={() =>
                    toast.info("Impressed yet? Hire me :)", {
                      description: "Connect with me: dattasoham805@gmail.com",
                    })
                  }
                >
                  View all
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <LayoutGrid className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Wireframe kits</h3>
                    <p className="text-sm text-muted-foreground">Robert Meyer</p>
                  </div>
                  <div className="ml-auto text-sm font-medium text-orange-600">$19</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                    <Image className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Illustrations</h3>
                    <p className="text-sm text-muted-foreground">Sarah Fox</p>
                  </div>
                  <div className="ml-auto text-sm font-medium text-yellow-600">$128</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <aside className="w-full p-4 lg:w-[400px] lg:flex-shrink-0 lg:p-6">
        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">Your earning this month</p>
              <h2 className="text-3xl font-bold">1,509.89</h2>
              <p className="text-sm text-muted-foreground">21 Jun 2020 at 1:58 PM</p>
            </div>
            <Button className="mb-6 w-full gap-2"
              onClick={() =>
                toast.info("Impressed yet? Hire me :)", {
                  description: "Connect with me: dattasoham805@gmail.com",
                })
              }
            >
              <DollarSign className="h-4 w-4" />
              Withdraw All Earning
            </Button>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Earning by products</h3>
              <div className="space-y-4">
                <div>
                  <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </div>
                <div>

                  <ChartContainer config={chartConfig}>
                    <AreaChart
                      accessibilityLayer
                      data={chartData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Area
                        dataKey="mobile"
                        type="natural"
                        fill="var(--color-mobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                      />
                      <Area
                        dataKey="desktop"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                      />
                    </AreaChart>
                  </ChartContainer>

                </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}

