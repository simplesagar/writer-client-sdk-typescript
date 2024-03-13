/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteResponse = {
    deleted: number;
};

/** @internal */
export namespace DeleteResponse$ {
    export type Inbound = {
        deleted: number;
    };

    export const inboundSchema: z.ZodType<DeleteResponse, z.ZodTypeDef, Inbound> = z
        .object({
            deleted: z.number().int(),
        })
        .transform((v) => {
            return {
                deleted: v.deleted,
            };
        });

    export type Outbound = {
        deleted: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteResponse> = z
        .object({
            deleted: z.number().int(),
        })
        .transform((v) => {
            return {
                deleted: v.deleted,
            };
        });
}
