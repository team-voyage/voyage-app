import { TouchableOpacityProps } from "react-native";

export type props = TouchableOpacityProps & {
	title?: string;
	context?: string;
	confirmButtonText: string;
	cancelButtonText: string;
	onCancel?: () => void;
	onConfirm: () => void;
};
