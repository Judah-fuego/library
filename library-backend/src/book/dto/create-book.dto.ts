import { IsString, IsInt, Length, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @IsString({ message: 'Title must be a string' })
  @Length(1, 255, { message: 'Title must be between 1 and 255 characters' })
  title: string;

  @IsNotEmpty({ message: 'Author cannot be empty' })
  @IsString({ message: 'Author must be a string' })
  @Length(1, 255, { message: 'Author must be between 1 and 255 characters' })
  author: string;

  @IsNotEmpty({ message: 'Year cannot be empty' })
  @IsInt({ message: 'Year must be an integer' })
  @Min(1000, { message: 'Year must be after 1000' })
  @Max(new Date().getFullYear(), { message: 'Year cannot be in the future' })
  year: number;
}
