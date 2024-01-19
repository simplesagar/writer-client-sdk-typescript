/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeleteSnippetsRequest = {
    teamId: number;
    xRequestID?: string | undefined;
    ids?: Array<string> | undefined;
    organizationId?: number | undefined;
};

export type DeleteSnippetsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    deleteResponse?: shared.DeleteResponse | undefined;
    headers: Record<string, Array<string>>;
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
export namespace DeleteSnippetsRequest$ {
    export type Inbound = {
        teamId: number;
        "X-Request-ID"?: string | undefined;
        ids?: Array<string> | undefined;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteSnippetsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            teamId: z.number().int(),
            "X-Request-ID": z.string().optional(),
            ids: z.array(z.string()).optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v["X-Request-ID"] === undefined ? null : { xRequestID: v["X-Request-ID"] }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        teamId: number;
        "X-Request-ID"?: string | undefined;
        ids?: Array<string> | undefined;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSnippetsRequest> = z
        .object({
            teamId: z.number().int(),
            xRequestID: z.string().optional(),
            ids: z.array(z.string()).optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.xRequestID === undefined ? null : { "X-Request-ID": v.xRequestID }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace DeleteSnippetsResponse$ {
    export type Inbound = {
        ContentType: string;
        DeleteResponse?: shared.DeleteResponse$.Inbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteSnippetsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DeleteResponse: shared.DeleteResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DeleteResponse === undefined ? null : { deleteResponse: v.DeleteResponse }),
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DeleteResponse?: shared.DeleteResponse$.Outbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSnippetsResponse> = z
        .object({
            contentType: z.string(),
            deleteResponse: shared.DeleteResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.deleteResponse === undefined ? null : { DeleteResponse: v.deleteResponse }),
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
