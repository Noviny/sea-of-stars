import { graphql } from "@keystone-6/core";
import { list } from "@keystone-6/core";

import {
  text,
  relationship,
  password,
  timestamp,
  integer,
  select,
  image,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import slugify from "slugify";

const hookedSlug = (fieldName: string) =>
  text({
    isIndexed: "unique",
    ui: {
      itemView: { fieldMode: "read" },
    },
    hooks: {
      resolveInput: ({ inputData, resolvedData }) => {
        return inputData[fieldName]
          ? slugify(inputData[fieldName], { lower: true })
          : resolvedData[fieldName];
      },
    },
  });

const docsOptions = {
  formatting: true,
  layouts: [
    [1, 1],
    [1, 1, 1],
    [2, 1],
    [1, 2],
    [1, 2, 1],
  ],
  links: true,
  dividers: true,
  relationships: {
    mention: {
      kind: "inline",
      listKey: "Character",
      label: "Mention",
      selection: "id name slug",
    },
    location: {
      kind: "inline",
      listKey: "Location",
      label: "Location",
      selection: "id name",
    },
  },
} as const;

type linkedFields =
  | "characters"
  | "factions"
  | "locations"
  | "tags"
  | "clocks"
  | "notes";

const sharedRelations = (list: linkedFields) => {
  const relationships = {
    description: document(docsOptions),
    characters: relationship({ ref: `Character.${list}`, many: true }),
    factions: relationship({ ref: `Faction.${list}`, many: true }),
    locations: relationship({ ref: `Location.${list}`, many: true }),
    tags: relationship({
      ref: `Tag.${list}`,
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ["name"] },
      },
    }),
    clocks: relationship({ ref: `Clock.${list}`, many: true }),
    notes: relationship({ ref: `Note.${list}`, many: true }),
  };

  delete relationships[list];

  return relationships;
};

const commonFields = {
  name: text({ isIndexed: "unique", validation: { isRequired: true } }),
  slug: hookedSlug("name"),
};

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      slug: hookedSlug("name"),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      notes: relationship({ ref: "Note.author", many: true }),
      character: relationship({ ref: "Character.player", many: true }),
    },
    ui: {
      listView: {
        initialColumns: ["name", "notes"],
      },
    },
  }),
  Note: list({
    fields: {
      title: text(),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
          { label: "Restricted", value: "restricted" },
        ],
        defaultValue: "draft",
        ui: {
          displayMode: "segmented-control",
        },
      }),
      content: document(docsOptions),
      publishDate: timestamp(),
      author: relationship({
        ref: "User.notes",
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineCreate: { fields: ["name", "email"] },
        },
      }),
      ...sharedRelations("notes"),
    },
  }),
  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      ...commonFields,
      ...sharedRelations("tags"),
    },
  }),
  Character: list({
    fields: {
      ...commonFields,
      avatar: image(),
      player: relationship({ ref: "User.character" }),
      ...sharedRelations("characters"),
    },
  }),
  Faction: list({
    fields: {
      ...commonFields,
      ...sharedRelations("factions"),
    },
  }),
  Location: list({
    fields: {
      ...commonFields,
      picture: image(),
      ...sharedRelations("locations"),
    },
  }),
  Clock: list({
    fields: {
      ...commonFields,
      piecesToFinish: integer(),
      piecesFilled: integer(),
      ...sharedRelations("clocks"),
    },
  }),
};
