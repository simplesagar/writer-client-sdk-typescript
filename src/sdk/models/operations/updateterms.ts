/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateTermsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateTermsRequest: shared.UpdateTermsRequest;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
    xRequestID?: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;
}

export class UpdateTermsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createTermsResponse?: shared.CreateTermsResponse;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
