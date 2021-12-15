import { KeystoneContext } from "@keystone-6/core/types";
import csv from "csvtojson";

const documentize = (fullText: string) =>
  fullText
    .split("\n")
    .map((text) => ({ type: "paragraph", children: [{ text }] }));

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
  selfReference,
  ...rest
}: any) => ({
  name: Name,
  status: Status || "0",
  affiliations: Affiliation.split(", "),
  tier: parseInt(Tier),
  hold: Hold === "Weak" ? "weak" : "strong",
  description: documentize(Description),
  quiet_changes: rest["Quiet Changes"],
  dyer_interactions: rest["Dyer Interactions"],
  selfReference,
  GMNotes: documentize(
    `image: ${Image}\nlocations: ${Locations}\nprojects: ${Projects}`
  ),
});

const rebuildCharacter = ({
  Name,
  selfReference,
  Description,
  Details,
  tags,
  Factions,
  Image,
  ...rest
}: any) => ({
  name: Name,
  tags: tags.split(", "),
  description: Description,
  details: documentize(Details),
  factionRelations: Factions.split(", "),
});

const createFaction = async (data: any, context: KeystoneContext) => {
  const { affiliations, selfReference, ...factionData } = rebuildFaction(data);

  let faction = null;

  faction = await context.query.Faction.findOne({
    where: { name: factionData.name },
  });

  let create = [];
  let connect = [];

  for (let name of affiliations) {
    if (await context.query.Tag.findOne({ where: { name } })) {
      connect.push({ name });
    } else {
      create.push({ name });
    }
  }

  if (!faction) {
    faction = await context.query.Faction.createOne({
      data: {
        ...factionData,
        tags: {
          create,
          connect,
        },
      },
      query: "id name",
    });
    console.log("finished adding faction:", faction);
    console.log("finished adding faction:", faction.id);
  }

  return { id: faction.id, selfReference };
};

const createCharacter = async (
  data: any,
  factions: any[],
  context: KeystoneContext
) => {
  const { tags, factionRelations, ...characterData } = rebuildCharacter(data);

  if (!characterData.name) return;

  let character = null;

  character = await context.query.Character.findOne({
    where: { name: characterData.name },
  });

  let create = [];
  let connect = [];

  for (let name of tags) {
    if (name) {
      if (await context.query.Tag.findOne({ where: { name } })) {
        connect.push({ name });
      } else {
        create.push({ name });
      }
    }
  }

  console.log({ factions });

  let foundFactions = factionRelations
    .map((relationURL: string) => {
      if (relationURL) {
        let { id } = factions.find(
          ({ selfReference }) => relationURL === selfReference
        );

        return { id };
      } else return null;
    })
    .filter((a: Array<{ id: string } | null>) => a);

  if (!character) {
    character = await context.query.Character.createOne({
      data: {
        ...characterData,
        tags: {
          create,
          connect,
        },
        factions: { connect: foundFactions },
      },
      query: "id name",
    });
    console.log("finished adding character:", character);
  }

  return character;
};

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting seed data`);
  let factions = await csv().fromFile("./old-data/faction-table.csv");
  let characters = await csv().fromFile("./old-data/character-table.csv");
  let createdFactions = [];

  for (const faction of factions) {
    console.log(`📝 Adding faction: ${faction.Name}`);
    let createdFaction = await createFaction(faction, context);
    createdFactions.push(createdFaction);
  }

  for (const character of characters) {
    console.log(`📝 Adding character: ${character.Name}`);
    await createCharacter(character, createdFactions, context);
  }

  let coreAdmin = await context.query.User.findOne({
    where: { name: "Noviny" },
  });

  if (!coreAdmin) {
    await context.query.User.createOne({
      data: {
        name: "Noviny",
        email: "novinyarts@gmail.com",
        password: "password",
      },
      query: "name id",
    });
  }

  console.log(`✅ Seed data inserted`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
