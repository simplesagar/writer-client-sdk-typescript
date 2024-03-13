/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export enum PartOfSpeech {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective",
}

export enum QueryParamSortField {
    Term = "term",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
    Type = "type",
}

export enum QueryParamSortOrder {
    Asc = "asc",
    Desc = "desc",
}

export enum Type {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending",
}

export type FindTermsRequest = {
    limit?: number | undefined;
    offset?: number | undefined;
    organizationId?: number | undefined;
    partOfSpeech?: PartOfSpeech | undefined;
    sortField?: QueryParamSortField | undefined;
    sortOrder?: QueryParamSortOrder | undefined;
    tags?: Array<string> | undefined;
    teamId: number;
    term?: string | undefined;
    type?: Type | undefined;
};

export type FindTermsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    paginatedResultFullTermWithUser?: shared.PaginatedResultFullTermWithUser | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export const PartOfSpeech$ = z.nativeEnum(PartOfSpeech);

/** @internal */
export const QueryParamSortField$ = z.nativeEnum(QueryParamSortField);

/** @internal */
export const QueryParamSortOrder$ = z.nativeEnum(QueryParamSortOrder);

/** @internal */
export const Type$ = z.nativeEnum(Type);

/** @internal */
export namespace FindTermsRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        organizationId?: number | undefined;
        partOfSpeech?: PartOfSpeech | undefined;
        sortField?: QueryParamSortField | undefined;
        sortOrder?: QueryParamSortOrder | undefined;
        tags?: Array<string> | undefined;
        teamId: number;
        term?: string | undefined;
        type?: Type | undefined;
    };

    export const inboundSchema: z.ZodType<FindTermsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            organizationId: z.number().int().optional(),
            partOfSpeech: PartOfSpeech$.optional(),
            sortField: QueryParamSortField$.optional(),
            sortOrder: QueryParamSortOrder$.optional(),
            tags: z.array(z.string()).optional(),
            teamId: z.number().int(),
            term: z.string().optional(),
            type: Type$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                ...(v.partOfSpeech === undefined ? null : { partOfSpeech: v.partOfSpeech }),
                ...(v.sortField === undefined ? null : { sortField: v.sortField }),
                ...(v.sortOrder === undefined ? null : { sortOrder: v.sortOrder }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                teamId: v.teamId,
                ...(v.term === undefined ? null : { term: v.term }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        organizationId?: number | undefined;
        partOfSpeech?: PartOfSpeech | undefined;
        sortField?: QueryParamSortField | undefined;
        sortOrder?: QueryParamSortOrder | undefined;
        tags?: Array<string> | undefined;
        teamId: number;
        term?: string | undefined;
        type?: Type | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FindTermsRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            organizationId: z.number().int().optional(),
            partOfSpeech: PartOfSpeech$.optional(),
            sortField: QueryParamSortField$.optional(),
            sortOrder: QueryParamSortOrder$.optional(),
            tags: z.array(z.string()).optional(),
            teamId: z.number().int(),
            term: z.string().optional(),
            type: Type$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                ...(v.partOfSpeech === undefined ? null : { partOfSpeech: v.partOfSpeech }),
                ...(v.sortField === undefined ? null : { sortField: v.sortField }),
                ...(v.sortOrder === undefined ? null : { sortOrder: v.sortOrder }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                teamId: v.teamId,
                ...(v.term === undefined ? null : { term: v.term }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace FindTermsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        PaginatedResult_FullTermWithUser?:
            | shared.PaginatedResultFullTermWithUser$.Inbound
            | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<FindTermsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            PaginatedResult_FullTermWithUser:
                shared.PaginatedResultFullTermWithUser$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                ...(v.PaginatedResult_FullTermWithUser === undefined
                    ? null
                    : { paginatedResultFullTermWithUser: v.PaginatedResult_FullTermWithUser }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        PaginatedResult_FullTermWithUser?:
            | shared.PaginatedResultFullTermWithUser$.Outbound
            | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FindTermsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            paginatedResultFullTermWithUser:
                shared.PaginatedResultFullTermWithUser$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                ...(v.paginatedResultFullTermWithUser === undefined
                    ? null
                    : { PaginatedResult_FullTermWithUser: v.paginatedResultFullTermWithUser }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
