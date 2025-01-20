export function StatsCard({ title, value, lastSevenDays }) {
    return (
        <div className={`p-4 rounded-lg shadow-md hover:bg-[#c8e1f9] hover:shadow-xl transition-all cursor-pointer bg-white flex-grow mt-2`}>
            <h3 className="text-gray-500 text-md font-medium">{title}</h3>
            <p className="text-lg font-semibold text-gray-500 mt-1">{value}</p>
            <div className="mt-4 bg-[#3741514a] h-px"/>
            {lastSevenDays && (
                <div className="mt-4">
                    <p className="text-xs text-gray-500">Last 7 Days</p>
                    <p className="text-md">
                        <span className="text-green-500">Avg: </span>
                        <span className="text-green-500">{lastSevenDays.value}</span>
                    </p>
                </div>
            )}
        </div>
    )
}
