// ts-gql-integrity:c8bb1fc99844f33eca8dfcc6279ed453
/*
ts-gql-meta-begin
{
  "hash": "a34f1318102a1685306f5592e5723cc5"
}
ts-gql-meta-end
*/
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type User = {
  readonly __typename: 'User';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly password: Maybe<PasswordState>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
  readonly character: Maybe<ReadonlyArray<Character>>;
  readonly characterCount: Maybe<Scalars['Int']>;
};


export type UsernotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UsernotesCountArgs = {
  where?: NoteWhereInput;
};


export type UsercharacterArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UsercharacterCountArgs = {
  where?: CharacterWhereInput;
};

export type PasswordState = {
  readonly __typename: 'PasswordState';
  readonly isSet: Scalars['Boolean'];
};

export type UserWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly email?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly email?: Maybe<StringFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
  readonly character?: Maybe<CharacterManyRelationFilter>;
};

export type IDFilter = {
  readonly equals?: Maybe<Scalars['ID']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly lt?: Maybe<Scalars['ID']>;
  readonly lte?: Maybe<Scalars['ID']>;
  readonly gt?: Maybe<Scalars['ID']>;
  readonly gte?: Maybe<Scalars['ID']>;
  readonly not?: Maybe<IDFilter>;
};

export type StringFilter = {
  readonly equals?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: Maybe<Scalars['String']>;
  readonly lte?: Maybe<Scalars['String']>;
  readonly gt?: Maybe<Scalars['String']>;
  readonly gte?: Maybe<Scalars['String']>;
  readonly contains?: Maybe<Scalars['String']>;
  readonly startsWith?: Maybe<Scalars['String']>;
  readonly endsWith?: Maybe<Scalars['String']>;
  readonly not?: Maybe<NestedStringFilter>;
};

export type NestedStringFilter = {
  readonly equals?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: Maybe<Scalars['String']>;
  readonly lte?: Maybe<Scalars['String']>;
  readonly gt?: Maybe<Scalars['String']>;
  readonly gte?: Maybe<Scalars['String']>;
  readonly contains?: Maybe<Scalars['String']>;
  readonly startsWith?: Maybe<Scalars['String']>;
  readonly endsWith?: Maybe<Scalars['String']>;
  readonly not?: Maybe<NestedStringFilter>;
};

export type NoteManyRelationFilter = {
  readonly every?: Maybe<NoteWhereInput>;
  readonly some?: Maybe<NoteWhereInput>;
  readonly none?: Maybe<NoteWhereInput>;
};

export type CharacterManyRelationFilter = {
  readonly every?: Maybe<CharacterWhereInput>;
  readonly some?: Maybe<CharacterWhereInput>;
  readonly none?: Maybe<CharacterWhereInput>;
};

export type UserOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
  readonly email?: Maybe<OrderDirection>;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type UserUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
  readonly character?: Maybe<CharacterRelateToManyForUpdateInput>;
};

export type NoteRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<NoteWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<NoteWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<NoteCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<NoteWhereUniqueInput>>;
};

export type CharacterRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<CharacterWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<CharacterWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<CharacterCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<CharacterWhereUniqueInput>>;
};

export type UserUpdateArgs = {
  readonly where: UserWhereUniqueInput;
  readonly data: UserUpdateInput;
};

export type UserCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
  readonly character?: Maybe<CharacterRelateToManyForCreateInput>;
};

export type NoteRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<NoteCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<NoteWhereUniqueInput>>;
};

export type CharacterRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<CharacterCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<CharacterWhereUniqueInput>>;
};

export type Note = {
  readonly __typename: 'Note';
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly content: Maybe<Note_content_Document>;
  readonly publishDate: Maybe<Scalars['DateTime']>;
  readonly author: Maybe<User>;
  readonly description: Maybe<Note_description_Document>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clocksCount: Maybe<Scalars['Int']>;
};


export type NotecharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type NotecharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type NotefactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type NotefactionsCountArgs = {
  where?: FactionWhereInput;
};


export type NotelocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type NotelocationsCountArgs = {
  where?: LocationWhereInput;
};


export type NotetagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type NotetagsCountArgs = {
  where?: TagWhereInput;
};


