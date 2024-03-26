/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SnippetTagV2, SnippetTagV2$ } from "./snippettagv2";
import { TerminologyUser, TerminologyUser$ } from "./terminologyuser";
import * as z from "zod";

export type SnippetWithUser = {
    createdUser: TerminologyUser;
    creationTime: Date;
    description?: string | undefined;
    id: string;
    modificationTime: Date;
    modifiedUser: TerminologyUser;
    shortcut?: string | undefined;
    snippet: string;
    tags?: Array<SnippetTagV2> | undefined;
};

/** @internal */
export namespace SnippetWithUser$ {
    export type Inbound = {
        createdUser: TerminologyUser$.Inbound;
        creationTime: string;
        description?: string | undefined;
        id: string;
        modificationTime: string;
        modifiedUser: TerminologyUser$.Inbound;
        shortcut?: string | undefined;
        snippet: string;
        tags?: Array<SnippetTagV2$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<SnippetWithUser, z.ZodTypeDef, Inbound> = z
        .object({
            createdUser: TerminologyUser$.inboundSchema,
            creationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            description: z.string().optional(),
            id: z.string(),
            modificationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            modifiedUser: TerminologyUser$.inboundSchema,
            shortcut: z.string().optional(),
            snippet: z.string(),
            tags: z.array(SnippetTagV2$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                createdUser: v.createdUser,
                creationTime: v.creationTime,
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                modificationTime: v.modificationTime,
                modifiedUser: v.modifiedUser,
                ...(v.shortcut === undefined ? null : { shortcut: v.shortcut }),
                snippet: v.snippet,
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });

    export type Outbound = {
        createdUser: TerminologyUser$.Outbound;
        creationTime: string;
        description?: string | undefined;
        id: string;
        modificationTime: string;
        modifiedUser: TerminologyUser$.Outbound;
        shortcut?: string | undefined;
        snippet: string;
        tags?: Array<SnippetTagV2$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SnippetWithUser> = z
        .object({
            createdUser: TerminologyUser$.outboundSchema,
            creationTime: z.date().transform((v) => v.toISOString()),
            description: z.string().optional(),
            id: z.string(),
            modificationTime: z.date().transform((v) => v.toISOString()),
            modifiedUser: TerminologyUser$.outboundSchema,
            shortcut: z.string().optional(),
            snippet: z.string(),
            tags: z.array(SnippetTagV2$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                createdUser: v.createdUser,
                creationTime: v.creationTime,
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                modificationTime: v.modificationTime,
                modifiedUser: v.modifiedUser,
                ...(v.shortcut === undefined ? null : { shortcut: v.shortcut }),
                snippet: v.snippet,
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });
}
