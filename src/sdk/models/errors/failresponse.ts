/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { FailMessage } from "./failmessage";
import { classToPlain, Expose, Type } from "class-transformer";

/**
 * Bad Request
 */
export class FailResponse extends Error {
    @SpeakeasyMetadata({ elemType: FailMessage })
    @Expose({ name: "errors" })
    @Type(() => FailMessage)
    errors?: FailMessage[];

    @SpeakeasyMetadata()
    @Expose({ name: "extras" })
    extras: any;

    @SpeakeasyMetadata()
    @Expose({ name: "tpe" })
    tpe: string;

    constructor(err?: FailResponse) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "FailResponse";
        Object.setPrototypeOf(this, FailResponse.prototype);
    }
}