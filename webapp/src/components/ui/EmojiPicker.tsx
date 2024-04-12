import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useAppSelector } from '../../redux/type';

function EmojiPickerUi() {
    const { themeMode } = useAppSelector(state => state.layoutReducer)
    return (
        <EmojiPicker
            theme={themeMode === 'dark' ? Theme['DARK'] : Theme['LIGHT']}
        />
    )
}

export default EmojiPickerUi