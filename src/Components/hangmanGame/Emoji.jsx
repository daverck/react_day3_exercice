import React from 'react'
import emoji_list from './emojis.json'

export default function Emoji(props) {

    function getPath1(emoji_id){
        return emoji_list.find(e => e.id === emoji_id).path1;
    
    }
    function getPath2(emoji_id){
        return emoji_list.find(e => e.id === emoji_id).path2;
    }
    function getFillColor(emoji_id){
        return emoji_list.find(e => e.id === emoji_id).color;
    }
    function getHTMLClasses(emoji_id){
        return emoji_list.find(e => e.id === emoji_id).name;
    }

    return (
        <svg width="10em" height="10em" viewBox="0 0 16 16" className={getHTMLClasses(props.emoji_id)} fill={getFillColor(props.emoji_id)} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fillRule="evenodd" d={getPath1(props.emoji_id)}/>
            <path d={getPath2(props.emoji_id)}/>
        </svg>
    )
}
