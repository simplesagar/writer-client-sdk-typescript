/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Methods related to Snippets
 */
export class Snippet {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;
  _globals: any;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string,
    globals: any
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
    this._globals = globals;
  }

  /**
   * Delete snippets
   */
  async delete(
    req: operations.DeleteSnippetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnippetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnippetsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/snippet/organization/{organizationId}/team/{teamId}",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req, this._globals);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "delete",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteSnippetsResponse =
      new operations.DeleteSnippetsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteResponse = utils.objectToClass(
            httpRes?.data,
            shared.DeleteResponse
          );
        }
        break;
      case [400, 401, 403, 404, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.failResponse = utils.objectToClass(
            httpRes?.data,
            shared.FailResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Find snippets
   */
  async find(
    req: operations.FindSnippetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindSnippetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindSnippetsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/snippet/organization/{organizationId}/team/{teamId}",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req, this._globals);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.FindSnippetsResponse =
      new operations.FindSnippetsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.paginatedResultSnippetWithUser = utils.objectToClass(
            httpRes?.data,
            shared.PaginatedResultSnippetWithUser
          );
        }
        break;
      case [400, 401, 403, 404, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.failResponse = utils.objectToClass(
            httpRes?.data,
            shared.FailResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Update snippets
   */
  async update(
    req: operations.UpdateSnippetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSnippetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSnippetsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/snippet/organization/{organizationId}/team/{teamId}",
      req,
      this._globals
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = {
      ...utils.getHeadersFromRequest(req),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UpdateSnippetsResponse =
      new operations.UpdateSnippetsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.snippetWithUsers = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.snippetWithUsers = utils.objectToClass(
            httpRes?.data,
            shared.SnippetWithUser,
            resFieldDepth
          );
        }
        break;
      case [400, 401, 403, 404, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.failResponse = utils.objectToClass(
            httpRes?.data,
            shared.FailResponse
          );
        }
        break;
    }

    return res;
  }
}
