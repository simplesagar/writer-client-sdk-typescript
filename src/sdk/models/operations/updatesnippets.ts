/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateSnippetsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "request, media_type=application/json",
        elemType: shared.SnippetUpdate,
    })
    requestBody?: shared.SnippetUpdate[];

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
    xRequestID?: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;
}

export class UpdateSnippetsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata({ elemType: shared.SnippetWithUser })
    snippetWithUsers?: shared.SnippetWithUser[];

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
