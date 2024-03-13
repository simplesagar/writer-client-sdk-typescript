/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export enum Status {
    Live = "live",
    Offline = "offline",
}

export type ListPagesRequest = {
    limit?: number | undefined;
    offset?: number | undefined;
    status?: Status | undefined;
};

export type ListPagesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    paginatedResultPagePublicApiResponse?: shared.PaginatedResultPagePublicApiResponse | undefined;
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
export const Status$ = z.nativeEnum(Status);

/** @internal */
export namespace ListPagesRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        status?: Status | undefined;
    };

    export const inboundSchema: z.ZodType<ListPagesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            status: Status$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        status?: Status | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListPagesRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            status: Status$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}

/** @internal */
export namespace ListPagesResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        PaginatedResult_PagePublicApiResponse?:
            | shared.PaginatedResultPagePublicApiResponse$.Inbound
            | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListPagesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            PaginatedResult_PagePublicApiResponse:
                shared.PaginatedResultPagePublicApiResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                ...(v.PaginatedResult_PagePublicApiResponse === undefined
                    ? null
                    : {
                          paginatedResultPagePublicApiResponse:
                              v.PaginatedResult_PagePublicApiResponse,
                      }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        PaginatedResult_PagePublicApiResponse?:
            | shared.PaginatedResultPagePublicApiResponse$.Outbound
            | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListPagesResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            paginatedResultPagePublicApiResponse:
                shared.PaginatedResultPagePublicApiResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                ...(v.paginatedResultPagePublicApiResponse === undefined
                    ? null
                    : {
                          PaginatedResult_PagePublicApiResponse:
                              v.paginatedResultPagePublicApiResponse,
                      }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
