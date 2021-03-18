import { FuseNavigationItem } from "../../../@fuse/types";

export const NAVIGATION: FuseNavigationItem[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard",
        icon: "keyboard_arrow_right",
        hidden: true
    },
    {
        id: "settings",
        title: "Settings",
        type: "item",
        url: "/settings",
        icon: "keyboard_arrow_right",
        hidden: true
    },
    {
        id: "shiftMaster",
        title: "Shift Master",
        type: "item",
        url: "/shift-master",
        icon: "keyboard_arrow_right",
        hidden: true
    },
    {
        id: "departmentMaster",
        title: "Department Master",
        type: "item",
        url: "/department-master",
        icon: "keyboard_arrow_right",
        hidden: true
    },
    {
        id: "factoryMaster",
        title: "Factory Master",
        type: "item",
        url: "/factory-master",
        icon: "keyboard_arrow_right",
        hidden: true
    }
];