export type NoteclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type NoteclocksCountArgs = {
  where?: ClockWhereInput;
};

export type Note_content_Document = {
  readonly __typename: 'Note_content_Document';
  readonly document: Scalars['JSON'];
};


export type Note_content_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};


export type Note_description_Document = {
  readonly __typename: 'Note_description_Document';
  readonly document: Scalars['JSON'];
};


export type Note_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type NoteWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type NoteWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<NoteWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<NoteWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<NoteWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly title?: Maybe<StringFilter>;
  readonly status?: Maybe<StringNullableFilter>;
  readonly publishDate?: Maybe<DateTimeNullableFilter>;
  readonly author?: Maybe<UserWhereInput>;
  readonly characters?: Maybe<CharacterManyRelationFilter>;
  readonly factions?: Maybe<FactionManyRelationFilter>;
  readonly locations?: Maybe<LocationManyRelationFilter>;
  readonly tags?: Maybe<TagManyRelationFilter>;
  readonly clocks?: Maybe<ClockManyRelationFilter>;
};

export type StringNullableFilter = {
  readonly equals?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: Maybe<Scalars['String']>;
  readonly lte?: Maybe<Scalars['String']>;
  readonly gt?: Maybe<Scalars['String']>;
  readonly gte?: Maybe<Scalars['String']>;
  readonly contains?: Maybe<Scalars['String']>;
  readonly startsWith?: Maybe<Scalars['String']>;
  readonly endsWith?: Maybe<Scalars['String']>;
  readonly not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  readonly equals?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: Maybe<Scalars['String']>;
  readonly lte?: Maybe<Scalars['String']>;
  readonly gt?: Maybe<Scalars['String']>;
  readonly gte?: Maybe<Scalars['String']>;
  readonly contains?: Maybe<Scalars['String']>;
  readonly startsWith?: Maybe<Scalars['String']>;
  readonly endsWith?: Maybe<Scalars['String']>;
  readonly not?: Maybe<NestedStringNullableFilter>;
};

export type DateTimeNullableFilter = {
  readonly equals?: Maybe<Scalars['DateTime']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: Maybe<Scalars['DateTime']>;
  readonly lte?: Maybe<Scalars['DateTime']>;
  readonly gt?: Maybe<Scalars['DateTime']>;
  readonly gte?: Maybe<Scalars['DateTime']>;
  readonly not?: Maybe<DateTimeNullableFilter>;
};

export type FactionManyRelationFilter = {
  readonly every?: Maybe<FactionWhereInput>;
  readonly some?: Maybe<FactionWhereInput>;
  readonly none?: Maybe<FactionWhereInput>;
};

export type LocationManyRelationFilter = {
  readonly every?: Maybe<LocationWhereInput>;
  readonly some?: Maybe<LocationWhereInput>;
  readonly none?: Maybe<LocationWhereInput>;
};

export type TagManyRelationFilter = {
  readonly every?: Maybe<TagWhereInput>;
  readonly some?: Maybe<TagWhereInput>;
  readonly none?: Maybe<TagWhereInput>;
};

export type ClockManyRelationFilter = {
  readonly every?: Maybe<ClockWhereInput>;
  readonly some?: Maybe<ClockWhereInput>;
  readonly none?: Maybe<ClockWhereInput>;
};

export type NoteOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly title?: Maybe<OrderDirection>;
  readonly status?: Maybe<OrderDirection>;
  readonly publishDate?: Maybe<OrderDirection>;
};

export type NoteUpdateInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['JSON']>;
  readonly publishDate?: Maybe<Scalars['DateTime']>;
  readonly author?: Maybe<UserRelateToOneForUpdateInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForUpdateInput>;
  readonly factions?: Maybe<FactionRelateToManyForUpdateInput>;
  readonly locations?: Maybe<LocationRelateToManyForUpdateInput>;
  readonly tags?: Maybe<TagRelateToManyForUpdateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForUpdateInput>;
};

export type UserRelateToOneForUpdateInput = {
  readonly create?: Maybe<UserCreateInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
  readonly disconnect?: Maybe<Scalars['Boolean']>;
};

