/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetModelCustomizationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customizationId" })
    customizationId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
    modelId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;
}

export class GetModelCustomizationResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    @SpeakeasyMetadata()
    modelCustomization?: shared.ModelCustomization;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
