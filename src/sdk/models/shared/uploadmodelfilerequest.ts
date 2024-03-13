/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64";
import { blobLikeSchema } from "../../../sdk/types";
import * as z from "zod";

export type FileT = {
    content: Uint8Array | string;
    fileName: string;
};

export type UploadModelFileRequest = {
    file: FileT | Blob;
};

/** @internal */
export namespace FileT$ {
    export type Inbound = {
        content: Uint8Array | string;
        fileName: string;
    };

    export const inboundSchema: z.ZodType<FileT, z.ZodTypeDef, Inbound> = z
        .object({
            content: b64$.zodInbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });

    export type Outbound = {
        content: Uint8Array;
        fileName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileT> = z
        .object({
            content: b64$.zodOutbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });
}

/** @internal */
export namespace UploadModelFileRequest$ {
    export type Inbound = {
        file: FileT$.Inbound;
    };

    export const inboundSchema: z.ZodType<UploadModelFileRequest, z.ZodTypeDef, Inbound> = z
        .object({
            file: z.lazy(() => FileT$.inboundSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });

    export type Outbound = {
        file: FileT$.Outbound | Blob;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadModelFileRequest> = z
        .object({
            file: z.lazy(() => FileT$.outboundSchema).or(blobLikeSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });
}
