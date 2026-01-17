/// <reference types="react" />
import { ITouchableOpacityProps } from './TouchableOpacity.types';
declare const TouchableOpacity: ({ children, onPress, style, disabled, ...props }: ITouchableOpacityProps & {
    disabled?: boolean | undefined;
}) => JSX.Element | null;
export default TouchableOpacity;
