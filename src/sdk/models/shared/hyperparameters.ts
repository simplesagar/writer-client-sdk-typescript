/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type HyperParameters = {
    numVirtualTokens: number;
};

/** @internal */
export namespace HyperParameters$ {
    export type Inbound = {
        numVirtualTokens: number;
    };

    export const inboundSchema: z.ZodType<HyperParameters, z.ZodTypeDef, Inbound> = z
        .object({
            numVirtualTokens: z.number().int(),
        })
        .transform((v) => {
            return {
                numVirtualTokens: v.numVirtualTokens,
            };
        });

    export type Outbound = {
        numVirtualTokens: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HyperParameters> = z
        .object({
            numVirtualTokens: z.number().int(),
        })
        .transform((v) => {
            return {
                numVirtualTokens: v.numVirtualTokens,
            };
        });
}
