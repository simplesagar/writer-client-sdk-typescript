/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ListFilesRequest = {
    organizationId?: number | undefined;
};

export type ListFilesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    modelFilesResponse?: shared.ModelFilesResponse | undefined;
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
export namespace ListFilesRequest$ {
    export type Inbound = {
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ListFilesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListFilesRequest> = z
        .object({
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace ListFilesResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        ModelFilesResponse?: shared.ModelFilesResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListFilesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            ModelFilesResponse: shared.ModelFilesResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                ...(v.ModelFilesResponse === undefined
                    ? null
                    : { modelFilesResponse: v.ModelFilesResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        ModelFilesResponse?: shared.ModelFilesResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListFilesResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            modelFilesResponse: shared.ModelFilesResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                ...(v.modelFilesResponse === undefined
                    ? null
                    : { ModelFilesResponse: v.modelFilesResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
