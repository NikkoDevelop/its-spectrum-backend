import { Controller, Get } from '@nestjs/common';
import { version } from '../package.json';

@Controller()
export class HealthcheckController {
  @Get('/')
  public async index(): Promise<string> {
    return Promise.resolve(`IT-Skill Spectrum Backend ${version} ready`);
  }

  @Get('/check/ready')
  public async ready(): Promise<string> {
    return Promise.resolve(`IT-Skill Spectrum Backend ${version} ready`);
  }
}
