/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TermUpdate, TermUpdate$ } from "./termupdate";
import * as z from "zod";

export enum UpdateTermsRequestFailHandling {
    Accumulate = "accumulate",
    Validate = "validate",
    Skip = "skip",
    ValidateOnly = "validateOnly",
}

export type UpdateTermsRequest = {
    failHandling?: UpdateTermsRequestFailHandling | undefined;
    models?: Array<TermUpdate> | undefined;
};

/** @internal */
export const UpdateTermsRequestFailHandling$: z.ZodNativeEnum<
    typeof UpdateTermsRequestFailHandling
> = z.nativeEnum(UpdateTermsRequestFailHandling);

/** @internal */
export namespace UpdateTermsRequest$ {
    export type Inbound = {
        failHandling?: UpdateTermsRequestFailHandling | undefined;
        models?: Array<TermUpdate$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateTermsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            failHandling: UpdateTermsRequestFailHandling$.optional(),
            models: z.array(TermUpdate$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.failHandling === undefined ? null : { failHandling: v.failHandling }),
                ...(v.models === undefined ? null : { models: v.models }),
            };
        });

    export type Outbound = {
        failHandling?: UpdateTermsRequestFailHandling | undefined;
        models?: Array<TermUpdate$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateTermsRequest> = z
        .object({
            failHandling: UpdateTermsRequestFailHandling$.optional(),
            models: z.array(TermUpdate$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.failHandling === undefined ? null : { failHandling: v.failHandling }),
                ...(v.models === undefined ? null : { models: v.models }),
            };
        });
}
