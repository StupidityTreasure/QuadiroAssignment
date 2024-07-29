import React, { useState } from 'react'
import TagInput from '../../components/input/tagInput'
import { MdClose } from 'react-icons/md';


const AddEdit=({notedata,type,onclose}) =>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("")
    const [tags,setTags]=useState([]);

        const[error,setError]=useState(null)
        const addNewNote=async()=>{}
        const editNewNote=async()=>{}

        const handleAddNote=()=>{
            if(!title){
                setError("please enter title");
                return;
            }
            if(!content){
                setError("please enter the content")
                return;
            }
            setError("")

            if(type==="edit"){
                editNote()
            }else{
                addNewNote()
            }
        }
    return (
        
  <>
        <div className='relative'>
        <button
        className='w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-500'
        onClick={onclose}>
            <MdClose className='input-label text-slate-400'/>
        </button>

        <div className='flex flex-col gap-2'>
       
            <label className='input-label'>Title</label>
            <input
            type='text'
            className='text-2xl text-slate-950 outline-none'
            placeholder='go to anywhwre'
            value={title}
            onChange={({target})=> setTitle(target.value)}
            />
        </div>

        <div className='flex flex-col gap-2 mt-4'
        >
            <label className='input-label'>Content</label>
            <textarea
            type="text"
            className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
            placeholder='content'
            rows={10}
            value={content}
            onChange={({target})=> setTitle(target.value)}
            />
        </div>
        <div className='mt-3'>
            <label className='input-label'>Tags</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>
        {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
        <button className='btn-primary font-medium mt-5 p-3 ' onClick={()=>{handleAddNote()}}>ADD</button>
        </div>
        </>
    )
}

export default AddEdit
