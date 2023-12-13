import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Allow } from "../generated/schema"
import { Allow as AllowEvent } from "../generated/SOAS/SOAS"
import { handleAllow } from "../src/soas"
import { createAllowEvent } from "./soas-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let original = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let transferable = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAllowEvent = createAllowEvent(original, transferable)
    handleAllow(newAllowEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Allow created and stored", () => {
    assert.entityCount("Allow", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Allow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "original",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Allow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "transferable",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
