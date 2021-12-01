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
      selection: "id name",
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

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
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
      name: text(),
      ...sharedRelations("tags"),
    },
  }),
  Character: list({
    fields: {
      name: text(),
      avatar: image(),
      player: relationship({ ref: "User.character" }),
      ...sharedRelations("characters"),
    },
  }),
  Faction: list({
    fields: {
      name: text(),
      ...sharedRelations("factions"),
    },
  }),
  Location: list({
    fields: {
      name: text(),
      picture: image(),
      ...sharedRelations("locations"),
    },
  }),
  Clock: list({
    fields: {
      name: text(),
      piecesToFinish: integer(),
      piecesFilled: integer(),
      ...sharedRelations("clocks"),
    },
  }),
};