export type FactionRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<FactionWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<FactionWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<FactionCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<FactionWhereUniqueInput>>;
};

export type LocationRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<LocationWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<LocationWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<LocationCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<LocationWhereUniqueInput>>;
};

export type TagRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<TagCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<TagWhereUniqueInput>>;
};

export type ClockRelateToManyForUpdateInput = {
  readonly disconnect?: Maybe<ReadonlyArray<ClockWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<ClockWhereUniqueInput>>;
  readonly create?: Maybe<ReadonlyArray<ClockCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<ClockWhereUniqueInput>>;
};

export type NoteUpdateArgs = {
  readonly where: NoteWhereUniqueInput;
  readonly data: NoteUpdateInput;
};

export type NoteCreateInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['JSON']>;
  readonly publishDate?: Maybe<Scalars['DateTime']>;
  readonly author?: Maybe<UserRelateToOneForCreateInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForCreateInput>;
  readonly factions?: Maybe<FactionRelateToManyForCreateInput>;
  readonly locations?: Maybe<LocationRelateToManyForCreateInput>;
  readonly tags?: Maybe<TagRelateToManyForCreateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForCreateInput>;
};

export type UserRelateToOneForCreateInput = {
  readonly create?: Maybe<UserCreateInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
};

export type FactionRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<FactionCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<FactionWhereUniqueInput>>;
};

export type LocationRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<LocationCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<LocationWhereUniqueInput>>;
};

export type TagRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<TagCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<TagWhereUniqueInput>>;
};

export type ClockRelateToManyForCreateInput = {
  readonly create?: Maybe<ReadonlyArray<ClockCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<ClockWhereUniqueInput>>;
};

export type Tag = {
  readonly __typename: 'Tag';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Tag_description_Document>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clocksCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
};


export type TagcharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagcharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type TagfactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagfactionsCountArgs = {
  where?: FactionWhereInput;
};


export type TaglocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TaglocationsCountArgs = {
  where?: LocationWhereInput;
};


export type TagclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagclocksCountArgs = {
  where?: ClockWhereInput;
};


export type TagnotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagnotesCountArgs = {
  where?: NoteWhereInput;
};

export type Tag_description_Document = {
  readonly __typename: 'Tag_description_Document';
  readonly document: Scalars['JSON'];
};


export type Tag_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type TagWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type TagWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<TagWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<TagWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<TagWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly characters?: Maybe<CharacterManyRelationFilter>;
  readonly factions?: Maybe<FactionManyRelationFilter>;
  readonly locations?: Maybe<LocationManyRelationFilter>;
  readonly clocks?: Maybe<ClockManyRelationFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
};

export type TagOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
};

export type TagUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForUpdateInput>;
  readonly factions?: Maybe<FactionRelateToManyForUpdateInput>;
  readonly locations?: Maybe<LocationRelateToManyForUpdateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForUpdateInput>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
};

export type TagUpdateArgs = {
  readonly where: TagWhereUniqueInput;
  readonly data: TagUpdateInput;
};

export type TagCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForCreateInput>;
  readonly factions?: Maybe<FactionRelateToManyForCreateInput>;
  readonly locations?: Maybe<LocationRelateToManyForCreateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForCreateInput>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
};

export type Character = {
  readonly __typename: 'Character';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly avatar: Maybe<ImageFieldOutput>;
  readonly player: Maybe<User>;
  readonly description: Maybe<Character_description_Document>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clocksCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
};


export type CharacterfactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CharacterfactionsCountArgs = {
  where?: FactionWhereInput;
};


export type CharacterlocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CharacterlocationsCountArgs = {
  where?: LocationWhereInput;
};


export type CharactertagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CharactertagsCountArgs = {
  where?: TagWhereInput;
};


export type CharacterclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CharacterclocksCountArgs = {
  where?: ClockWhereInput;
};


export type CharacternotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CharacternotesCountArgs = {
  where?: NoteWhereInput;
};

