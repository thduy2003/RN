type RootStackParamList = {
  home: undefined;
  "review-detail"?: { id: number; title: string; rating: number };
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
