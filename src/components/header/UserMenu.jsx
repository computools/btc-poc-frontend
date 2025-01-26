import { Settings, CircleUserRound, Bell } from "lucide-react";

export const UserMenu = () => {
  return (
    <div className="p-4 flex justify-end gap-x-4 text-pink-800">
      <Bell size={26} className="cursor-pointer" />
      <div className="flex items-center">
        <CircleUserRound size={26} className="cursor-pointer" />
        <span className="text-gray-700">Kabelo</span>
      </div>
      <Settings size={26} className="cursor-pointer" />
    </div>
  )
}
