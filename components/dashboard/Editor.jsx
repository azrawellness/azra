import { Editor } from '@tinymce/tinymce-react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { storage } from '../../firebase-config'

const MyEditor = ({ content, setContent }) => {
  return (
    <>
      <Editor
        id="tiny-editor"
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_KEY}
        value={content}
        onEditorChange={setContent}
        init={{
          height: '100%',
          menubar: false,
          images_reuse_filename: true,
          automatic_uploads: true,
          images_file_types: 'jpg,jpeg,webp,png',
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | link image ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Lato,Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  )
}

export default MyEditor