export type ImageFieldOutput = {
  readonly id: Scalars['ID'];
  readonly filesize: Scalars['Int'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
  readonly extension: ImageExtension;
  readonly ref: Scalars['String'];
  readonly url: Scalars['String'];
};

export type ImageExtension =
  | 'jpg'
  | 'png'
  | 'webp'
  | 'gif';

export type Character_description_Document = {
  readonly __typename: 'Character_description_Document';
  readonly document: Scalars['JSON'];
};


export type Character_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type CharacterWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type CharacterWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<CharacterWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<CharacterWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<CharacterWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly player?: Maybe<UserWhereInput>;
  readonly factions?: Maybe<FactionManyRelationFilter>;
  readonly locations?: Maybe<LocationManyRelationFilter>;
  readonly tags?: Maybe<TagManyRelationFilter>;
  readonly clocks?: Maybe<ClockManyRelationFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
};

export type CharacterOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
};

export type CharacterUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly avatar?: Maybe<ImageFieldInput>;
  readonly player?: Maybe<UserRelateToOneForUpdateInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly factions?: Maybe<FactionRelateToManyForUpdateInput>;
  readonly locations?: Maybe<LocationRelateToManyForUpdateInput>;
  readonly tags?: Maybe<TagRelateToManyForUpdateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForUpdateInput>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
};

export type ImageFieldInput = {
  readonly upload?: Maybe<Scalars['Upload']>;
  readonly ref?: Maybe<Scalars['String']>;
};


export type CharacterUpdateArgs = {
  readonly where: CharacterWhereUniqueInput;
  readonly data: CharacterUpdateInput;
};

export type CharacterCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly avatar?: Maybe<ImageFieldInput>;
  readonly player?: Maybe<UserRelateToOneForCreateInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly factions?: Maybe<FactionRelateToManyForCreateInput>;
  readonly locations?: Maybe<LocationRelateToManyForCreateInput>;
  readonly tags?: Maybe<TagRelateToManyForCreateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForCreateInput>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
};

export type Faction = {
  readonly __typename: 'Faction';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Faction_description_Document>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clocksCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
};


export type FactioncharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FactioncharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type FactionlocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FactionlocationsCountArgs = {
  where?: LocationWhereInput;
};


export type FactiontagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FactiontagsCountArgs = {
  where?: TagWhereInput;
};


export type FactionclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FactionclocksCountArgs = {
  where?: ClockWhereInput;
};


export type FactionnotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FactionnotesCountArgs = {
  where?: NoteWhereInput;
};

export type Faction_description_Document = {
  readonly __typename: 'Faction_description_Document';
  readonly document: Scalars['JSON'];
};


export type Faction_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type FactionWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type FactionWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<FactionWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<FactionWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<FactionWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly characters?: Maybe<CharacterManyRelationFilter>;
  readonly locations?: Maybe<LocationManyRelationFilter>;
  readonly tags?: Maybe<TagManyRelationFilter>;
  readonly clocks?: Maybe<ClockManyRelationFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
};

export type FactionOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
};

export type FactionUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForUpdateInput>;
  readonly locations?: Maybe<LocationRelateToManyForUpdateInput>;
  readonly tags?: Maybe<TagRelateToManyForUpdateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForUpdateInput>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
};

export type FactionUpdateArgs = {
  readonly where: FactionWhereUniqueInput;
  readonly data: FactionUpdateInput;
};

export type FactionCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForCreateInput>;
  readonly locations?: Maybe<LocationRelateToManyForCreateInput>;
  readonly tags?: Maybe<TagRelateToManyForCreateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForCreateInput>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
};

export type Location = {
  readonly __typename: 'Location';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly picture: Maybe<ImageFieldOutput>;
  readonly description: Maybe<Location_description_Document>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clocksCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
};


export type LocationcharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationcharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type LocationfactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationfactionsCountArgs = {
  where?: FactionWhereInput;
};


export type LocationtagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationtagsCountArgs = {
  where?: TagWhereInput;
};


export type LocationclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationclocksCountArgs = {
  where?: ClockWhereInput;
};


export type LocationnotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationnotesCountArgs = {
  where?: NoteWhereInput;
};

export type Location_description_Document = {
  readonly __typename: 'Location_description_Document';
  readonly document: Scalars['JSON'];
};


