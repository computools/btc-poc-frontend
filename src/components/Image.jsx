import { cn } from "@/lib/utils";

export const Image = ({ src, alt, className }) => {
  const getAltName = (path) => {
    const match = path.match(/\/([^\/]+)\.(png|jpeg)$/i);
    return match ? match[1] : "icon";
  }

  return (
    <div className={cn("w-10 h-10", className)}>
      <img src={src} alt={alt || getAltName(src)} className="w-full h-full"/>
    </div>
  )
}
