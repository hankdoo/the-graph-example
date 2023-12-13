import {
  Allow as AllowEvent,
  Approval as ApprovalEvent,
  Claim as ClaimEvent,
  Mint as MintEvent,
  Renounce as RenounceEvent,
  Transfer as TransferEvent
} from "../generated/SOAS/SOAS"
import {
  Allow,
  Approval,
  Claim,
  Mint,
  Renounce,
  Transfer
} from "../generated/schema"

export function handleAllow(event: AllowEvent): void {
  let entity = new Allow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.original = event.params.original
  entity.transferable = event.params.transferable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaim(event: ClaimEvent): void {
  let entity = new Claim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.holder = event.params.holder
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.since = event.params.since
  entity.until = event.params.until

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRenounce(event: RenounceEvent): void {
  let entity = new Renounce(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.holder = event.params.holder
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
