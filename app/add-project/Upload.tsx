'use client'
import React, { BaseSyntheticEvent, useState } from "react"

export default function UploadProject() {

  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [languages, setLanguages] = useState('')
  const [createdOn, setCreatedOn] = useState('')
  const [projectUrl, setProjectUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: BaseSyntheticEvent) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    if (!file) {
      console.log('File required')
      return
    } else if (!title || !description || !languages || !createdOn || !projectUrl) {
      console.log('All fields required')
      return
    }
    setUploading(true)
    const formData = new FormData();
    formData.append('file', file)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('languages', languages)
    formData.append('createdOn', createdOn)
    formData.append('projectUrl', projectUrl)
    try {
      const response = await fetch('/api/s3-upload-project', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      setUploading(false)
    } catch (error) {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 py-6 text-black">
      <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
        <h1 className="text-xl pl-2 border-0 border-b-2 border-black">Create a project</h1>
        <input type='file' className="bg-white p-2" onChange={handleFileChange} />
        <input type="text" placeholder="Title" className="pl-2 py-2"
          value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" className="pl-2 py-2"
          value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Languages" className="pl-2 py-2"
          value={languages} onChange={e => setLanguages(e.target.value)} />
        <input type="text" placeholder="Created on" className="pl-2 py-2"
          value={createdOn} onChange={e => setCreatedOn(e.target.value)} />
        <input type="text" placeholder="Project URL" className="pl-2 py-2"
          value={projectUrl} onChange={e => setProjectUrl(e.target.value)} />
        <button type="submit" className="bg-black text-white p-2">
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  )
}