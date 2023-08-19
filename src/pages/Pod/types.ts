import { RootStackParamList } from "@/types";

export type PodStackParamList = RootStackParamList & {
	Main: undefined;
	Message: {
		name?: string;
	};
	Game: undefined;
};
