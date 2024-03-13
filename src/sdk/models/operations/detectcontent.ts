/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type DetectContentRequest = {
    contentDetectorRequest: shared.ContentDetectorRequest;
    organizationId?: number | undefined;
};

export type DetectContentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    classes?: Array<shared.ContentDetectorResponse> | undefined;
};

/** @internal */
export namespace DetectContentRequest$ {
    export type Inbound = {
        ContentDetectorRequest: shared.ContentDetectorRequest$.Inbound;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DetectContentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ContentDetectorRequest: shared.ContentDetectorRequest$.inboundSchema,
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                contentDetectorRequest: v.ContentDetectorRequest,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        ContentDetectorRequest: shared.ContentDetectorRequest$.Outbound;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DetectContentRequest> = z
        .object({
            contentDetectorRequest: shared.ContentDetectorRequest$.outboundSchema,
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ContentDetectorRequest: v.contentDetectorRequest,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace DetectContentResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.ContentDetectorResponse$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<DetectContentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.ContentDetectorResponse$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<shared.ContentDetectorResponse$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DetectContentResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.ContentDetectorResponse$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
