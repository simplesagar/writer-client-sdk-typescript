/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UsageItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}
