export enum ItemType {
    MAIN_HAND = "MAIN_HAND",
    SECOND_HAND = "SECOND_HAND",
    HEAD = "HEAD",
    NECK= "NECK",
    BACK="BACK",
    CHESTPLATE = "CHESTPLATE",
    BELT= "BELT",
    BOOTS= "BOOTS",
    RING = "RING",
    ARTIFACT = "ARTIFACT"
  }

export enum GeneralType {
  ARMOR = "ARMOR",
  TOOL = "TOOL",
  FARMERS = "FARMERS",
  SERVANTS = "SERVANTS"
}

export const slotToItemType = {
  head: ItemType.HEAD,
  neck: ItemType.NECK,
  back: ItemType.BACK,
  chestplate: ItemType.CHESTPLATE,
  belt: ItemType.BELT,
  boots: ItemType.BOOTS,
  ring1: ItemType.RING,
  ring2: ItemType.RING,
  artifact1: ItemType.ARTIFACT,
  artifact2: ItemType.ARTIFACT,
  main_hand: ItemType.MAIN_HAND,
  second_hand: ItemType.SECOND_HAND,
};

