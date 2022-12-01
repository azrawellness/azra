import { Dialog, Transition, Switch } from '@headlessui/react'
import { Fragment } from 'react'

const TagDialog = ({ title, show, setShow, tag, setTag, processTag }) => {
  return (
    <Transition
      appear
      show={show}
      as={Fragment}
    >
      <Dialog
        open={show}
        as="div"
        className="relative z-50"
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 pb-2 border-b p-4"
                >
                  {title}
                </Dialog.Title>
                <div className="px-4 pt-6 pb-10 grid grid-cols-1 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border rounded px-2 py-2 w-full"
                      placeholder="Name"
                      value={tag.name}
                      onChange={(e) =>
                        setTag((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="slug"
                      id="slug"
                      className="border rounded px-2 py-2 w-full"
                      placeholder="Slug"
                      value={tag.slug}
                      onChange={(e) =>
                        setTag((prevState) => ({
                          ...prevState,
                          slug: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end p-2 space-x-4 border-t">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red text-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green text-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={processTag}
                  >
                    {tag.id ? 'Update' : 'Save'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TagDialog
