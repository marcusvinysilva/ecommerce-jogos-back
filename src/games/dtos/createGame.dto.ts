/* eslint-disable prettier/prettier */
import { IsString, MaxLength, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  gameName: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  @MaxLength(200, {
    message: 'The description must have no more than 200 characters.',
  })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  price: string;

  @IsOptional()
  @IsString()
  images: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}