export type Location_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type LocationWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  readonly __typename: 'LocalImageFieldOutput';
  readonly id: Scalars['ID'];
  readonly filesize: Scalars['Int'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
  readonly extension: ImageExtension;
  readonly ref: Scalars['String'];
  readonly url: Scalars['String'];
};

export type CloudImageFieldOutput = ImageFieldOutput & {
  readonly __typename: 'CloudImageFieldOutput';
  readonly id: Scalars['ID'];
  readonly filesize: Scalars['Int'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
  readonly extension: ImageExtension;
  readonly ref: Scalars['String'];
  readonly url: Scalars['String'];
};

export type LocationWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly characters?: Maybe<CharacterManyRelationFilter>;
  readonly factions?: Maybe<FactionManyRelationFilter>;
  readonly tags?: Maybe<TagManyRelationFilter>;
  readonly clocks?: Maybe<ClockManyRelationFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
};

export type LocationOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
};

export type LocationUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<ImageFieldInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForUpdateInput>;
  readonly factions?: Maybe<FactionRelateToManyForUpdateInput>;
  readonly tags?: Maybe<TagRelateToManyForUpdateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForUpdateInput>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
};

export type LocationUpdateArgs = {
  readonly where: LocationWhereUniqueInput;
  readonly data: LocationUpdateInput;
};

export type LocationCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<ImageFieldInput>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForCreateInput>;
  readonly factions?: Maybe<FactionRelateToManyForCreateInput>;
  readonly tags?: Maybe<TagRelateToManyForCreateInput>;
  readonly clocks?: Maybe<ClockRelateToManyForCreateInput>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
};

export type Clock = {
  readonly __typename: 'Clock';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly piecesToFinish: Maybe<Scalars['Int']>;
  readonly piecesFilled: Maybe<Scalars['Int']>;
  readonly description: Maybe<Clock_description_Document>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly notesCount: Maybe<Scalars['Int']>;
};


export type ClockcharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ClockcharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type ClockfactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ClockfactionsCountArgs = {
  where?: FactionWhereInput;
};


export type ClocklocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ClocklocationsCountArgs = {
  where?: LocationWhereInput;
};


export type ClocktagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ClocktagsCountArgs = {
  where?: TagWhereInput;
};


export type ClocknotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ClocknotesCountArgs = {
  where?: NoteWhereInput;
};

export type Clock_description_Document = {
  readonly __typename: 'Clock_description_Document';
  readonly document: Scalars['JSON'];
};


export type Clock_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type ClockWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type ClockWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<ClockWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<ClockWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<ClockWhereInput>>;
  readonly id?: Maybe<IDFilter>;
  readonly name?: Maybe<StringFilter>;
  readonly piecesToFinish?: Maybe<IntNullableFilter>;
  readonly piecesFilled?: Maybe<IntNullableFilter>;
  readonly characters?: Maybe<CharacterManyRelationFilter>;
  readonly factions?: Maybe<FactionManyRelationFilter>;
  readonly locations?: Maybe<LocationManyRelationFilter>;
  readonly tags?: Maybe<TagManyRelationFilter>;
  readonly notes?: Maybe<NoteManyRelationFilter>;
};

export type IntNullableFilter = {
  readonly equals?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly not?: Maybe<IntNullableFilter>;
};

export type ClockOrderByInput = {
  readonly id?: Maybe<OrderDirection>;
  readonly name?: Maybe<OrderDirection>;
  readonly piecesToFinish?: Maybe<OrderDirection>;
  readonly piecesFilled?: Maybe<OrderDirection>;
};

export type ClockUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly piecesToFinish?: Maybe<Scalars['Int']>;
  readonly piecesFilled?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForUpdateInput>;
  readonly factions?: Maybe<FactionRelateToManyForUpdateInput>;
  readonly locations?: Maybe<LocationRelateToManyForUpdateInput>;
  readonly tags?: Maybe<TagRelateToManyForUpdateInput>;
  readonly notes?: Maybe<NoteRelateToManyForUpdateInput>;
};

export type ClockUpdateArgs = {
  readonly where: ClockWhereUniqueInput;
  readonly data: ClockUpdateInput;
};

