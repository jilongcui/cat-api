import { IsInt, IsOptional, IsString } from 'class-validator';

export enum TypeEnum {
  "RED" = "RED",
  "BLACK" = "BLACK"
}

export class CreateCatDto {
  /* Cat's name */
  @IsString()
  readonly name: string;

  /* Cat's age */
  @IsInt()
  readonly age: number;

  /* Cat's bread */
  @IsString()
  @IsOptional()
  readonly breed?: string;

  /* Cat's Color type: RED or BLACK */
  @IsString()
  readonly type: TypeEnum
}