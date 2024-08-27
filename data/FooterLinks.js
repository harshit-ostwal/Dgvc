import { Activity, Award, BookOpen, CornerDownRight, DownloadCloud, Info, Library, Link, Mail, MapPinned, Phone, Users2 } from "lucide-react";

export const FooterLinks = [
    {
        title: 'Other Links',
        icon: <Link color="#34d1a1" />,
        links: [
            {
                subTitle: "IIC",
                subHref: "",
                subIcon: <Award size={18} color="#ff6347" />
            },
            {
                subTitle: "NAAC",
                subHref: "",
                subIcon: <Award size={18} color="#ff6347" />
            },
            {
                subTitle: "NBA",
                subHref: "",
                subIcon: <Award size={18} color="#ff6347" />
            },
            {
                subTitle: "NIRF",
                subHref: "",
                subIcon: <Award size={18} color="#ff6347" />
            },
            {
                subTitle: "E - Contents",
                subHref: "",
                subIcon: <BookOpen size={18} color="#ff6347" />
            },
            {
                subTitle: "Library",
                subHref: "",
                subIcon: <Library size={18} color="#ff6347" />
            },
            {
                subTitle: "OBE",
                subHref: "",
                subIcon: <Activity size={18} color="#ff6347" />
            },
            {
                subTitle: "Extra Circular Activities",
                subHref: "",
                subIcon: <Activity size={18} color="#ff6347" />
            },
            {
                subTitle: "OBE",
                subHref: "",
                subIcon: <Activity size={18} color="#ff6347" />
            }
        ]
    },
    {
        icon: <Users2 color="#34d1a1" />,
        title: "Student Accounts",
        links: [
            {
                subTitle: "About Us",
                subHref: "",
                subIcon: <Info size={18} color="#ff6347" />
            },
            {
                subTitle: "About Us",
                subHref: "",
                subIcon: <Info size={18} color="#ff6347" />
            },
            {
                subTitle: "About Us",
                subHref: "",
                subIcon: <Info size={18} color="#ff6347" />
            }
        ]
    },
    {
        icon: <DownloadCloud color="#34d1a1" />,
        title: "Downloads",
        links: [
            {
                subTitle: "Previous Year Question Papers",
                subHref: "",
                subIcon: <DownloadCloud size={18} color="#ff6347" />
            },
            {
                subTitle: "Academic Calendar",
                subHref: "",
                subIcon: <DownloadCloud size={18} color="#ff6347" />
            },
        ]
    },
    {
        icon: <CornerDownRight color="#34d1a1" />,
        title: "Student Corners",
        links: [
            {
                subTitle: "+91 999-999-9999",
                subHref: "",
                subIcon: <Phone size={18} color="#ff6347" />
            },
            {
                subTitle: "principal@dgvaishnavcollege.edu.in",
                subHref: "",
                subIcon: <Mail size={18} color="#ff6347" />
            },
            {
                subTitle: "coe@dgvaishnavcollege.edu.in",
                subHref: "",
                subIcon: <Mail size={18} color="#ff6347" />
            },
            {
                subTitle: "#833, E.V.R. Periyar High Road, Arumbakkam, Chennai – 600 106, Tamilnadu.",
                subHref: "",
                subIcon: <MapPinned size={18} color="#ff6347" />
            },
        ]
    }
]