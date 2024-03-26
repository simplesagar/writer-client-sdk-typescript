/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListModelsRequest = {
    organizationId?: number | undefined;
};

export type ListModelsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    generationModelsResponse?: shared.GenerationModelsResponse | undefined;
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
export namespace ListModelsRequest$ {
    export type Inbound = {
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ListModelsRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListModelsRequest> = z
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
export namespace ListModelsResponse$ {
    export type Inbound = {
        ContentType: string;
        GenerationModelsResponse?: shared.GenerationModelsResponse$.Inbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListModelsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GenerationModelsResponse: shared.GenerationModelsResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GenerationModelsResponse === undefined
                    ? null
                    : { generationModelsResponse: v.GenerationModelsResponse }),
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        GenerationModelsResponse?: shared.GenerationModelsResponse$.Outbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListModelsResponse> = z
        .object({
            contentType: z.string(),
            generationModelsResponse: shared.GenerationModelsResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.generationModelsResponse === undefined
                    ? null
                    : { GenerationModelsResponse: v.generationModelsResponse }),
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
