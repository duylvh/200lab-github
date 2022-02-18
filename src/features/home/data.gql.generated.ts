/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetReadmeQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  owner: Types.Scalars['String'];
}>;


export type GetReadmeQuery = { repo: { name: string, owner: string }, repository?: { id: string, object?: { text?: string | null | undefined } | {} | null | undefined } | null | undefined };


export const GetReadmeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReadme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repo"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"name","block":false}}]}]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"export"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"as"},"value":{"kind":"StringValue","value":"owner","block":false}}]}]}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"expression"},"value":{"kind":"StringValue","value":"HEAD:README.md","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReadmeQuery, GetReadmeQueryVariables>;