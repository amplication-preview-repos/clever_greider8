import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChangeRequestService } from "./changeRequest.service";
import { ChangeRequestControllerBase } from "./base/changeRequest.controller.base";

@swagger.ApiTags("changeRequests")
@common.Controller("changeRequests")
export class ChangeRequestController extends ChangeRequestControllerBase {
  constructor(protected readonly service: ChangeRequestService) {
    super(service);
  }
}
