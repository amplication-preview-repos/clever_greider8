import { Module } from "@nestjs/common";
import { ChangeRequestModuleBase } from "./base/changeRequest.module.base";
import { ChangeRequestService } from "./changeRequest.service";
import { ChangeRequestController } from "./changeRequest.controller";
import { ChangeRequestResolver } from "./changeRequest.resolver";

@Module({
  imports: [ChangeRequestModuleBase],
  controllers: [ChangeRequestController],
  providers: [ChangeRequestService, ChangeRequestResolver],
  exports: [ChangeRequestService],
})
export class ChangeRequestModule {}
