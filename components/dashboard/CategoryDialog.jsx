import { Dialog, Transition, Switch } from '@headlessui/react'
import { Fragment } from 'react'

const CategoryDialog = ({
  title,
  show,
  setShow,
  category,
  setCategory,
  processCategory,
}) => {
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
                <Dialog.Description>
                  <div className="px-4 py-6 grid grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="border rounded px-2 py-2 w-full"
                        placeholder="Name"
                        value={category.name}
                        onChange={(e) =>
                          setCategory((prevState) => ({
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
                        value={category.slug}
                        onChange={(e) =>
                          setCategory((prevState) => ({
                            ...prevState,
                            slug: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex justify-end">
                      <Switch.Group>
                        <div className="flex items-center">
                          <Switch.Label className="mr-4">Status</Switch.Label>
                          <Switch
                            checked={category.status}
                            onChange={(e) =>
                              setCategory((prevState) => ({
                                ...prevState,
                                status: e,
                              }))
                            }
                            className={`${
                              category.status ? 'bg-green' : 'bg-red'
                            }
                          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className={`${
                                category.status
                                  ? 'translate-x-9'
                                  : 'translate-x-0'
                              }
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                          </Switch>
                        </div>
                      </Switch.Group>
                    </div>
                  </div>
                </Dialog.Description>
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
                    onClick={() => processCategory}
                  >
                    Save
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

export default CategoryDialog
