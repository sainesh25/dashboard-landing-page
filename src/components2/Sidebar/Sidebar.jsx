import {
  LayoutDashboard,
  Users,
  PenToolIcon as Tool,
  Store,
  LineChart,
  Package,
  Gift,
  Calendar,
  ArrowRightLeft,
  Receipt,
  Activity,
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#1E2837] p-4">
      <div className="mb-8">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-16 mx-auto"
        />
      </div>
      <div className="space-y-2">
        <p className="px-4 text-xs font-semibold text-gray-400 mb-2">MENU</p>
        <SidebarLink href="/mlp" icon={<LayoutDashboard size={20} />} text="MLP Dashboard" />
        <SidebarLink href="/rlp" icon={<LayoutDashboard size={20} />} text="RLP Dashboard" />
        <SidebarLink href="/mechanic" icon={<Tool size={20} />} text="View Mechanic" />
        <SidebarLink href="/retailer" icon={<Store size={20} />} text="View Retailer" />
        <SidebarLink href="/insights" icon={<LineChart size={20} />} text="User Insights" />
        <SidebarLink href="/sku" icon={<Package size={20} />} text="SKU-wise Data" />
        <SidebarLink href="/consumption" icon={<Activity size={20} />} text="Slab-based Consumption" />
        <SidebarLink href="/redemption" icon={<Gift size={20} />} text="View Redemption" />
        <SidebarLink href="/expiry" icon={<Calendar size={20} />} text="View Expiry" />
        <SidebarLink href="/transfer" icon={<ArrowRightLeft size={20} />} text="View E-Transfer" />
        <SidebarLink href="/transaction" icon={<Receipt size={20} />} text="View Transaction" />
        <SidebarLink href="/rewards" icon={<Gift size={20} />} text="Rewards Catalogue" />
        <SidebarLink href="/activity" icon={<Users size={20} />} text="User Activity" />
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, text }) {
  return (
    <a
      href={href}
      className="flex hover:text-gray-100 text-gray-400 items-center gap-3 px-4 py-2 text-sm hover:bg-gray-700 rounded-lg transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}

