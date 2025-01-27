/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ApprovedTermExtension, ApprovedTermExtension$ } from "./approvedtermextension";
import { FullLinkedTerm, FullLinkedTerm$ } from "./fulllinkedterm";
import { TermExample, TermExample$ } from "./termexample";
import { TerminologyUser, TerminologyUser$ } from "./terminologyuser";
import { TermMistake, TermMistake$ } from "./termmistake";
import { TermTagResponse, TermTagResponse$ } from "./termtagresponse";
import * as z from "zod";

export enum FullTermWithUserPos {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective",
}

export enum Type {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending",
}

export type FullTermWithUser = {
    approvedTermExtension?: ApprovedTermExtension | undefined;
    backlinkedTerms?: Array<FullLinkedTerm> | undefined;
    caseSensitive: boolean;
    createdUser: TerminologyUser;
    creationTime: Date;
    description?: string | undefined;
    examples?: Array<TermExample> | undefined;
    highlight: boolean;
    id: number;
    linkedTerms?: Array<FullLinkedTerm> | undefined;
    mistakes?: Array<TermMistake> | undefined;
    modificationTime: Date;
    modifiedUser: TerminologyUser;
    pos?: FullTermWithUserPos | undefined;
    tags?: Array<TermTagResponse> | undefined;
    term: string;
    termBankId: number;
    type: Type;
};

/** @internal */
export const FullTermWithUserPos$: z.ZodNativeEnum<typeof FullTermWithUserPos> =
    z.nativeEnum(FullTermWithUserPos);

/** @internal */
export const Type$: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export namespace FullTermWithUser$ {
    export type Inbound = {
        approvedTermExtension?: ApprovedTermExtension$.Inbound | undefined;
        backlinkedTerms?: Array<FullLinkedTerm$.Inbound> | undefined;
        caseSensitive: boolean;
        createdUser: TerminologyUser$.Inbound;
        creationTime: string;
        description?: string | undefined;
        examples?: Array<TermExample$.Inbound> | undefined;
        highlight: boolean;
        id: number;
        linkedTerms?: Array<FullLinkedTerm$.Inbound> | undefined;
        mistakes?: Array<TermMistake$.Inbound> | undefined;
        modificationTime: string;
        modifiedUser: TerminologyUser$.Inbound;
        pos?: FullTermWithUserPos | undefined;
        tags?: Array<TermTagResponse$.Inbound> | undefined;
        term: string;
        termBankId: number;
        type: Type;
    };

    export const inboundSchema: z.ZodType<FullTermWithUser, z.ZodTypeDef, Inbound> = z
        .object({
            approvedTermExtension: ApprovedTermExtension$.inboundSchema.optional(),
            backlinkedTerms: z.array(FullLinkedTerm$.inboundSchema).optional(),
            caseSensitive: z.boolean(),
            createdUser: TerminologyUser$.inboundSchema,
            creationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            description: z.string().optional(),
            examples: z.array(TermExample$.inboundSchema).optional(),
            highlight: z.boolean(),
            id: z.number().int(),
            linkedTerms: z.array(FullLinkedTerm$.inboundSchema).optional(),
            mistakes: z.array(TermMistake$.inboundSchema).optional(),
            modificationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            modifiedUser: TerminologyUser$.inboundSchema,
            pos: FullTermWithUserPos$.optional(),
            tags: z.array(TermTagResponse$.inboundSchema).optional(),
            term: z.string(),
            termBankId: z.number().int(),
            type: Type$,
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                ...(v.backlinkedTerms === undefined
                    ? null
                    : { backlinkedTerms: v.backlinkedTerms }),
                caseSensitive: v.caseSensitive,
                createdUser: v.createdUser,
                creationTime: v.creationTime,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.examples === undefined ? null : { examples: v.examples }),
                highlight: v.highlight,
                id: v.id,
                ...(v.linkedTerms === undefined ? null : { linkedTerms: v.linkedTerms }),
                ...(v.mistakes === undefined ? null : { mistakes: v.mistakes }),
                modificationTime: v.modificationTime,
                modifiedUser: v.modifiedUser,
                ...(v.pos === undefined ? null : { pos: v.pos }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                term: v.term,
                termBankId: v.termBankId,
                type: v.type,
            };
        });

    export type Outbound = {
        approvedTermExtension?: ApprovedTermExtension$.Outbound | undefined;
        backlinkedTerms?: Array<FullLinkedTerm$.Outbound> | undefined;
        caseSensitive: boolean;
        createdUser: TerminologyUser$.Outbound;
        creationTime: string;
        description?: string | undefined;
        examples?: Array<TermExample$.Outbound> | undefined;
        highlight: boolean;
        id: number;
        linkedTerms?: Array<FullLinkedTerm$.Outbound> | undefined;
        mistakes?: Array<TermMistake$.Outbound> | undefined;
        modificationTime: string;
        modifiedUser: TerminologyUser$.Outbound;
        pos?: FullTermWithUserPos | undefined;
        tags?: Array<TermTagResponse$.Outbound> | undefined;
        term: string;
        termBankId: number;
        type: Type;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FullTermWithUser> = z
        .object({
            approvedTermExtension: ApprovedTermExtension$.outboundSchema.optional(),
            backlinkedTerms: z.array(FullLinkedTerm$.outboundSchema).optional(),
            caseSensitive: z.boolean(),
            createdUser: TerminologyUser$.outboundSchema,
            creationTime: z.date().transform((v) => v.toISOString()),
            description: z.string().optional(),
            examples: z.array(TermExample$.outboundSchema).optional(),
            highlight: z.boolean(),
            id: z.number().int(),
            linkedTerms: z.array(FullLinkedTerm$.outboundSchema).optional(),
            mistakes: z.array(TermMistake$.outboundSchema).optional(),
            modificationTime: z.date().transform((v) => v.toISOString()),
            modifiedUser: TerminologyUser$.outboundSchema,
            pos: FullTermWithUserPos$.optional(),
            tags: z.array(TermTagResponse$.outboundSchema).optional(),
            term: z.string(),
            termBankId: z.number().int(),
            type: Type$,
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                ...(v.backlinkedTerms === undefined
                    ? null
                    : { backlinkedTerms: v.backlinkedTerms }),
                caseSensitive: v.caseSensitive,
                createdUser: v.createdUser,
                creationTime: v.creationTime,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.examples === undefined ? null : { examples: v.examples }),
                highlight: v.highlight,
                id: v.id,
                ...(v.linkedTerms === undefined ? null : { linkedTerms: v.linkedTerms }),
                ...(v.mistakes === undefined ? null : { mistakes: v.mistakes }),
                modificationTime: v.modificationTime,
                modifiedUser: v.modifiedUser,
                ...(v.pos === undefined ? null : { pos: v.pos }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                term: v.term,
                termBankId: v.termBankId,
                type: v.type,
            };
        });
}
