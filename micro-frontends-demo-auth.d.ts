import { Observable } from 'rxjs';
export declare type User = {
    id: number;
    firstName: string;
    lastName: string;
};
export declare function getUser(): Observable<User>;
