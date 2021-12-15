const faction = {
  Name: "The King's Council",
  Status: "",
  Affiliation: "King, Noble",
  Tier: "5",
  Hold: "Weak",
  Description:
    "The ruling council of the kingdom, responsible for policy decisions in the running of the nation.\n\nThe current members of the kings council\nThe head of the Obterre,  Lord Oliver Obterre\n2 representing the clans: ui Regan Eimhir, and\n ui Grave Loches\nThe chief minister of the Administration, Richard Thorn, (née Shaw)\nThe Grand Arbiter, Even Valence\nThe Head of the FitzArend clan (formerly the Black Prince, Roderick Lancer Fitzarend)\nThe Church Envoy (from the face of prosperity atm), Cadence of Isperia\nKing Roderick Arend VI\nQueen-Regent Titania\nPrincess Miranda Arend",
  "Quiet Changes":
    "The King's Council has undergone quite a shake-up.\n\nMissing from it:\nTiarna Fitzarend (dead)\nKing Roderick Arend V (dead)\nNichel Valence (stepped down)\n\nNew additions:\nLancer FitzArend (the black prince)\nKing Roderick Arend VI\nLord Oliver Obterre (replaced Niche)",
  "Related Characters":
    "https://www.notion.so/King-Roderick-VI-8bf80595f1c14a7d9af8b9eb72814262, https://www.notion.so/Lord-Oliver-Obterre-2d0df7d524cd4773af55e2558f55a738, https://www.notion.so/Richard-Thorn-dd3e1eb62229472a93df177272f3c980, https://www.notion.so/Even-Valence-8a0df9ea97434809aa0d80235e76b760, https://www.notion.so/Black-Prince-Roderick-Lancer-Fitzarend-4c7bed5c960843278fe85336129e4513, https://www.notion.so/Cadence-of-Isperia-9ef8b499a44c4abcb6c2f48eb86a5304, https://www.notion.so/Queen-Regent-Titania-c9ee32a87aea462b9dd1565c400251f6, https://www.notion.so/Princess-Miranda-Arend-ec858aacb8414cda82b23939ef9706dd, https://www.notion.so/Tiarna-Fitzarend-8b65c662399d4c7cbcdf4d3f19b035cb, https://www.notion.so/Chaplain-Blasko-the-soft-spoken-561ba8ba441a48be86ae772ea281f668, https://www.notion.so/Miss-Adora-Arend-2ebbb7a6d55540af9c420557e04d2c89, https://www.notion.so/982db0f63e0b455781a3bba6d1e6b2d9",
  "Dyer Interactions": "",
  Image: "",
  Locations: "",
  Projects: "https://www.notion.so/8e350d7d56154fdebd2b78d2d10aa263",
};

const documentize = (fullText) => ({
  document: fullText
    .split("\n")
    .map((text) => ({ type: "paragraph", children: [{ text }] })),
});

const rebuildFaction = ({
  Name,
  Status,
  Affiliation,
  Tier,
  Hold,
  Description,
  Image,
  Locations,
  Projects,
  ...rest
}) => ({
  name: Name,
  status: Status,
  affiliations: Affiliation,
  tier: parseInt(Tier),
  hold: Hold,
  description: documentize(Description),
  quiet_changes: rest["Quiet Changes"],
  dyer_interactions: rest["Dyer Interactions"],
  GMNotes: documentize(
    `${Image} ${Locations} ${Projects}, ${rest["Related Characters"]}`
  ),
});

console.log(JSON.stringify(rebuildFaction(faction)));

const what = {
  name: "The King's Council",
  status: "",
  affiliations: "King, Noble",
  tier: 5,
  hold: "Weak",
  description: {
    document: [
      {
        type: "paragraph",
        children: [
          {
            text: "The ruling council of the kingdom, responsible for policy decisions in the running of the nation.",
          },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      {
        type: "paragraph",
        children: [{ text: "The current members of the kings council" }],
      },
      {
        type: "paragraph",
        children: [{ text: "The head of the Obterre,  Lord Oliver Obterre" }],
      },
      {
        type: "paragraph",
        children: [{ text: "2 representing the clans: ui Regan Eimhir, and" }],
      },
      { type: "paragraph", children: [{ text: " ui Grave Loches" }] },
      {
        type: "paragraph",
        children: [
          {
            text: "The chief minister of the Administration, Richard Thorn, (née Shaw)",
          },
        ],
      },
      {
        type: "paragraph",
        children: [{ text: "The Grand Arbiter, Even Valence" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "The Head of the FitzArend clan (formerly the Black Prince, Roderick Lancer Fitzarend)",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "The Church Envoy (from the face of prosperity atm), Cadence of Isperia",
          },
        ],
      },
      { type: "paragraph", children: [{ text: "King Roderick Arend VI" }] },
      { type: "paragraph", children: [{ text: "Queen-Regent Titania" }] },
      { type: "paragraph", children: [{ text: "Princess Miranda Arend" }] },
    ],
  },
  quiet_changes:
    "The King's Council has undergone quite a shake-up.\n\nMissing from it:\nTiarna Fitzarend (dead)\nKing Roderick Arend V (dead)\nNichel Valence (stepped down)\n\nNew additions:\nLancer FitzArend (the black prince)\nKing Roderick Arend VI\nLord Oliver Obterre (replaced Niche)",
  dyer_interactions: "",
  GMNotes: {
    document: [
      {
        type: "paragraph",
        children: [
          {
            text: "  https://www.notion.so/8e350d7d56154fdebd2b78d2d10aa263, https://www.notion.so/King-Roderick-VI-8bf80595f1c14a7d9af8b9eb72814262, https://www.notion.so/Lord-Oliver-Obterre-2d0df7d524cd4773af55e2558f55a738, https://www.notion.so/Richard-Thorn-dd3e1eb62229472a93df177272f3c980, https://www.notion.so/Even-Valence-8a0df9ea97434809aa0d80235e76b760, https://www.notion.so/Black-Prince-Roderick-Lancer-Fitzarend-4c7bed5c960843278fe85336129e4513, https://www.notion.so/Cadence-of-Isperia-9ef8b499a44c4abcb6c2f48eb86a5304, https://www.notion.so/Queen-Regent-Titania-c9ee32a87aea462b9dd1565c400251f6, https://www.notion.so/Princess-Miranda-Arend-ec858aacb8414cda82b23939ef9706dd, https://www.notion.so/Tiarna-Fitzarend-8b65c662399d4c7cbcdf4d3f19b035cb, https://www.notion.so/Chaplain-Blasko-the-soft-spoken-561ba8ba441a48be86ae772ea281f668, https://www.notion.so/Miss-Adora-Arend-2ebbb7a6d55540af9c420557e04d2c89, https://www.notion.so/982db0f63e0b455781a3bba6d1e6b2d9",
          },
        ],
      },
    ],
  },
};

const anQuery =
  "mutation ($data: FactionUpdateInput!, $id: ID!) {  item: updateFaction(where: {id: $id}, data: $data) {    id    name    slug    description {      document(hydrateRelationships: true)      __typename    }    GMNotes {      document(hydrateRelationships: true)      __typename    }    status    affiliations    tier    hold    quiet_changes    dyer_interactions    characters {      id      label: name      __typename    }    locations {      id      label: name      __typename    }    tags {      id      label: name      __typename    }    clocks {      id      label: name      __typename    }    notes {      id      label: title      __typename    }    __typename  }}";

const booo =
  '[ { "children": [ { "text": "Test test" } ], "type": "paragraph" } ]';
