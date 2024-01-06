import { IsInt, IsOptional, IsString } from 'class-validator';

export enum TypeEnum {
  "RED" = "RED",
  "BLACK" = "BLACK"
}

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  @IsOptional()
  readonly breed?: string;

  @IsString()
  readonly type: TypeEnum
}