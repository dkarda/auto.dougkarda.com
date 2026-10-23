import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader title="Page not found" description="That route is not in the shop yet." />
      <Link to="/" className="text-amber-400 hover:text-amber-300">
        Back home
      </Link>
    </main>
  );
}
