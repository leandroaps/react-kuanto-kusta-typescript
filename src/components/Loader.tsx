import '../styles/Loading.scss';

const Loader: React.FC = () => {
  return (
    <div className="overlay">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
