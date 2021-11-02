import {
  IsString,
  MaxLength,
  IsOptional,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import ObjectWithIdDTO from '../../utils/types/objectWithId.dto';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  @MaxLength(200, {
    message: 'The description must have no more than 200 characters.',
  })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Field name is required' })
  name: price;

  @IsOptional()
  @IsString()
  image: string;

  @ValidateNested()
  @Type(() => ObjectWithIdDTO)
  category: ObjectWithIdDTO;
}
