import { Editor } from '@tinymce/tinymce-react'

const MyEditor = ({ content, setPost }) => {
  return (
    <>
      <Editor
        id="tiny-editor"
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_KEY}
        value={content}
        onEditorChange={(e) =>
          setPost((prevState) => ({ ...prevState, content: e }))
        }
        init={{
          height: '100%',
          menubar: false,
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
            'undo redo | blocks | ' +
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
