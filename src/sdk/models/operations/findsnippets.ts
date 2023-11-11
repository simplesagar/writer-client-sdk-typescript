/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export enum SortField {
    Shortcut = "shortcut",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
}

export enum SortOrder {
    Asc = "asc",
    Desc = "desc",
}

export class FindSnippetsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
    search?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shortcuts" })
    shortcuts?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
    sortField?: SortField;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
    sortOrder?: SortOrder;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags?: string[];

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;
}

export class FindSnippetsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    paginatedResultSnippetWithUser?: shared.PaginatedResultSnippetWithUser;

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
