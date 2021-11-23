/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  @ApiProperty()
  gameName: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  @MaxLength(200, {
    message: 'The description must have no more than 200 characters.',
  })
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  @ApiProperty()
  price: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  images: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  suplyId: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  categoryId: string;
}
