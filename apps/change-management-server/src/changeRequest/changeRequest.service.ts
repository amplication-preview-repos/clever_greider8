import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChangeRequestServiceBase } from "./base/changeRequest.service.base";

@Injectable()
export class ChangeRequestService extends ChangeRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
