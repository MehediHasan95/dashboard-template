export const TagTypes = {
  PROFILE: "Profile",
  RESTAURANT: "Restaurant",
  USERS: "Users",
  INGREDIENT: "Ingredient",
} as const;

export type TagType = (typeof TagTypes)[keyof typeof TagTypes];
