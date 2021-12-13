// ts-gql-integrity:4f54f11761bb6a61fd53fd21f3933db7
/*
ts-gql-meta-begin
{
  "hash": "f61854b94fffec3e2e50fe30ebe55b47"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type SomethingUniqueQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type SomethingUniqueQuery = (
  { readonly __typename: 'Query' }
  & { readonly notes: SchemaTypes.Maybe<ReadonlyArray<(
    { readonly __typename: 'Note' }
    & { readonly content: SchemaTypes.Maybe<(
      { readonly __typename: 'Note_content_Document' }
      & Pick<SchemaTypes.Note_content_Document, 'document'>
    )> }
  )>> }
);


      
export type type = TypedDocumentNode<{
  type: "query";
  result: SomethingUniqueQuery;
  variables: SomethingUniqueQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
  fragments: SchemaTypes.TSGQLRequiredFragments<"none">
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    SomethingUnique: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"SomethingUnique\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"content\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"document\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"hydrateRelationships\"},\"value\":{\"kind\":\"BooleanValue\",\"value\":true}}],\"directives\":[]}]}}]}}]}}]}")
