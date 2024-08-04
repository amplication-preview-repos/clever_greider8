import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ProductDtoObject")
class ProductDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    startDate?: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    endDate?: Date;
}

export { ProductDto as ProductDto };