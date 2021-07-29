import {IProject} from "@models/IProject";

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
    projects: IProject[] | undefined
}