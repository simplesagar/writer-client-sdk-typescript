/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MagicRequestInput, MagicRequestInput$ } from "./magicrequestinput";
import * as z from "zod";

export type GenerateTemplateRequest = {
    inputs?: Array<MagicRequestInput> | undefined;
    templateId: string;
};

/** @internal */
export namespace GenerateTemplateRequest$ {
    export type Inbound = {
        inputs?: Array<MagicRequestInput$.Inbound> | undefined;
        templateId: string;
    };

    export const inboundSchema: z.ZodType<GenerateTemplateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            inputs: z.array(MagicRequestInput$.inboundSchema).optional(),
            templateId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.inputs === undefined ? null : { inputs: v.inputs }),
                templateId: v.templateId,
            };
        });

    export type Outbound = {
        inputs?: Array<MagicRequestInput$.Outbound> | undefined;
        templateId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerateTemplateRequest> = z
        .object({
            inputs: z.array(MagicRequestInput$.outboundSchema).optional(),
            templateId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.inputs === undefined ? null : { inputs: v.inputs }),
                templateId: v.templateId,
            };
        });
}
