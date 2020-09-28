import { User } from './user.model'

export class Events{
    id:number
    descricao:string
    data_inicio: string
    data_fim: string
    organizador: User
}