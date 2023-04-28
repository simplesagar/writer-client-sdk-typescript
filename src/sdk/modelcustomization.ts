/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Methods related to Model Customization
 */
export class ModelCustomization {
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
   * Create model customization
   */
  async create(
    req: operations.CreateModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModelCustomizationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/llm/organization/{organizationId}/model/{modelId}/customization",
      req,
      this._globals
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "createCustomizationRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateModelCustomizationResponse =
      new operations.CreateModelCustomizationResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.modelCustomization = utils.objectToClass(
            httpRes?.data,
            shared.ModelCustomization
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
   * Delete Model customization
   */
  async delete(
    req: operations.DeleteModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelCustomizationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteModelCustomizationResponse =
      new operations.DeleteModelCustomizationResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteModelCustomization200ApplicationJSONObject =
            utils.objectToClass(httpRes?.data);
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
   * Get model customization
   */
  async get(
    req: operations.GetModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelCustomizationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetModelCustomizationResponse =
      new operations.GetModelCustomizationResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.modelCustomization = utils.objectToClass(
            httpRes?.data,
            shared.ModelCustomization
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
   * List model customizations
   */
  async list(
    req: operations.ListModelCustomizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListModelCustomizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListModelCustomizationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/llm/organization/{organizationId}/model/{modelId}/customization",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListModelCustomizationsResponse =
      new operations.ListModelCustomizationsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
        headers: utils.getHeadersFromResponse(httpRes.headers),
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.customizationsResponse = utils.objectToClass(
            httpRes?.data,
            shared.CustomizationsResponse
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
