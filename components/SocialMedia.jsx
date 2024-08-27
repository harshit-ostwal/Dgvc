import { Facebook, Instagram, Mail, MapPinned, Twitter } from "lucide-react";
import Link from "next/link";

const SocialMediaIcons = [
  {
    iconName: <Facebook />,
    iconHref: ""
  },
  {
    iconName: <Instagram />,
    iconHref: ""
  },
  {
    iconName: <Twitter />,
    iconHref: ""
  },
  {
    iconName: <Mail />,
    iconHref: ""
  },
  {
    iconName: <MapPinned />,
    iconHref: ""
  }
]

function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      {SocialMediaIcons.map((data, index) => (
        <Link key={index} href={data.iconHref} className="p-3 transition-all duration-200 rounded-full bg-gradient-to-tr from-amber-200 via-green-200 to-blue-200 outline-1 outline hover:scale-110">
          {data.iconName}
        </Link>
      ))}
    </div>
  )
}

export default SocialMedia