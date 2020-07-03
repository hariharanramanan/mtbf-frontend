import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: "dashboard",
        url: "/dashboard",
    },
    {
        id: "factorysetup",
        title: "Factory setup",
        type: "group",
        children: [
            {
                id: "factory",
                title: "Lists",
                type: "item",
                icon: "house",
                url: "/factory",
            },
        ],
    },
];
