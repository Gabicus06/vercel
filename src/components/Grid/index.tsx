import style from './index.module.css'

const grid = ({ children }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 px-0">
      {children}
    </div>
  )
}

export default grid