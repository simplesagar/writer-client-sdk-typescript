/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum TermExampleType {
    Good = "good",
    Bad = "bad",
}

export type TermExample = {
    example: string;
    id?: number | undefined;
    termBankId: number;
    termId: number;
    type: TermExampleType;
};

/** @internal */
export const TermExampleType$: z.ZodNativeEnum<typeof TermExampleType> =
    z.nativeEnum(TermExampleType);

/** @internal */
export namespace TermExample$ {
    export type Inbound = {
        example: string;
        id?: number | undefined;
        termBankId: number;
        termId: number;
        type: TermExampleType;
    };

    export const inboundSchema: z.ZodType<TermExample, z.ZodTypeDef, Inbound> = z
        .object({
            example: z.string(),
            id: z.number().int().optional(),
            termBankId: z.number().int(),
            termId: z.number().int(),
            type: TermExampleType$,
        })
        .transform((v) => {
            return {
                example: v.example,
                ...(v.id === undefined ? null : { id: v.id }),
                termBankId: v.termBankId,
                termId: v.termId,
                type: v.type,
            };
        });

    export type Outbound = {
        example: string;
        id?: number | undefined;
        termBankId: number;
        termId: number;
        type: TermExampleType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TermExample> = z
        .object({
            example: z.string(),
            id: z.number().int().optional(),
            termBankId: z.number().int(),
            termId: z.number().int(),
            type: TermExampleType$,
        })
        .transform((v) => {
            return {
                example: v.example,
                ...(v.id === undefined ? null : { id: v.id }),
                termBankId: v.termBankId,
                termId: v.termId,
                type: v.type,
            };
        });
}
