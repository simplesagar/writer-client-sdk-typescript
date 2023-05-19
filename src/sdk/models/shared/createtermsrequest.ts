/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TermCreate } from "./termcreate";
import { Expose, Type } from "class-transformer";

export enum CreateTermsRequestFailHandling {
  Accumulate = "accumulate",
  Validate = "validate",
  Skip = "skip",
  ValidateOnly = "validateOnly",
}

export class CreateTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "failHandling" })
  failHandling?: CreateTermsRequestFailHandling;

  @SpeakeasyMetadata({ elemType: TermCreate })
  @Expose({ name: "models" })
  @Type(() => TermCreate)
  models?: TermCreate[];
}
