/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetModelCustomizationRequest = {
    customizationId: string;
    modelId: string;
    organizationId?: number | undefined;
};

export type GetModelCustomizationResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    modelCustomization?: shared.ModelCustomization | undefined;
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
export namespace GetModelCustomizationRequest$ {
    export type Inbound = {
        customizationId: string;
        modelId: string;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetModelCustomizationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            customizationId: z.string(),
            modelId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                customizationId: v.customizationId,
                modelId: v.modelId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        customizationId: string;
        modelId: string;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelCustomizationRequest> = z
        .object({
            customizationId: z.string(),
            modelId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                customizationId: v.customizationId,
                modelId: v.modelId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace GetModelCustomizationResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        ModelCustomization?: shared.ModelCustomization$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetModelCustomizationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            ModelCustomization: shared.ModelCustomization$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                ...(v.ModelCustomization === undefined
                    ? null
                    : { modelCustomization: v.ModelCustomization }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        ModelCustomization?: shared.ModelCustomization$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelCustomizationResponse> =
        z
            .object({
                contentType: z.string(),
                headers: z.record(z.array(z.string())),
                modelCustomization: shared.ModelCustomization$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    Headers: v.headers,
                    ...(v.modelCustomization === undefined
                        ? null
                        : { ModelCustomization: v.modelCustomization }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
