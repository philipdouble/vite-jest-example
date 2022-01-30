import { faker } from "@faker-js/faker";
import { Channel } from "@/models/channel";

export function mockChannel(): Channel {
  return {
    marketingName: faker.company.companyName(),
    siriusSatelliteChannelNumber: faker.datatype.number(),
    siriusSatelliteChannelSid: faker.datatype.number(),
    siriusStreamingChannelNumber: faker.datatype.number(),
    wbSatelliteChannelNumber: faker.datatype.number(),
    xmSatelliteChannelNumber: faker.datatype.number(),
    xmSatelliteSid: faker.datatype.number(),
  };
}
