/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SimpleUser, SimpleUser$ } from "./simpleuser";
import * as z from "zod";

export enum DocumentAccess {
    Private = "private",
    Public = "public",
    Shared = "shared",
}

export type Document = {
    access: DocumentAccess;
    content: string;
    createdUser?: SimpleUser | undefined;
    creationTime: Date;
    id: number;
    modificationTime: Date;
    modifiedUser?: SimpleUser | undefined;
    organizationId: number;
    score: number;
    teamId: number;
    title: string;
};

/** @internal */
export const DocumentAccess$: z.ZodNativeEnum<typeof DocumentAccess> = z.nativeEnum(DocumentAccess);

/** @internal */
export namespace Document$ {
    export type Inbound = {
        access: DocumentAccess;
        content: string;
        createdUser?: SimpleUser$.Inbound | undefined;
        creationTime: string;
        id: number;
        modificationTime: string;
        modifiedUser?: SimpleUser$.Inbound | undefined;
        organizationId: number;
        score: number;
        teamId: number;
        title: string;
    };

    export const inboundSchema: z.ZodType<Document, z.ZodTypeDef, Inbound> = z
        .object({
            access: DocumentAccess$,
            content: z.string(),
            createdUser: SimpleUser$.inboundSchema.optional(),
            creationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.number().int(),
            modificationTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            modifiedUser: SimpleUser$.inboundSchema.optional(),
            organizationId: z.number().int(),
            score: z.number().int(),
            teamId: z.number().int(),
            title: z.string(),
        })
        .transform((v) => {
            return {
                access: v.access,
                content: v.content,
                ...(v.createdUser === undefined ? null : { createdUser: v.createdUser }),
                creationTime: v.creationTime,
                id: v.id,
                modificationTime: v.modificationTime,
                ...(v.modifiedUser === undefined ? null : { modifiedUser: v.modifiedUser }),
                organizationId: v.organizationId,
                score: v.score,
                teamId: v.teamId,
                title: v.title,
            };
        });

    export type Outbound = {
        access: DocumentAccess;
        content: string;
        createdUser?: SimpleUser$.Outbound | undefined;
        creationTime: string;
        id: number;
        modificationTime: string;
        modifiedUser?: SimpleUser$.Outbound | undefined;
        organizationId: number;
        score: number;
        teamId: number;
        title: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Document> = z
        .object({
            access: DocumentAccess$,
            content: z.string(),
            createdUser: SimpleUser$.outboundSchema.optional(),
            creationTime: z.date().transform((v) => v.toISOString()),
            id: z.number().int(),
            modificationTime: z.date().transform((v) => v.toISOString()),
            modifiedUser: SimpleUser$.outboundSchema.optional(),
            organizationId: z.number().int(),
            score: z.number().int(),
            teamId: z.number().int(),
            title: z.string(),
        })
        .transform((v) => {
            return {
                access: v.access,
                content: v.content,
                ...(v.createdUser === undefined ? null : { createdUser: v.createdUser }),
                creationTime: v.creationTime,
                id: v.id,
                modificationTime: v.modificationTime,
                ...(v.modifiedUser === undefined ? null : { modifiedUser: v.modifiedUser }),
                organizationId: v.organizationId,
                score: v.score,
                teamId: v.teamId,
                title: v.title,
            };
        });
}
