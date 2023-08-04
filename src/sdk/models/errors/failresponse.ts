/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose, Type } from "class-transformer";

/**
 * Bad Request
 */
export class FailResponse extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata({ elemType: shared.FailMessage })
    @Expose({ name: "errors" })
    @Type(() => shared.FailMessage)
    errors?: shared.FailMessage[];

    @SpeakeasyMetadata()
    @Expose({ name: "extras" })
    extras: any;

    @SpeakeasyMetadata()
    @Expose({ name: "tpe" })
    tpe: string;
    constructor(err: FailResponse) {
        super();
        Object.assign(this, err);
        this.message = JSON.stringify(
            classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
        );

        this.name = "FailResponse";
        Object.setPrototypeOf(this, FailResponse.prototype);
    }
}
