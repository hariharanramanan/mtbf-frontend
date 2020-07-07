export interface IRole {
    masters: IMaster[];
    role: string;
    _id: string;
}

export interface IMaster {
    _id: string;
    mastername: string;
}

export interface IRoles {
    roles: IRole[];
}