export type ClockCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly piecesToFinish?: Maybe<Scalars['Int']>;
  readonly piecesFilled?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['JSON']>;
  readonly characters?: Maybe<CharacterRelateToManyForCreateInput>;
  readonly factions?: Maybe<FactionRelateToManyForCreateInput>;
  readonly locations?: Maybe<LocationRelateToManyForCreateInput>;
  readonly tags?: Maybe<TagRelateToManyForCreateInput>;
  readonly notes?: Maybe<NoteRelateToManyForCreateInput>;
};


export type Mutation = {
  readonly __typename: 'Mutation';
  readonly createUser: Maybe<User>;
  readonly createUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly updateUser: Maybe<User>;
  readonly updateUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly deleteUser: Maybe<User>;
  readonly deleteUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly createNote: Maybe<Note>;
  readonly createNotes: Maybe<ReadonlyArray<Maybe<Note>>>;
  readonly updateNote: Maybe<Note>;
  readonly updateNotes: Maybe<ReadonlyArray<Maybe<Note>>>;
  readonly deleteNote: Maybe<Note>;
  readonly deleteNotes: Maybe<ReadonlyArray<Maybe<Note>>>;
  readonly createTag: Maybe<Tag>;
  readonly createTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly updateTag: Maybe<Tag>;
  readonly updateTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly deleteTag: Maybe<Tag>;
  readonly deleteTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly createCharacter: Maybe<Character>;
  readonly createCharacters: Maybe<ReadonlyArray<Maybe<Character>>>;
  readonly updateCharacter: Maybe<Character>;
  readonly updateCharacters: Maybe<ReadonlyArray<Maybe<Character>>>;
  readonly deleteCharacter: Maybe<Character>;
  readonly deleteCharacters: Maybe<ReadonlyArray<Maybe<Character>>>;
  readonly createFaction: Maybe<Faction>;
  readonly createFactions: Maybe<ReadonlyArray<Maybe<Faction>>>;
  readonly updateFaction: Maybe<Faction>;
  readonly updateFactions: Maybe<ReadonlyArray<Maybe<Faction>>>;
  readonly deleteFaction: Maybe<Faction>;
  readonly deleteFactions: Maybe<ReadonlyArray<Maybe<Faction>>>;
  readonly createLocation: Maybe<Location>;
  readonly createLocations: Maybe<ReadonlyArray<Maybe<Location>>>;
  readonly updateLocation: Maybe<Location>;
  readonly updateLocations: Maybe<ReadonlyArray<Maybe<Location>>>;
  readonly deleteLocation: Maybe<Location>;
  readonly deleteLocations: Maybe<ReadonlyArray<Maybe<Location>>>;
  readonly createClock: Maybe<Clock>;
  readonly createClocks: Maybe<ReadonlyArray<Maybe<Clock>>>;
  readonly updateClock: Maybe<Clock>;
  readonly updateClocks: Maybe<ReadonlyArray<Maybe<Clock>>>;
  readonly deleteClock: Maybe<Clock>;
  readonly deleteClocks: Maybe<ReadonlyArray<Maybe<Clock>>>;
};


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationcreateUsersArgs = {
  data: ReadonlyArray<UserCreateInput>;
};


export type MutationupdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationupdateUsersArgs = {
  data: ReadonlyArray<UserUpdateArgs>;
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationdeleteUsersArgs = {
  where: ReadonlyArray<UserWhereUniqueInput>;
};


export type MutationcreateNoteArgs = {
  data: NoteCreateInput;
};


export type MutationcreateNotesArgs = {
  data: ReadonlyArray<NoteCreateInput>;
};


export type MutationupdateNoteArgs = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateInput;
};


export type MutationupdateNotesArgs = {
  data: ReadonlyArray<NoteUpdateArgs>;
};


export type MutationdeleteNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationdeleteNotesArgs = {
  where: ReadonlyArray<NoteWhereUniqueInput>;
};


export type MutationcreateTagArgs = {
  data: TagCreateInput;
};


export type MutationcreateTagsArgs = {
  data: ReadonlyArray<TagCreateInput>;
};


export type MutationupdateTagArgs = {
  where: TagWhereUniqueInput;
  data: TagUpdateInput;
};


