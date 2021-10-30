import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import ObjectWithIdDTO from '../../utils/types/objectWithId.dto';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => ObjectWithIdDTO)
  category: ObjectWithIdDTO;
}

export default CreateGameDto;