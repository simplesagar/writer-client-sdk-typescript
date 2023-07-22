/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListTeamDocumentsSortField {
    Title = "title",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
    ModifiedByMeTime = "modifiedByMeTime",
    OpenedByMeTime = "openedByMeTime",
}

export enum ListTeamDocumentsSortOrder {
    Asc = "asc",
    Desc = "desc",
}

export class ListTeamDocumentsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
    search?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
    sortField?: ListTeamDocumentsSortField;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
    sortOrder?: ListTeamDocumentsSortOrder;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;
}

export class ListTeamDocumentsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    briefDocuments?: shared.BriefDocuments;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    failResponse?: shared.FailResponse;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
