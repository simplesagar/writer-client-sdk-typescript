<!-- Start SDK Example Usage [usage] -->
```typescript
import { Writer } from "@writerai/writer-sdk";

const writer = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 850421,
});

async function run() {
    const result = await writer.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->