import { ChevronRight } from 'lucide-react'
import './App.css'
import { Header } from './components2/Header/Header'
import { Sidebar } from './components2/Sidebar/Sidebar'
import { StatsCard } from './components2/StatsCard/StatsCard'
import { VehiclesChart } from './components2/VehiclesChart/VehiclesChart'

function App() {

  return (
    <>

      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <Header />
        <main className="pl-64 pt-16 ">
          <div className="flex justify-center md:flex-nowrap flex-wrap gap-2 mx-4 mb-6">
            <StatsCard
              title="Total Download"
              value="85"
              lastSevenDays={{
                label: "Avg",
                value: 91,
              }}
            />
            <StatsCard
              title="Total Registered"
              value="41"
              lastSevenDays={{
                label: "Avg",
                value: 48,
              }}
              highlighted
            />
            <StatsCard
              title="Total DBT Verified"
              value="47"
              lastSevenDays={{
                label: "Avg",
                value: 16,
              }}
            />
            <StatsCard
              title="Total Active"
              value="922"
              lastSevenDays={{
                label: "Avg",
                value: 894,
              }}
            />
            <StatsCard
              title="Pack Sold"
              value="3753 (₹7156.50Ltr)"
              lastSevenDays={{
                label: "Avg",
                value: 5975,
              }}
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-6 m-5 mt-10">
            <div className="bg-white rounded-md p-4 w-full">
              <h3 className="text-lg font-medium mb-4 text-gray-500 flex items-center justify-center">India <ChevronRight className="w-5 h-5" /> Statewise App Registered Users Count</h3>
              <img className='w-1/2 my-8 object-cover mx-auto' src='/map.avif' />

            </div>
            <VehiclesChart />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
