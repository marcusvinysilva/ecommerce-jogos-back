/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  user: string;
  @IsNotEmpty()
  game: string[];
}
