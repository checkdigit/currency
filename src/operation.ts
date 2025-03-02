// operation.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

const START_DATE = '2018-01-01T00:00:00.000Z';
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
  const itemMap = new Map<string, Item>();

  if (at < START_DATE) {
    throw new TypeError(
      `Lookup functions do not currently support the provided date '${at}'. Support is available for dates starting from 2018 onwards.`,
    );
  }
  for (const operation of operations) {
    if (operation.type === 'create' && operation.createdOn < at) {
      const key = `${operation.item.name}-${operation.createdOn}`;
      itemMap.set(key, operation.item);
    } else if (operation.type === 'delete' && operation.createdOn < at) {
      const key = `${operation.name}-${operation.previousCreatedOn}`;
      itemMap.delete(key);
    }
  }

  return [...itemMap.values()];
}
