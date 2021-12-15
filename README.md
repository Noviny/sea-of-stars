# Sea of Stars Worldbuilding

If you're reading this, welcome! I'm not entirely sure why yet.

This project is a personal-ish project with two key focuses: stretching some of keystone's features and exploring how to worldbuild with lots of different interlinked things.

A non-goal I really want to call out: I am making no attempt to store the rules-crunchy-numbers bits of roleplaying. Every digital experiment I've seen for this has ranged from awkward to outright harmful for running an RPG - I'm purely focused on the worldbuilding notes.

Comparable products are probably something like [obsidian portal](https://www.obsidianportal.com/), which I've used in the past but never found as helpful as table views of things in notion has been.

## Starting Premise/Bit

So, I've been running a DnD\* campaign for the last year, which has pushed my DMing muscles quite a lot. It's based in a single city, rather than with a roaming party of characters. This means that the places and the people remain somewhat constant from adventure to adventure. Therefore, having good records of these has become increasingly important.

I've hit a limit where notion tables (my current place of use) are getting a little hard to manage, so I want to see:

a) how quickly and how far I can get with KS schemas to solve these problems and
b) how well the KS document field can enable me to more easily create content -> content links

Mostly the schema is though-through, however locations have a _bunch_ of unanswered questions/work.

Namely, a room, a building, a district and a nation are all technically 'locations' BUT they are pretty vastly different. I'm not sure how to capture this. And notably these interrelate. Rooms are in buildings in districts and in nations. But there's unknown features here like street which could be encoded in between building and district and I don't know if I care.

Similar, knowing what is 'nearby' what is kind of useful, but how does one represent that as data?

## Keystone Learnings to Get

- document field
- graphql queries setup

OKAY the current 'seed data' example doesn't work. Why? We changed not finding an item to return 'null' instead of throwing.

## Code Notes for me:

First, define the concepts that need to be available:

- character
- faction
- location
- clock

Common properties:

- relationships
- name + tag

Second, these things can all be related to each other for various reasons.

Third: All of these have descriptions to view the 'page' for each of these.

Tags: I'm using tags weirdly here basically as an alternative to a bunch of booleans. For example, the tag 'dead' can be applied to a character, and then I can use that for semantic meaning in sorts/filters for characters.

I'm thinking about importing from notion so matching up the lists to reflect the notion data table

---

\*It hasn't actually been using Dungeons and Dragons rules, but instead [Blades in the Dark](https://bladesinthedark.com/) and then [court of blades](https://acoupleofdrakes.itch.io/)

---

# Keystone Project Starter

Welcome to Keystone!

Run

```
yarn dev
```

To view the config for your new app, look at [./keystone.ts](./keystone.ts)

This project starter is designed to give you a sense of the power Keystone can offer you, and show off some of its main features. It's also a pretty simple setup if you want to build out from it.

We recommend you use this alongside our [getting started walkthrough](https://keystonejs.com/docs/walkthroughs/getting-started-with-create-keystone-app) which will walk you through what you get as part of this starter.

If you want an overview of all the features Keystone offers, check out our [features](https://keystonejs.com/why-keystone#features) page.

## Some Quick Notes On Getting Started

### Changing the database

We've set you up with an [SQLite database](https://keystonejs.com/docs/apis/config#sqlite) for ease-of-use. If you're wanting to use PostgreSQL, you can!

Just change the `db` property on line 16 of the Keystone file [./keystone.ts](./keystone.ts) to

```typescript
db: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL || 'DATABASE_URL_TO_REPLACE',
}
```

And provide your database url from PostgreSQL.

For more on database configuration, check out or [DB API Docs](https://keystonejs.com/docs/apis/config#db)

### Auth

We've put auth into its own file to make this humble starter easier to navigate. To explore it without auth turned on, comment out the `isAccessAllowed` on line 21 of the Keystone file [./keystone.ts](./keystone.ts).

For more on auth, check out our [Authentication API Docs](https://keystonejs.com/docs/apis/auth#authentication-api)

### Adding a frontend

As a Headless CMS, Keystone can be used with any frontend that uses GraphQL. It provides a GraphQL endpoint you can write queries against at `/api/graphql` (by default [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)). At Thinkmill, we tend to use [Next.js](https://nextjs.org/) and [Apollo GraphQL](https://www.apollographql.com/docs/react/get-started/) as our frontend and way to write queries, but if you have your own favourite, feel free to use it.

A walkthrough on how to do this is forthcoming, but in the meantime our [todo example](https://github.com/keystonejs/keystone-react-todo-demo) shows a Keystone set up with a frontend. For a more full example, you can also look at an example app we built for [Prisma Day 2021](https://github.com/keystonejs/prisma-day-2021-workshop)

### Embedding Keystone in a Next.js frontend

While Keystone works as a standalone app, you can embed your Keystone app into a [Next.js](https://nextjs.org/) app. This is quite a different setup to the starter, and we recommend checking out our walkthrough for that [here](https://keystonejs.com/docs/walkthroughs/embedded-mode-with-sqlite-nextjs#how-to-embed-keystone-sq-lite-in-a-next-js-app).
