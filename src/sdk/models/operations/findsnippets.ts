/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum FindSnippetsSortField {
    Shortcut = "shortcut",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
}

export enum FindSnippetsSortOrder {
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
    sortField?: FindSnippetsSortField;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
    sortOrder?: FindSnippetsSortOrder;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags?: string[];

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;
}

export class FindSnippetsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    paginatedResultSnippetWithUser?: shared.PaginatedResultSnippetWithUser;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
