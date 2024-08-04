/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChangeRequestWhereUniqueInput } from "./ChangeRequestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChangeRequestUpdateInput } from "./ChangeRequestUpdateInput";

@ArgsType()
class UpdateChangeRequestArgs {
  @ApiProperty({
    required: true,
    type: () => ChangeRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChangeRequestWhereUniqueInput)
  @Field(() => ChangeRequestWhereUniqueInput, { nullable: false })
  where!: ChangeRequestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChangeRequestUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChangeRequestUpdateInput)
  @Field(() => ChangeRequestUpdateInput, { nullable: false })
  data!: ChangeRequestUpdateInput;
}

export { UpdateChangeRequestArgs as UpdateChangeRequestArgs };