export type MutationupdateTagsArgs = {
  data: ReadonlyArray<TagUpdateArgs>;
};


export type MutationdeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationdeleteTagsArgs = {
  where: ReadonlyArray<TagWhereUniqueInput>;
};


export type MutationcreateCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationcreateCharactersArgs = {
  data: ReadonlyArray<CharacterCreateInput>;
};


export type MutationupdateCharacterArgs = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateInput;
};


export type MutationupdateCharactersArgs = {
  data: ReadonlyArray<CharacterUpdateArgs>;
};


export type MutationdeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationdeleteCharactersArgs = {
  where: ReadonlyArray<CharacterWhereUniqueInput>;
};


export type MutationcreateFactionArgs = {
  data: FactionCreateInput;
};


export type MutationcreateFactionsArgs = {
  data: ReadonlyArray<FactionCreateInput>;
};


export type MutationupdateFactionArgs = {
  where: FactionWhereUniqueInput;
  data: FactionUpdateInput;
};


export type MutationupdateFactionsArgs = {
  data: ReadonlyArray<FactionUpdateArgs>;
};


export type MutationdeleteFactionArgs = {
  where: FactionWhereUniqueInput;
};


export type MutationdeleteFactionsArgs = {
  where: ReadonlyArray<FactionWhereUniqueInput>;
};


export type MutationcreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationcreateLocationsArgs = {
  data: ReadonlyArray<LocationCreateInput>;
};


export type MutationupdateLocationArgs = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateInput;
};


export type MutationupdateLocationsArgs = {
  data: ReadonlyArray<LocationUpdateArgs>;
};


export type MutationdeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationdeleteLocationsArgs = {
  where: ReadonlyArray<LocationWhereUniqueInput>;
};


export type MutationcreateClockArgs = {
  data: ClockCreateInput;
};


export type MutationcreateClocksArgs = {
  data: ReadonlyArray<ClockCreateInput>;
};


export type MutationupdateClockArgs = {
  where: ClockWhereUniqueInput;
  data: ClockUpdateInput;
};


export type MutationupdateClocksArgs = {
  data: ReadonlyArray<ClockUpdateArgs>;
};


export type MutationdeleteClockArgs = {
  where: ClockWhereUniqueInput;
};


export type MutationdeleteClocksArgs = {
  where: ReadonlyArray<ClockWhereUniqueInput>;
};

export type Query = {
  readonly __typename: 'Query';
  readonly users: Maybe<ReadonlyArray<User>>;
  readonly user: Maybe<User>;
  readonly usersCount: Maybe<Scalars['Int']>;
  readonly notes: Maybe<ReadonlyArray<Note>>;
  readonly note: Maybe<Note>;
  readonly notesCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tag: Maybe<Tag>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly characters: Maybe<ReadonlyArray<Character>>;
  readonly character: Maybe<Character>;
  readonly charactersCount: Maybe<Scalars['Int']>;
  readonly factions: Maybe<ReadonlyArray<Faction>>;
  readonly faction: Maybe<Faction>;
  readonly factionsCount: Maybe<Scalars['Int']>;
  readonly locations: Maybe<ReadonlyArray<Location>>;
  readonly location: Maybe<Location>;
  readonly locationsCount: Maybe<Scalars['Int']>;
  readonly clocks: Maybe<ReadonlyArray<Clock>>;
  readonly clock: Maybe<Clock>;
  readonly clocksCount: Maybe<Scalars['Int']>;
  readonly keystone: KeystoneMeta;
};


