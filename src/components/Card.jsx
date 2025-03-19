export default function Card({ imgUri, title, children }) {

  return (
    <div className="w-2xs rounded-xl bg-slate-200 p-4">
      <img className="rounded-lg" src={imgUri} alt="" />

      <div>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
