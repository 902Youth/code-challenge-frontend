import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Dev.css'
import data from '../CodingPrompts';
import Editor, {  OnMount } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

const Dev: React.FC = () =>{

const location = useLocation();
const [message, setMessage] = useState<string>('');
let prompt: string = ""; 


const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

const handleSave = () =>{
    const valueToSave = editorRef?.current?.getValue();
    // console.log(valueToSave);
}

const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
}

const { position } = location.state || {};

switch(position){
    case 'fe-web': {
        prompt = data[0];
        break;
    }    
    case 'fe-app':{
        prompt = data[1];
        break;
    }    
    case 'be-web':{
        prompt= data[2];
        break; 
    }
    case 'be-app':{
        prompt = data[3];
        break; 
    }
    case 'full-web':{
        prompt = data[4];
        break;
    } 
    case 'full-app':{
        prompt = data[5];
        break;
    }
    case 'game-dev':{
        prompt = data[6];
        break;
    }   
}


    return(
        <div className='container'>
            <h3 style= {{ color: 'white' }}>
                Coding prompt
            </h3>

            <p className = "prompt" style = {{color: 'white'}}>
            {prompt}
            </p>

            <div id='editorview'>
                <Editor 
                    height="60vh" 
                    width="60vw" 
                    defaultLanguage="javascript" 
                    defaultValue="//Type code here" 
                    onMount={handleEditorDidMount}/>;
            </div>
            
            <div className='button-area'>
                <button className="save" id="button" onClick={handleSave}>Save</button>
                <button className="submit" id="button">Submit</button>
            </div>
            { message && <div style={{color: "white"}}>{message}</div>}           
            
        </div>
    )
}

export default Dev;