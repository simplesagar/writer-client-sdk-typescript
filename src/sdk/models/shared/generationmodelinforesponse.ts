/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum GenerationModelInfoResponseType {
    Gpt = "GPT",
    Instruct = "Instruct",
}

export type GenerationModelInfoResponse = {
    id: string;
    name: string;
    type: GenerationModelInfoResponseType;
};

/** @internal */
export const GenerationModelInfoResponseType$: z.ZodNativeEnum<
    typeof GenerationModelInfoResponseType
> = z.nativeEnum(GenerationModelInfoResponseType);

/** @internal */
export namespace GenerationModelInfoResponse$ {
    export type Inbound = {
        id: string;
        name: string;
        type: GenerationModelInfoResponseType;
    };

    export const inboundSchema: z.ZodType<GenerationModelInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            name: z.string(),
            type: GenerationModelInfoResponseType$,
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                type: v.type,
            };
        });

    export type Outbound = {
        id: string;
        name: string;
        type: GenerationModelInfoResponseType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerationModelInfoResponse> = z
        .object({
            id: z.string(),
            name: z.string(),
            type: GenerationModelInfoResponseType$,
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                type: v.type,
            };
        });
}
