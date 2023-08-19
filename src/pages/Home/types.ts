import { RootStackParamList } from "@/types";

export type HomeStackParamList = RootStackParamList & {
	Main: undefined;
	Map: undefined;
	Search: undefined;
	Recipe: undefined;
};

export type HomeStackString = keyof HomeStackParamList;
