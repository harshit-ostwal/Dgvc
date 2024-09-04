import { Home, User, Book, Layers, Calendar, FileText, DollarSign, GraduationCap, Briefcase, Search, Users, Laptop2, PhoneCall, Settings, Award, Info, CheckCircle, MessageCircleHeart, Globe2, Building, ClipboardCheck, BedSingle, Monitor, LibraryBig, Wand2, MessageSquareDot, Paperclip } from "lucide-react";

export const MenuLinks = [
    {
        icon: <Home />,
        title: "Home",
        href: "/"
    },
    {
        icon: <User />,
        title: "Authorities",
        href: "/",
        subMenu: [
            {
                subIcon: <User />,
                subTitle: "Secretary",
                subHref: "/Authorities/Secretary"
            },
            {
                subIcon: <User />,
                subTitle: "Principal",
                subHref: "/Authorities/Principal"
            },
            {
                subIcon: <Users />,
                subTitle: "Management Committee",
                subHref: "/Authorities/ManagementCommittee"
            },
            {
                subIcon: <Users />,
                subTitle: "Governing Body",
                subHref: "/Authorities/GoverningBody"
            },
            {
                subIcon: <DollarSign />,
                subTitle: "Academic Council",
                subHref: "/Authorities/AcademicCouncil"
            },
            {
                subIcon: <DollarSign />,
                subTitle: "Finance Committee",
                subHref: "/Authorities/FinanceCommittee"
            },
            {
                subIcon: <Layers />,
                subTitle: "Oranogram",
                subHref: "/Authorities/Oranogram"
            },
            {
                subIcon: <Settings />,
                subTitle: "Strategic Development & Deployment",
                subHref: "/Authorities/StrategicDevelopment&Deployment"
            },
            {
                subIcon: <ClipboardCheck />,
                subTitle: "Code Of Conduct",
                subHref: "/Authorities/CodeOfConduct"
            }
        ]
    },
    {
        icon: <Book />,
        title: "Departments",
        href: "/",
        subMenu: [
            {
                subIcon: <Book />,
                subTitle: "Languages",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "Arts",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "Commerce",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "Science",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "Professional",
                subHref: "/"
            }
        ]
    },
    {
        icon: <Calendar />,
        title: "Admission",
        href: "/",
        subMenu: [
            {
                subIcon: <FileText />,
                subTitle: "Prospectus 2024 - 2025",
                subHref: "/"
            },
            {
                subIcon: <Laptop2 />,
                subTitle: "Online Application Portal",
                subHref: "/"
            },
            {
                subIcon: <Calendar />,
                subTitle: "Counselling Schedule",
                subHref: "/"
            },
            {
                subIcon: <GraduationCap />,
                subTitle: "Programs",
                subHref: "/"
            },
            {
                subIcon: <Settings />,
                subTitle: "Choice Based Credit System (CBCS)",
                subHref: "/"
            },
            {
                subIcon: <BedSingle />,
                subTitle: "Hostel",
                subHref: "/"
            }
        ]
    },
    {
        icon: <Award />,
        title: "IQAC",
        href: "/",
        subMenu: [
            {
                subIcon: <Info />,
                subTitle: "About IQAC",
                subHref: "/"
            },
            {
                subIcon: <Users />,
                subTitle: "IQAC Members",
                subHref: "/"
            },
            {
                subIcon: <FileText />,
                subTitle: "Annual Reports",
                subHref: "/"
            },
            {
                subIcon: <Calendar />,
                subTitle: "AQAR",
                subHref: "/"
            },
            {
                subIcon: <Settings />,
                subTitle: "Quality Initiatives Of IQAC",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "Academic Audit",
                subHref: "/"
            },
            {
                subIcon: <FileText />,
                subTitle: "Minutes & Action Taken Report",
                subHref: "/"
            },
            {
                subIcon: <ClipboardCheck />,
                subTitle: "Institutional Policies & Procedures",
                subHref: "/"
            },
            {
                subIcon: <Globe2 />,
                subTitle: "Institutional Distinctiveness",
                subHref: "/"
            },
            {
                subIcon: <CheckCircle />,
                subTitle: "Best Practices",
                subHref: "/"
            },
            {
                subIcon: <MessageCircleHeart />,
                subTitle: "Feedback - IQAC",
                subHref: "/"
            },
            {
                subIcon: <Users />,
                subTitle: "Collaborative Activities",
                subHref: "/"
            },
            {
                subIcon: <Award />,
                subTitle: "Accreditations & Rewards",
                subHref: "/"
            },
            {
                subIcon: <FileText />,
                subTitle: "UGC Undertaking",
                subHref: "/"
            },
            {
                subIcon: <Building />,
                subTitle: "IQAC Gallery",
                subHref: "/"
            }
        ]
    },
    {
        icon: <Briefcase />,
        title: "Placements",
        href: "/"
    },
    {
        icon: <ClipboardCheck />,
        title: "Examinations",
        href: "/"
    },
    {
        icon: <Search />,
        title: "Research",
        href: "/Research"
    },
    {
        icon: <Globe2 />,
        title: "Extra Links",
        href: "/",
        subMenu: [
            {
                subIcon: <DollarSign />,
                subTitle: "College Fees",
                subHref: "https://payments.billdesk.com/bdcollect/pay?p1=521&p2=17"
            },
            {
                subIcon: <Users />,
                subTitle: "Alumni",
                subHref: "/"
            },
            {
                subIcon: <Book />,
                subTitle: "E - Contents",
                subHref: "/"
            },
            {
                subIcon: <LibraryBig />,
                subTitle: "Library",
                subHref: "/"
            },
            {
                subIcon: <Paperclip />,
                subTitle: "OBE",
                subHref: "/"
            },
            {
                subIcon: <Wand2 />,
                subTitle: "Extra Circular Activites",
                subHref: "/"
            },
            {
                subIcon: <MessageSquareDot />,
                subTitle: "Feedback",
                subHref: "/"
            },
            {
                subIcon: <Monitor />,
                subTitle: "Vaishnav LMS",
                subHref: "https://dgvc.in/lms/login.php"
            },
            {
                subIcon: <PhoneCall />,
                subTitle: "Reach Us",
                subHref: "/ReachUs"
            },
        ]
    },
];