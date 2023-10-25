// operation.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

export interface CreateOperation<Item> {
  type: 'create';
  createdOn: string;
  item: Item;
}

export interface DeleteOperation {
  type: 'delete';
  createdOn: string;
  name: string;
  previousCreatedOn: string;
}

export type Operation<Item> = CreateOperation<Item> | DeleteOperation;

export function getItemsFromOperations<Item extends { name: string }>(
  operations: Operation<Item>[],
  at: string,
): Item[] {
  const itemMap = new Map<string, { item: Item; createdOn: string }>();

  for (const operation of operations) {
    if (operation.type === 'create' && operation.createdOn < at) {
      itemMap.set(operation.item.name, { item: operation.item, createdOn: operation.createdOn });
    } else if (operation.type === 'delete' && operation.createdOn < at) {
      const item = itemMap.get(operation.name);
      if (item && item.createdOn === operation.previousCreatedOn) {
        itemMap.delete(operation.name);
      }
    }
  }

  return [...itemMap.values()].map((entry) => entry.item);
}
