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
import { PartWhereInput } from "./PartWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PartOrderByInput } from "./PartOrderByInput";

@ArgsType()
class PartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PartWhereInput, { nullable: true })
  @Type(() => PartWhereInput)
  where?: PartWhereInput;

  @ApiProperty({
    required: false,
    type: [PartOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PartOrderByInput], { nullable: true })
  @Type(() => PartOrderByInput)
  orderBy?: Array<PartOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PartFindManyArgs as PartFindManyArgs };
