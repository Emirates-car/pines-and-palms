import { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const StructureResolver = S =>
  S.list().title('Content').items(S.documentTypeListItems());
