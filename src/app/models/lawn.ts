import { Application } from './application';

export interface Lawn {
    _id?: string;
    title: string;
    address: string;
    size: number;
    application: Application[];
}