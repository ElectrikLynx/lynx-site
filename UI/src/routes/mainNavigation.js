import * as Hi from 'react-icons/hi';
const { HiHome, HiClipboard, HiUser, HiTag, HiMail } = Hi;

export const routes = [
    {
        href: "./",
        text: "Home",
        icon: HiHome,
        isActive: true
    },
    {
        href: "#services",
        text: "Services",
        icon: HiClipboard,
        isActive: true
    },
    {
        href: "#about-us",
        text: "About Us",
        icon: HiUser,
        isActive: true
    },
    {
        href: "#contact-us",
        text: "Contact",
        icon: HiMail,
        isActive: true
    }, {
        href: "./our-work",
        text: "Our Work",
        icon: HiClipboard,
        isActive: false
    }
];