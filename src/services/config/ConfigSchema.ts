import { Type } from 'class-transformer';
import { IsNotEmpty, IsPort, IsString, ValidateNested } from 'class-validator';

import { SettingsSchema, IConfigSettings } from '@Services/config/schemas/SettingsSchema';
import { DatabaseSchema, IConfigDatabase } from '@Services/config/schemas/DatabaseSchema';

export class ConfigSchema implements IConfig {
  @IsString()
  @IsNotEmpty()
  public readonly name!: string;

  @IsPort()
  @IsNotEmpty()
  public readonly port!: string;

  @ValidateNested()
  @Type(() => SettingsSchema)
  public readonly settings!: SettingsSchema;

  @ValidateNested()
  @Type(() => DatabaseSchema)
  public readonly database!: DatabaseSchema;
}

export interface IConfig {
  name: string;
  port: string;
  settings: IConfigSettings;
  database: IConfigDatabase;
}
