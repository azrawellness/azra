import { Dialog } from '@headlessui/react'

const VideoModal = ({ isOpen, closeDialog }) => {
  return (
    <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-full max-w-3xl h-48 lg:h-128 rounded bg-white border-4 border-primary">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XMcab1MFaLc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default VideoModal
