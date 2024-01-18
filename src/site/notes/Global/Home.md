---
{"dg-publish":true,"dg-path":"Home.md","permalink":"/home/","hideInGraph":true,"pinned":true,"tags":["global","gardenEntry"],"noteIcon":"","created":"2023-12-31T12:02:25.713+01:00","updated":"2024-01-18T13:50:40.202+01:00"}
---

# [[Global/Quests\|Quests]]

### Karma
```js-engine
const mdBuilder = engine.markdown.createBuilder();
const dv = engine.getPlugin('dataview').api;

let karma_list = [];
const pages = dv.pages("#session");
for (const page of pages) {
	karma_list.push(Number(page.karma_impact));
}
const sum = karma_list.reduce((partialSum, a) => partialSum + a, 0);
mdBuilder.createParagraph('<meter min=-50 max=50 low=-10 high=10 optimum=50 value="' + sum + '" style="height: 3em; width: 80%; border-radius: 16px;"></meter><span style="content: 20; top: 0px; left: -70px; position: relative;"></span>');

return mdBuilder;
```

### Sessions
| Name                                                                                                                                                 | Karma Impact |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [[Sessions/002_040124_Hellion and Killgore\|002_040124_Hellion and Killgore]]                                                                     | 0            |
| [[Sessions/001_261223_MUSN (Militaristic Undead Swamp Naga) and Their Temple\|001_261223_MUSN (Militaristic Undead Swamp Naga) and Their Temple]] | 0            |

{ .block-language-dataview}
### PCs
| Name                                          |
| --------------------------------------------- |
| [[PCs/Dio Stargazer\|Dio Stargazer]]       |
| [[PCs/Doliat Dreameyes\|Doliat Dreameyes]] |
| [[PCs/Indigo\|Indigo]]                     |
| [[PCs/Johnra Kcir\|Johnra Kcir]]           |
| [[PCs/Ron Mhuilinn\|Ron Mhuilinn]]         |
| [[PCs/Talion\|Talion]]                     |

{ .block-language-dataview}
### Items
| Name                                                                    | Bearer                              |
| ----------------------------------------------------------------------- | ----------------------------------- |
| [[Items/Drape of lost souls\|Drape of lost souls]]                   | [[PCs/Doliat Dreameyes\|Doliat]] |
| [[Items/Key to the Temple of Tiamat\|Key to the Temple of Tiamat]]   | It's complicated                    |
| [[Items/Killgore's key\|Killgore's key]]                             | [[PCs/Indigo\|Indigo]]           |
| [[Items/Killgore's two magical rings\|Killgore's two magical rings]] | [[PCs/Indigo\|Indigo]]           |
| [[Items/Medallion of confusion\|Medallion of confusion]]             | [[PCs/Johnra Kcir\|Johnra]]      |
| [[Items/Ring of Antimagic\|Ring of Antimagic]]                       | [[PCs/Doliat Dreameyes\|Doliat]] |
| [[Items/Two sterile scrolls\|Two sterile scrolls]]                   | [[PCs/Doliat Dreameyes\|Doliat]] |
| [[Items/Vallmozon's infernal coin\|Vallmozon's infernal coin]]       | [[PCs/Doliat Dreameyes\|Doliat]] |

{ .block-language-dataview}
### NPCs
| Name                                                 | Status | Attitude | Race | Groups |
| ---------------------------------------------------- | ------ | -------- | ---- | ------ |
| [[NPCs/Ambassador elf\|Ambassador elf]]           | \-     | \-       | \-   | \-     |
| [[NPCs/Bergen and Borger\|Bergen and Borger]]     | \-     | \-       | \-   | \-     |
| [[NPCs/creepy old elf\|creepy old elf]]           | \-     | \-       | \-   | \-     |
| [[NPCs/Female mafia boss\|Female mafia boss]]     | \-     | \-       | \-   | \-     |
| [[NPCs/Hellion\|Hellion]]                         | \-     | \-       | \-   | \-     |
| [[NPCs/Kilgore the Warlock\|Kilgore the Warlock]] | \-     | \-       | \-   | \-     |
| [[NPCs/Olivia\|Olivia]]                           | \-     | \-       | \-   | \-     |
| [[NPCs/Shissela\|Shissela]]                       | \-     | \-       | \-   | \-     |
| [[NPCs/Twinkle\|Twinkle]]                         | \-     | \-       | \-   | \-     |
| [[NPCs/Vallmozon\|Vallmozon]]                     | \-     | \-       | \-   | \-     |
| [[NPCs/Zima\|Zima]]                               | \-     | \-       | \-   | \-     |

{ .block-language-dataview}
### Groups
| Name                                                     | HQ |
| -------------------------------------------------------- | -- |
| [[Groups/Absalom city council\|Absalom city council]] | \- |
| [[Groups/Absalom mafia\|Absalom mafia]]               | \- |
| [[Groups/Demon family\|Demon family]]                 | \- |
| [[Groups/MUSN\|MUSN]]                                 | \- |
| [[Groups/Pathfinder Society\|Pathfinder Society]]     | \- |
| [[Groups/Storm Bringers\|Storm Bringers]]             | \- |
| [[Groups/Xian Ninja Army\|Xian Ninja Army]]           | \- |

{ .block-language-dataview}
### Locations
| Name                                                                  | Type | In | Near |
| --------------------------------------------------------------------- | ---- | -- | ---- |
| [[Locations/creepy swamp temple\|creepy swamp temple]]             | \-   | \- | \-   |
| [[Locations/Good storm giants tunnels\|Good storm giants tunnels]] | \-   | \- | \-   |
| [[Locations/Killgore's cave\|Killgore's cave]]                     | \-   | \- | \-   |
| [[Locations/Kyonin\|Kyonin]]                                       | \-   | \- | \-   |
| [[Locations/Leothin mine\|Leothin mine]]                           | \-   | \- | \-   |
| [[Locations/Pub near Greengold\|Pub near Greengold]]               | \-   | \- | \-   |
| [[Locations/Unnamed Drow city\|Unnamed Drow city]]                 | \-   | \- | \-   |

{ .block-language-dataview}
### Events
| Name                                                           | Where | When |
| -------------------------------------------------------------- | ----- | ---- |
| [[Events/Twinkle's second song\|Twinkle's second song]]     | \-    | \-   |
| [[Events/Xian - Absalom Conflict\|Xian - Absalom Conflict]] | \-    | \-   |

{ .block-language-dataview}
### Lore
| Name                                                               |
| ------------------------------------------------------------------ |
| [[Lore/Entrances to the Underdark\|Entrances to the Underdark]] |
| [[Lore/Infernal Coins\|Infernal Coins]]                         |
| [[Lore/Leothin\|Leothin]]                                       |

{ .block-language-dataview}