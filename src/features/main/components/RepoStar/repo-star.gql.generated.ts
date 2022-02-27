/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type StarrableFragment_Gist_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragment_Repository_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragment_Topic_Fragment = { id: string, stargazerCount: number, viewerHasStarred: boolean };

export type StarrableFragmentFragment = StarrableFragment_Gist_Fragment | StarrableFragment_Repository_Fragment | StarrableFragment_Topic_Fragment;

export type GetRepoStarQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  owner: Types.Scalars['String'];
}>;


export type GetRepoStarQuery = { repo: { name: string, owner: string }, repository?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined };

export type AddRepoStarMutationVariables = Types.Exact<{
  starrableId: Types.Scalars['ID'];
}>;


export type AddRepoStarMutation = { addStar?: { starrable?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined } | null | undefined };

export type RemoveRepoStarMutationVariables = Types.Exact<{
  starrableId: Types.Scalars['ID'];
}>;


export type RemoveRepoStarMutation = { removeStar?: { starrable?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined } | null | undefined };

export const StarrableFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StarrableFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Starrable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasStarred"}}]}}]} as unknown as DocumentNode<StarrableFragmentFragment, unknown>;
export const GetRepoStarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepoStar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repo"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"name","block":false}}]}]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"owner","block":false}}]}]}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StarrableFragment"}}]}}]}},...StarrableFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRepoStarQuery, GetRepoStarQueryVariables>;
export const AddRepoStarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRepoStar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"starrableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"starrableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"starrableId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"starrable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StarrableFragment"}}]}}]}}]}},...StarrableFragmentFragmentDoc.definitions]} as unknown as DocumentNode<AddRepoStarMutation, AddRepoStarMutationVariables>;
export const RemoveRepoStarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveRepoStar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"starrableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeStar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"starrableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"starrableId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"starrable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StarrableFragment"}}]}}]}}]}},...StarrableFragmentFragmentDoc.definitions]} as unknown as DocumentNode<RemoveRepoStarMutation, RemoveRepoStarMutationVariables>;