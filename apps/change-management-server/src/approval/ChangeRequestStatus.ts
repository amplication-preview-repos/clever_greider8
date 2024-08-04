import { registerEnumType } from "@nestjs/graphql";

export enum ChangeRequestStatus {
    Open = "Open",
    Approved = "Approved",
    Rejected = "Rejected"
}

registerEnumType(ChangeRequestStatus, {
    name: "ChangeRequestStatus",
  });