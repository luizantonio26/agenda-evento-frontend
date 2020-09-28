import { Events } from './events.model';
import { User } from './user.model';

export class Convite{
    id:number
    user:User
    events:Events
    status:string
}