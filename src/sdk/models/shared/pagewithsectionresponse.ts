/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SectionInfo, SectionInfo$ } from "./sectioninfo";
import { SimpleUser, SimpleUser$ } from "./simpleuser";
import * as z from "zod";

export enum PageWithSectionResponseStatus {
    Live = "live",
    Offline = "offline",
}

export type PageWithSectionResponse = {
    content?: string | undefined;
    createdAt: Date;
    id: number;
    order: number;
    section?: SectionInfo | undefined;
    status: PageWithSectionResponseStatus;
    title: string;
    updatedAt: Date;
    updatedBy?: SimpleUser | undefined;
    url: string;
};

/** @internal */
export const PageWithSectionResponseStatus$ = z.nativeEnum(PageWithSectionResponseStatus);

/** @internal */
export namespace PageWithSectionResponse$ {
    export type Inbound = {
        content?: string | undefined;
        createdAt: string;
        id: number;
        order: number;
        section?: SectionInfo$.Inbound | undefined;
        status: PageWithSectionResponseStatus;
        title: string;
        updatedAt: string;
        updatedBy?: SimpleUser$.Inbound | undefined;
        url: string;
    };

    export const inboundSchema: z.ZodType<PageWithSectionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            content: z.string().optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.number().int(),
            order: z.number().int(),
            section: SectionInfo$.inboundSchema.optional(),
            status: PageWithSectionResponseStatus$,
            title: z.string(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            updatedBy: SimpleUser$.inboundSchema.optional(),
            url: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                createdAt: v.createdAt,
                id: v.id,
                order: v.order,
                ...(v.section === undefined ? null : { section: v.section }),
                status: v.status,
                title: v.title,
                updatedAt: v.updatedAt,
                ...(v.updatedBy === undefined ? null : { updatedBy: v.updatedBy }),
                url: v.url,
            };
        });

    export type Outbound = {
        content?: string | undefined;
        createdAt: string;
        id: number;
        order: number;
        section?: SectionInfo$.Outbound | undefined;
        status: PageWithSectionResponseStatus;
        title: string;
        updatedAt: string;
        updatedBy?: SimpleUser$.Outbound | undefined;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PageWithSectionResponse> = z
        .object({
            content: z.string().optional(),
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.number().int(),
            order: z.number().int(),
            section: SectionInfo$.outboundSchema.optional(),
            status: PageWithSectionResponseStatus$,
            title: z.string(),
            updatedAt: z.date().transform((v) => v.toISOString()),
            updatedBy: SimpleUser$.outboundSchema.optional(),
            url: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                createdAt: v.createdAt,
                id: v.id,
                order: v.order,
                ...(v.section === undefined ? null : { section: v.section }),
                status: v.status,
                title: v.title,
                updatedAt: v.updatedAt,
                ...(v.updatedBy === undefined ? null : { updatedBy: v.updatedBy }),
                url: v.url,
            };
        });
}
