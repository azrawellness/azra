import React from 'react'

const NewPost = () => {
  return (
    <>
      <div className="bg-white p-2 rounded shadow mb-4">
        <div className="w-full flex-col">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="w-full p-2 font-title text-2xl border-gray-dark border rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 bg-white p-2 rounded shadow"></div>
        <div className="col-span-4 bg-white p-2 rounded shadow">
          {/* Author */}
          <div>
            <label htmlFor="author" className="text-sm">
              Author
            </label>
            <select
              name="author"
              id="author"
              className="w-full bg-white border border-gray-dark rounded p-2"
            >
              <option value="surpawan@gmail.com">Pawan Kumar</option>
            </select>
          </div>
          {/* Featured Image */}
          <div></div>
        </div>
      </div>
    </>
  )
}

export default NewPost
