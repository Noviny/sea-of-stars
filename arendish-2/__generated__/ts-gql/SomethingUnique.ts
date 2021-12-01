// ts-gql-integrity:57ad4c0b3bb5e799eb9cffc6df15e733
/*
ts-gql-meta-begin
{
  "hash": "8fe87f5e9e4d3718773bdf5438229f0c"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type SomethingUniqueQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type SomethingUniqueQuery = (
  { readonly __typename: 'Query' }
  & { readonly locations: SchemaTypes.Maybe<ReadonlyArray<(
    { readonly __typename: 'Location' }
    & Pick<SchemaTypes.Location, 'id' | 'name'>
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

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"SomethingUnique\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"locations\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
