import Logo from "@/assets/logo.png";
import Blazon from "@/assets/blazon.png";
import { Image } from "@/components/Image";
import { UserMenu } from "@/components/header/UserMenu";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { isLogged } = useAuth();

  return (
    <div className={cn("p-4 lg:pb-10 border border-gray-500 w-full bg-white", isLogged && "!pb-1")}>
        <div className="border-l-2 border-light-blue mb-2 flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-between items-center mx-auto lg:mx-0">
            <Image src={Blazon} className="h-16 w-24"/>
            <Image src={Logo} className="h-20 w-28"/>
          </div>
          <h1 className="text-lg lg:text-3xl mx-auto text-red-800 max-w-4xl text-center">
            Corporate Governance And Performance Monitoring System 
            <span className="font-medium"> CGAPMC</span>
          </h1>
        </div>
        <hr />
        {isLogged && <UserMenu/>}
    </div>
  )
}
