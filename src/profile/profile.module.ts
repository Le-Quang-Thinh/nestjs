import { Module } from '@nestjs/common';
import { ProfileControllerController } from './profile-controller/profile-controller.controller';
import { ProfileService } from './profile-service/profile-service';

@Module({
  providers: [ProfileService],
  controllers: [ProfileControllerController]
})
export class ProfileModule {}
