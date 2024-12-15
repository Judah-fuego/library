import { IsString, IsInt, Length, Min, Max } from 'class-validator';

export class UpdateBookDto {
  @IsString({ message: 'Title must be a string' })
  @Length(1, 255, { message: 'Title must be between 1 and 255 characters' })
  title?: string;

  @IsString({ message: 'Author must be a string' })
  @Length(1, 255, { message: 'Author must be between 1 and 255 characters' })
  author?: string;

  @IsInt({ message: 'Year must be an integer' })
  @Min(1000, { message: 'Year must be after 1000' })
  @Max(new Date().getFullYear(), { message: 'Year cannot be in the future' })
  year?: number;
}
