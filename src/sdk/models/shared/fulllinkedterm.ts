/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ApprovedTermExtension, ApprovedTermExtension$ } from "./approvedtermextension";
import * as z from "zod";

export enum Pos {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective",
}

export type FullLinkedTerm = {
    approvedTermExtension?: ApprovedTermExtension | undefined;
    caseSensitive: boolean;
    id?: number | undefined;
    linkedTermId: number;
    pos?: Pos | undefined;
    term: string;
    termId: number;
};

/** @internal */
export const Pos$: z.ZodNativeEnum<typeof Pos> = z.nativeEnum(Pos);

/** @internal */
export namespace FullLinkedTerm$ {
    export type Inbound = {
        approvedTermExtension?: ApprovedTermExtension$.Inbound | undefined;
        caseSensitive: boolean;
        id?: number | undefined;
        linkedTermId: number;
        pos?: Pos | undefined;
        term: string;
        termId: number;
    };

    export const inboundSchema: z.ZodType<FullLinkedTerm, z.ZodTypeDef, Inbound> = z
        .object({
            approvedTermExtension: ApprovedTermExtension$.inboundSchema.optional(),
            caseSensitive: z.boolean(),
            id: z.number().int().optional(),
            linkedTermId: z.number().int(),
            pos: Pos$.optional(),
            term: z.string(),
            termId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                caseSensitive: v.caseSensitive,
                ...(v.id === undefined ? null : { id: v.id }),
                linkedTermId: v.linkedTermId,
                ...(v.pos === undefined ? null : { pos: v.pos }),
                term: v.term,
                termId: v.termId,
            };
        });

    export type Outbound = {
        approvedTermExtension?: ApprovedTermExtension$.Outbound | undefined;
        caseSensitive: boolean;
        id?: number | undefined;
        linkedTermId: number;
        pos?: Pos | undefined;
        term: string;
        termId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FullLinkedTerm> = z
        .object({
            approvedTermExtension: ApprovedTermExtension$.outboundSchema.optional(),
            caseSensitive: z.boolean(),
            id: z.number().int().optional(),
            linkedTermId: z.number().int(),
            pos: Pos$.optional(),
            term: z.string(),
            termId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                caseSensitive: v.caseSensitive,
                ...(v.id === undefined ? null : { id: v.id }),
                linkedTermId: v.linkedTermId,
                ...(v.pos === undefined ? null : { pos: v.pos }),
                term: v.term,
                termId: v.termId,
            };
        });
}
