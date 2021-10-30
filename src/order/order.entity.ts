/* eslint-disable prettier/prettier */
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {User} from 
import {Game} from 
import {FormasPagamento} from 
import {Entrega} from 

@Entity()
export class OrderEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //soma

    @ManyToOne(() => User, user => user.order)
    user: User;

    @ManyToOne(() => Game, game => game.order)
    game: Game;

    // @ManyToOne(() => FormasPagamento, pag => pag.order)
    // pag: FormasPagamento;

    // @ManyToOne(() => Entrega, entrega => entrega.order)
    // entrega: Entrega;
}