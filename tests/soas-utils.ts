import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Allow,
  Approval,
  Claim,
  Mint,
  Renounce,
  Transfer
} from "../generated/SOAS/SOAS"

export function createAllowEvent(
  original: Address,
  transferable: Address
): Allow {
  let allowEvent = changetype<Allow>(newMockEvent())

  allowEvent.parameters = new Array()

  allowEvent.parameters.push(
    new ethereum.EventParam("original", ethereum.Value.fromAddress(original))
  )
  allowEvent.parameters.push(
    new ethereum.EventParam(
      "transferable",
      ethereum.Value.fromAddress(transferable)
    )
  )

  return allowEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createClaimEvent(holder: Address, amount: BigInt): Claim {
  let claimEvent = changetype<Claim>(newMockEvent())

  claimEvent.parameters = new Array()

  claimEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEvent
}

export function createMintEvent(
  to: Address,
  amount: BigInt,
  since: BigInt,
  until: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("since", ethereum.Value.fromUnsignedBigInt(since))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("until", ethereum.Value.fromUnsignedBigInt(until))
  )

  return mintEvent
}

export function createRenounceEvent(holder: Address, amount: BigInt): Renounce {
  let renounceEvent = changetype<Renounce>(newMockEvent())

  renounceEvent.parameters = new Array()

  renounceEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )
  renounceEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return renounceEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
