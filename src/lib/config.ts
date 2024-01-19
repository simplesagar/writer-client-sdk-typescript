/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { pathToFunc } from "./url";
import { RetryConfig } from "./retries";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://enterprise-api.writer.com"] as const;

export type SDKOptions = {
    apiKey?: string | (() => Promise<string>);

    /**
     * Allows setting the organizationId parameter for all supported operations
     */
    organizationId?: number;

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL {
    let serverURL = options.serverURL;

    const params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "1.7",
    sdkVersion: "3.0.0",
    genVersion: "2.237.2",
    userAgent: "speakeasy-sdk/typescript 3.0.0 2.237.2 1.7 @writerai/writer-sdk",
});
