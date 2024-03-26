/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ContentSettings, ContentSettings$ } from "./contentsettings";
import * as z from "zod";

export type ContentRequest = {
    content: string;
    settings: ContentSettings;
};

/** @internal */
export namespace ContentRequest$ {
    export type Inbound = {
        content: string;
        settings: ContentSettings$.Inbound;
    };

    export const inboundSchema: z.ZodType<ContentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            content: z.string(),
            settings: ContentSettings$.inboundSchema,
        })
        .transform((v) => {
            return {
                content: v.content,
                settings: v.settings,
            };
        });

    export type Outbound = {
        content: string;
        settings: ContentSettings$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentRequest> = z
        .object({
            content: z.string(),
            settings: ContentSettings$.outboundSchema,
        })
        .transform((v) => {
            return {
                content: v.content,
                settings: v.settings,
            };
        });
}
