/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetRepoWatcherQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  owner: Types.Scalars['String'];
}>;


export type GetRepoWatcherQuery = { repo: { id: string, name: string, owner: string }, repository?: { id: string, viewerCanSubscribe: boolean, viewerSubscription?: Types.SubscriptionState | null | undefined, watchers: { totalCount: number } } | null | undefined };

export type UpdateWatchMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  state: Types.SubscriptionState;
}>;


export type UpdateWatchMutation = { updateSubscription?: { subscribable?: { id: string } | { id: string } | { id: string } | { id: string } | { id: string } | { id: string } | { id: string } | null | undefined } | null | undefined };


export const GetRepoWatcherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepoWatcher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repo"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"name","block":false}}]}]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"owner","block":false}}]}]}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSubscription"}},{"kind":"Field","name":{"kind":"Name","value":"watchers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetRepoWatcherQuery, GetRepoWatcherQueryVariables>;
export const UpdateWatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriptionState"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subscribableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateWatchMutation, UpdateWatchMutationVariables>;