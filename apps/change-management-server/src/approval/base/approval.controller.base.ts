/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ApprovalService } from "../approval.service";
import { ApprovalCreateInput } from "./ApprovalCreateInput";
import { Approval } from "./Approval";
import { ApprovalFindManyArgs } from "./ApprovalFindManyArgs";
import { ApprovalWhereUniqueInput } from "./ApprovalWhereUniqueInput";
import { ApprovalUpdateInput } from "./ApprovalUpdateInput";

export class ApprovalControllerBase {
  constructor(protected readonly service: ApprovalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Approval })
  async createApproval(
    @common.Body() data: ApprovalCreateInput
  ): Promise<Approval> {
    return await this.service.createApproval({
      data: data,
      select: {
        approvalDate: true,
        approver: true,
        changeRequestId: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Approval] })
  @ApiNestedQuery(ApprovalFindManyArgs)
  async approvals(@common.Req() request: Request): Promise<Approval[]> {
    const args = plainToClass(ApprovalFindManyArgs, request.query);
    return this.service.approvals({
      ...args,
      select: {
        approvalDate: true,
        approver: true,
        changeRequestId: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Approval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async approval(
    @common.Param() params: ApprovalWhereUniqueInput
  ): Promise<Approval | null> {
    const result = await this.service.approval({
      where: params,
      select: {
        approvalDate: true,
        approver: true,
        changeRequestId: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Approval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApproval(
    @common.Param() params: ApprovalWhereUniqueInput,
    @common.Body() data: ApprovalUpdateInput
  ): Promise<Approval | null> {
    try {
      return await this.service.updateApproval({
        where: params,
        data: data,
        select: {
          approvalDate: true,
          approver: true,
          changeRequestId: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Approval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApproval(
    @common.Param() params: ApprovalWhereUniqueInput
  ): Promise<Approval | null> {
    try {
      return await this.service.deleteApproval({
        where: params,
        select: {
          approvalDate: true,
          approver: true,
          changeRequestId: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
