import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PartService } from "./part.service";
import { PartControllerBase } from "./base/part.controller.base";

@swagger.ApiTags("parts")
@common.Controller("parts")
export class PartController extends PartControllerBase {
  constructor(protected readonly service: PartService) {
    super(service);
  }
}
