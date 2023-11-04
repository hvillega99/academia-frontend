import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        <Link to="/">
          <h1 className="font-bold text-3xl mb-4">Academia App</h1>
        </Link>
    </div>
  )
}
