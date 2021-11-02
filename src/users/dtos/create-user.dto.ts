import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Enter your first name' })
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'Enter your last name' })
  @ApiProperty()
  lastName: string;

  @IsNotEmpty({ message: 'Enter your CPF' })
  @MaxLength(11, {
    message: 'Enter a valid CPF',
  })
  @MinLength(11, {
    message: 'Enter a valid CPF',
  })
  @ApiProperty()
  cpf: string;

  @IsNotEmpty({ message: 'Enter your phone' })
  @MaxLength(16, {
    message:
      'the phone must have DDI + DDD + phone number (Ex: +55 11 912345678)',
  })
  @MinLength(14, {
    message:
      'the phone must have DDI + DDD + phone number (Ex: +55 11 912345678)',
  })
  @ApiProperty()
  phone: string;

  @IsNotEmpty({ message: 'Enter your address' })
  @ApiProperty()
  address: string;

  @IsNotEmpty({ message: 'Enter an email address' })
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @ApiProperty({
    description:
      'The user registration email must be unique in the application',
  })
  email: string;

  @IsNotEmpty({ message: 'Enter a password' })
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @ApiProperty({
    description:
      'The password must be at least 6 characters long and must have uppercase, lowercase, numbers and special characters.',
  })
  password: string;

  @IsNotEmpty({ message: 'Enter password confirmation' })
  @MinLength(6, {
    message: 'Password confirmation must have at least 6 characters',
  })
  @ApiProperty()
  passwordConfirmation: string;
}
