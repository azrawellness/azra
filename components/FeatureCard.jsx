const FeatureCard = ({ title, desscription }) => {
  return (
    <div className="bg-white shadow py-10 px-8">
      <div className="text-center font-title text-2xl mb-4">{title}</div>
      <div className="text-center">{desscription}</div>
    </div>
  )
}

export default FeatureCard
