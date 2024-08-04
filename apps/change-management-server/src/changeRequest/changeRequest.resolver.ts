import * as graphql from "@nestjs/graphql";
import { ChangeRequestResolverBase } from "./base/changeRequest.resolver.base";
import { ChangeRequest } from "./base/ChangeRequest";
import { ChangeRequestService } from "./changeRequest.service";

@graphql.Resolver(() => ChangeRequest)
export class ChangeRequestResolver extends ChangeRequestResolverBase {
  constructor(protected readonly service: ChangeRequestService) {
    super(service);
  }
}
