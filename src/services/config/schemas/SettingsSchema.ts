import { IsString, IsNotEmpty } from 'class-validator';

export class SettingsSchema implements IConfigSettings {
  @IsString()
  @IsNotEmpty()
  public readonly cookieSecret!: string;
}

export interface IConfigSettings {
  cookieSecret: string;
}
