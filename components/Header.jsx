const Header = ({ title }) => {
  return (
    <div className="w-full bg-secondary flex items-center justify-center py-10 lg:py-32">
      <div className="text-5xl text-gray font-title font-semibold shadow p-4 bg-white/10 rounded">
        {title}
      </div>
    </div>
  )
}

export default Header
