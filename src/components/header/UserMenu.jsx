import {Settings, CircleUserRound, Bell} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "@/store/auth/authAction.js";
import {authData} from "@/store/store.js";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authData);

  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <div className="p-4 flex justify-end gap-x-4 text-pink-800">
      <Bell size={26} className="cursor-pointer"/>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center cursor-pointer">
            <CircleUserRound size={26}/>
            <span className="text-gray-700">{user.name}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <Button onClick={handleLogOut} className="bg-red-500 hover:bg-red-800">Logout</Button>
        </PopoverContent>
      </Popover>
      <Settings size={26} className="cursor-pointer"/>
    </div>
  )
}
