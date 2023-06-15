# billing

## Overview

Methods related to Billing

### Available Operations

* [getSubscriptionDetails](#getsubscriptiondetails) - Get your organization subscription details

## getSubscriptionDetails

Get your organization subscription details

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GetSubscriptionDetailsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  MetaDataTier,
  SubscriptionPublicResponseApiProductName,
  SubscriptionPublicResponseApiStatus,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 602763,
});

sdk.billing.getSubscriptionDetails().then((res: GetSubscriptionDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetSubscriptionDetailsResponse](../../models/operations/getsubscriptiondetailsresponse.md)>**
