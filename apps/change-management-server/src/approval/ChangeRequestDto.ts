import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ChangeRequestStatus } from "./ChangeRequestStatus";

@ArgsType()
class ChangeRequestDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    title!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => ChangeRequestStatus)
    @ApiProperty({
        required: true,
        enum: ChangeRequestStatus
    })
    status!: "Open" | "Approved" | "Rejected";
}

export { ChangeRequestDto as ChangeRequestDto };