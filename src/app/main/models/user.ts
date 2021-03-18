import { FuseNavigationItem } from '../../../@fuse/types';

export interface User {
    email: string;
    menus: FuseNavigationItem[];
    username: string;
}
