import { Home, User, Book, Layers, Calendar, FileText, DollarSign, GraduationCap, Briefcase, Search, Users, Laptop2, PhoneCall, Settings, Award, Info, CheckCircle, MessageCircleHeart, Globe2, Building, ClipboardCheck, BedSingle, Monitor, LibraryBig, Wand2, MessageSquareDot, Paperclip } from "lucide-react";

export const MenuLinks = [
    {
        icon: <Home size={18} />,
        title: "Home",
        href: "/"
    },
    {
        icon: <User size={18} />,
        title: "Authorities",
        href: "/",
        subMenu: [
            {
                subIcon: <User size={18} />,
                subTitle: "Secretary",
                subHref: "/Authorities/Secretary"
            },
            {
                subIcon: <User size={18} />,
                subTitle: "Principal",
                subHref: "/Authorities/Principal"
            },
            {
                subIcon: <Users size={18} />,
                subTitle: "Management Committee",
                subHref: "/Authorities/ManagementCommittee"
            },
            {
                subIcon: <Users size={18} />,
                subTitle: "Governing Body",
                subHref: "/Authorities/GoverningBody"
            },
            {
                subIcon: <DollarSign size={18} />,
                subTitle: "Academic Council",
                subHref: "/Authorities/AcademicCouncil"
            },
            {
                subIcon: <DollarSign size={18} />,
                subTitle: "Finance Committee",
                subHref: "/Authorities/FinanceCommittee"
            },
            {
                subIcon: <Layers size={18} />,
                subTitle: "Oranogram",
                subHref: "/Authorities/Oranogram"
            },
            {
                subIcon: <Settings size={18} />,
                subTitle: "Strategic Development & Deployment",
                subHref: "/Authorities/StrategicDevelopmentAndDeployment"
            },
            {
                subIcon: <ClipboardCheck size={18} />,
                subTitle: "Code Of Conduct",
                subHref: "/Authorities/CodeOfConduct"
            }
        ]
    },
    {
        icon: <Book size={18} />,
        title: "Departments",
        href: "/Departments",
        subMenu: [
            {
                subIcon: <Book size={18} />,
                subTitle: "Languages",
                subHref: "/Departments/Languages"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "Arts",
                subHref: "/Departments/Arts"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "Commerce",
                subHref: "/Departments/Commerce"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "Science",
                subHref: "/Departments/Science"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "Professionals",
                subHref: "/Departments/Professionals"
            }
        ]
    },
    {
        icon: <Calendar size={18} />,
        title: "Admission",
        href: "/",
        subMenu: [
            {
                subIcon: <FileText size={18} />,
                subTitle: "Prospectus 2024 - 2025",
                subHref: "/"
            },
            {
                subIcon: <Laptop2 size={18} />,
                subTitle: "Online Application Portal",
                subHref: "/"
            },
            {
                subIcon: <Calendar size={18} />,
                subTitle: "Counselling Schedule",
                subHref: "/"
            },
            {
                subIcon: <GraduationCap size={18} />,
                subTitle: "Programs",
                subHref: "/"
            },
            {
                subIcon: <Settings size={18} />,
                subTitle: "Choice Based Credit System (CBCS)",
                subHref: "/"
            },
            {
                subIcon: <BedSingle size={18} />,
                subTitle: "Hostel",
                subHref: "/"
            }
        ]
    },
    {
        icon: <Award size={18} />,
        title: "IQAC",
        href: "/",
        subMenu: [
            {
                subIcon: <Info size={18} />,
                subTitle: "About IQAC",
                subHref: "/"
            },
            {
                subIcon: <Users size={18} />,
                subTitle: "IQAC Members",
                subHref: "/"
            },
            {
                subIcon: <FileText size={18} />,
                subTitle: "Annual Reports",
                subHref: "/"
            },
            {
                subIcon: <Calendar size={18} />,
                subTitle: "AQAR",
                subHref: "/"
            },
            {
                subIcon: <Settings size={18} />,
                subTitle: "Quality Initiatives Of IQAC",
                subHref: "/"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "Academic Audit",
                subHref: "/"
            },
            {
                subIcon: <FileText size={18} />,
                subTitle: "Minutes & Action Taken Report",
                subHref: "/"
            },
            {
                subIcon: <ClipboardCheck size={18} />,
                subTitle: "Institutional Policies & Procedures",
                subHref: "/"
            },
            {
                subIcon: <Globe2 size={18} />,
                subTitle: "Institutional Distinctiveness",
                subHref: "/"
            },
            {
                subIcon: <CheckCircle size={18} />,
                subTitle: "Best Practices",
                subHref: "/"
            },
            {
                subIcon: <MessageCircleHeart size={18} />,
                subTitle: "Feedback - IQAC",
                subHref: "/"
            },
            {
                subIcon: <Users size={18} />,
                subTitle: "Collaborative Activities",
                subHref: "/"
            },
            {
                subIcon: <Award size={18} />,
                subTitle: "Accreditations & Rewards",
                subHref: "/"
            },
            {
                subIcon: <FileText size={18} />,
                subTitle: "UGC Undertaking",
                subHref: "/"
            },
            {
                subIcon: <Building size={18} />,
                subTitle: "IQAC Gallery",
                subHref: "/"
            }
        ]
    },
    {
        icon: <Briefcase size={18} />,
        title: "Placements",
        href: "/"
    },
    {
        icon: <ClipboardCheck size={18} />,
        title: "Examinations",
        href: "/"
    },
    {
        icon: <Search size={18} />,
        title: "Research",
        href: "/Research"
    },
    {
        icon: <Globe2 size={18} />,
        title: "Extra Links",
        href: "/",
        subMenu: [
            {
                subIcon: <DollarSign size={18} />,
                subTitle: "College Fees",
                subHref: "https://payments.billdesk.com/bdcollect/pay?p1=521&p2=17"
            },
            {
                subIcon: <Users size={18} />,
                subTitle: "Alumni",
                subHref: "/"
            },
            {
                subIcon: <Book size={18} />,
                subTitle: "E - Contents",
                subHref: "/"
            },
            {
                subIcon: <LibraryBig size={18} />,
                subTitle: "Library",
                subHref: "/"
            },
            {
                subIcon: <Paperclip size={18} />,
                subTitle: "OBE",
                subHref: "/"
            },
            {
                subIcon: <Wand2 size={18} />,
                subTitle: "Extra Circular Activites",
                subHref: "/"
            },
            {
                subIcon: <MessageSquareDot size={18} />,
                subTitle: "Feedback",
                subHref: "/"
            },
            {
                subIcon: <Monitor size={18} />,
                subTitle: "Vaishnav LMS",
                subHref: "https://dgvc.in/lms/login.php"
            },
            {
                subIcon: <PhoneCall size={18} />,
                subTitle: "Reach Us",
                subHref: "/ReachUs"
            },
        ]
    },
];