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
  MetaDataTierEnum,
  SubscriptionPublicResponseApiProductNameEnum,
  SubscriptionPublicResponseApiStatusEnum,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 602763,
});

sdk.billing.getSubscriptionDetails().then((res: GetSubscriptionDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```