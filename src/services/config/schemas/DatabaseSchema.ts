import { IsString, IsNotEmpty, IsIP, IsPort } from 'class-validator';

export class DatabaseSchema implements IConfigDatabase {
  @IsString()
  @IsNotEmpty()
  public readonly user!: string;

  @IsString()
  @IsNotEmpty()
  public readonly password!: string;

  @IsIP()
  @IsNotEmpty()
  public readonly ip!: string;

  @IsPort()
  @IsNotEmpty()
  public readonly port!: string;

  @IsString()
  @IsNotEmpty()
  public readonly name!: string;
}

export interface IConfigDatabase {
  user: string;
  password: string;
  ip: string;
  port: string;
  name: string;
}
