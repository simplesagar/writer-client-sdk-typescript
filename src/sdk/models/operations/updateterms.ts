/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type UpdateTermsRequest = {
    updateTermsRequest: shared.UpdateTermsRequest;
    teamId: number;
    xRequestID?: string | undefined;
    organizationId?: number | undefined;
};

export type UpdateTermsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    createTermsResponse?: shared.CreateTermsResponse | undefined;
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
export namespace UpdateTermsRequest$ {
    export type Inbound = {
        UpdateTermsRequest: shared.UpdateTermsRequest$.Inbound;
        teamId: number;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateTermsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            UpdateTermsRequest: shared.UpdateTermsRequest$.inboundSchema,
            teamId: z.number().int(),
            "X-Request-ID": z.string().optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                updateTermsRequest: v.UpdateTermsRequest,
                teamId: v.teamId,
                ...(v["X-Request-ID"] === undefined ? null : { xRequestID: v["X-Request-ID"] }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        UpdateTermsRequest: shared.UpdateTermsRequest$.Outbound;
        teamId: number;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateTermsRequest> = z
        .object({
            updateTermsRequest: shared.UpdateTermsRequest$.outboundSchema,
            teamId: z.number().int(),
            xRequestID: z.string().optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                UpdateTermsRequest: v.updateTermsRequest,
                teamId: v.teamId,
                ...(v.xRequestID === undefined ? null : { "X-Request-ID": v.xRequestID }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace UpdateTermsResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateTermsResponse?: shared.CreateTermsResponse$.Inbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateTermsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateTermsResponse: shared.CreateTermsResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateTermsResponse === undefined
                    ? null
                    : { createTermsResponse: v.CreateTermsResponse }),
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateTermsResponse?: shared.CreateTermsResponse$.Outbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateTermsResponse> = z
        .object({
            contentType: z.string(),
            createTermsResponse: shared.CreateTermsResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createTermsResponse === undefined
                    ? null
                    : { CreateTermsResponse: v.createTermsResponse }),
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
