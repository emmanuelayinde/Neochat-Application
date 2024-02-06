import React, { useRef } from 'react';
import { StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import { screenHeight, screenWidth } from '../styled';


const TextEditor = () => {
    // const _editor = React.createRef<QuillEditor>();
    const editorRef = useRef<QuillEditor>(null)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
            <QuillEditor
                style={styles.editor}
                ref={editorRef}
                quill={{ theme: 'bubble', placeholder: 'Status goes here...' }}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    editor: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'transparent',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});



// import React from "react";
// import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
// import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";


// const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>


// const TextEditor = () => {
// 	const richText = React.useRef();
// 	return (
//     <SafeAreaView>
//       <ScrollView>
//         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
//           <Text>Description:</Text>
//           <RichEditor
//               ref={richText}
//               onChange={ descriptionText => {
//                   console.log("descriptionText:", descriptionText);
//               }}
//           />
//         </KeyboardAvoidingView>
//       </ScrollView>

//       <RichToolbar
//         editor={richText}
//         actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
//         iconMap={{ [actions.heading1]: handleHead }}
//       />
//     </SafeAreaView>
//   );
// };

// export default TempScreen;

export default TextEditor