export type QueryusersArgs = {
  where?: UserWhereInput;
  orderBy?: ReadonlyArray<UserOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryuserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryusersCountArgs = {
  where?: UserWhereInput;
};


export type QuerynotesArgs = {
  where?: NoteWhereInput;
  orderBy?: ReadonlyArray<NoteOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerynoteArgs = {
  where: NoteWhereUniqueInput;
};


export type QuerynotesCountArgs = {
  where?: NoteWhereInput;
};


export type QuerytagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerytagArgs = {
  where: TagWhereUniqueInput;
};


export type QuerytagsCountArgs = {
  where?: TagWhereInput;
};


export type QuerycharactersArgs = {
  where?: CharacterWhereInput;
  orderBy?: ReadonlyArray<CharacterOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerycharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type QuerycharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type QueryfactionsArgs = {
  where?: FactionWhereInput;
  orderBy?: ReadonlyArray<FactionOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryfactionArgs = {
  where: FactionWhereUniqueInput;
};


export type QueryfactionsCountArgs = {
  where?: FactionWhereInput;
};


export type QuerylocationsArgs = {
  where?: LocationWhereInput;
  orderBy?: ReadonlyArray<LocationOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerylocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QuerylocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryclocksArgs = {
  where?: ClockWhereInput;
  orderBy?: ReadonlyArray<ClockOrderByInput>;
  take: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryclockArgs = {
  where: ClockWhereUniqueInput;
};


export type QueryclocksCountArgs = {
  where?: ClockWhereInput;
};

export type KeystoneMeta = {
  readonly __typename: 'KeystoneMeta';
  readonly adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  readonly __typename: 'KeystoneAdminMeta';
  readonly enableSignout: Scalars['Boolean'];
  readonly enableSessionItem: Scalars['Boolean'];
  readonly lists: ReadonlyArray<KeystoneAdminUIListMeta>;
  readonly list: Maybe<KeystoneAdminUIListMeta>;
};


export type KeystoneAdminMetalistArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUIListMeta = {
  readonly __typename: 'KeystoneAdminUIListMeta';
  readonly key: Scalars['String'];
  readonly itemQueryName: Scalars['String'];
  readonly listQueryName: Scalars['String'];
  readonly hideCreate: Scalars['Boolean'];
  readonly hideDelete: Scalars['Boolean'];
  readonly path: Scalars['String'];
  readonly label: Scalars['String'];
  readonly singular: Scalars['String'];
  readonly plural: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly initialColumns: ReadonlyArray<Scalars['String']>;
  readonly pageSize: Scalars['Int'];
  readonly labelField: Scalars['String'];
  readonly fields: ReadonlyArray<KeystoneAdminUIFieldMeta>;
  readonly initialSort: Maybe<KeystoneAdminUISort>;
  readonly isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUIFieldMeta = {
  readonly __typename: 'KeystoneAdminUIFieldMeta';
  readonly path: Scalars['String'];
  readonly label: Scalars['String'];
  readonly isOrderable: Scalars['Boolean'];
  readonly isFilterable: Scalars['Boolean'];
  readonly fieldMeta: Maybe<Scalars['JSON']>;
  readonly viewsIndex: Scalars['Int'];
  readonly customViewsIndex: Maybe<Scalars['Int']>;
  readonly createView: KeystoneAdminUIFieldMetaCreateView;
  readonly listView: KeystoneAdminUIFieldMetaListView;
  readonly itemView: Maybe<KeystoneAdminUIFieldMetaItemView>;
  readonly search: Maybe<QueryMode>;
};


export type KeystoneAdminUIFieldMetaitemViewArgs = {
  id: Maybe<Scalars['ID']>;
};

export type KeystoneAdminUIFieldMetaCreateView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaCreateView';
  readonly fieldMode: KeystoneAdminUIFieldMetaCreateViewFieldMode;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode =
  | 'edit'
  | 'hidden';

export type KeystoneAdminUIFieldMetaListView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaListView';
  readonly fieldMode: KeystoneAdminUIFieldMetaListViewFieldMode;
};

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden';

export type KeystoneAdminUIFieldMetaItemView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaItemView';
  readonly fieldMode: Maybe<KeystoneAdminUIFieldMetaItemViewFieldMode>;
};

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type QueryMode =
  | 'default'
  | 'insensitive';

export type KeystoneAdminUISort = {
  readonly __typename: 'KeystoneAdminUISort';
  readonly field: Scalars['String'];
  readonly direction: KeystoneAdminUISortDirection;
};

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC';

export interface TSGQLDocuments extends Record<string, import('@ts-gql/tag').TypedDocumentNode<import('@ts-gql/tag').BaseDocumentTypes>> {}

export type TSGQLRequiredFragments<T> = (providedFragments: T) => T;