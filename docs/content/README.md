# content

## Overview

Methods related to Content

### Available Operations

* [check](#check) - Check your content against your preset styleguide.
* [correct](#correct) - Apply the style guide suggestions directly to your content.

## check

Check your content against your preset styleguide.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ContentCheckResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { ContentIssueServiceEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 149675,
});

sdk.content.check({
  contentRequest: {
    content: "iste",
    settings: {
      ageAndFamilyStatus: false,
      confidence: false,
      contentSafeguards: false,
      disability: false,
      genderIdentitySensitivity: false,
      genderInclusiveNouns: false,
      genderInclusivePronouns: false,
      grammar: false,
      healthyCommunication: false,
      passiveVoice: false,
      raceEthnicityNationalitySensitivity: false,
      sexualOrientationSensitivity: false,
      spelling: false,
      substanceUseSensitivity: false,
      unclearReference: false,
      wordiness: false,
    },
  },
  teamId: 222321,
}).then((res: ContentCheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## correct

Apply the style guide suggestions directly to your content.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ContentCorrectResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 616934,
});

sdk.content.correct({
  contentRequest: {
    content: "laboriosam",
    settings: {
      ageAndFamilyStatus: false,
      confidence: false,
      contentSafeguards: false,
      disability: false,
      genderIdentitySensitivity: false,
      genderInclusiveNouns: false,
      genderInclusivePronouns: false,
      grammar: false,
      healthyCommunication: false,
      passiveVoice: false,
      raceEthnicityNationalitySensitivity: false,
      sexualOrientationSensitivity: false,
      spelling: false,
      substanceUseSensitivity: false,
      unclearReference: false,
      wordiness: false,
    },
  },
  xRequestID: "hic",
  teamId: 902599,
}).then((res: ContentCorrectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```