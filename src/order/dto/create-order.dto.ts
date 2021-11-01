/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
//import { User } from ''

export class CreateOrderDto {

    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    game: string[];

    @IsNotEmpty()
    pag: string[];

    @IsNotEmpty()
    delivery: string[];



}