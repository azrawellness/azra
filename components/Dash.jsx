const Dash = ({ width = 'w-10', border = 'border-2', hidden = true }) => {
  return (
    <hr className={`${hidden ? 'hidden' : ''} lg:flex ${width} ${border}`} />
  )
}

export default Dash
