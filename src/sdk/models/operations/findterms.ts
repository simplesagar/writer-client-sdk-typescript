/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum FindTermsPartOfSpeech {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective",
}

export enum FindTermsSortField {
    Term = "term",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
    Type = "type",
}

export enum FindTermsSortOrder {
    Asc = "asc",
    Desc = "desc",
}

export enum FindTermsType {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending",
}

export class FindTermsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partOfSpeech" })
    partOfSpeech?: FindTermsPartOfSpeech;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
    sortField?: FindTermsSortField;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
    sortOrder?: FindTermsSortOrder;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags?: string[];

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
    term?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
    type?: FindTermsType;
}

export class FindTermsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    paginatedResultFullTermWithUser?: shared.PaginatedResultFullTermWithUser;

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
