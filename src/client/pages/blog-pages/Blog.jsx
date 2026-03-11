import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  buildBlog,
  buildGraph,
  buildOrganization,
  buildWebPage,
  buildWebsite,
} from '../../../lib/schema';
import { useBlogs } from '../../../hooks/blog/useBlogs';
import PrimarySection from '../../../components/PrimarySection';
import Container from '../../../components/Container';
import Loading from '../../../components/Loading';
import BlogCard from '../../../components/BlogCard';
import PageHero from '../../../components/Sections/PageHero';

const pageData = {
  meta: {
    title: 'Blog | Dummy Ticket 365',
    description:
      'Dummy tickets are flight reservations travelers use for various purposes, including visa applications. Book yours with Dummy Ticket 365. Starting from USD 49.',
    canonical: 'https://www.dummyticket365.com/blog',
  },
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ],
  sections: {
    hero: {
      title: 'Blog',
      subtitle:
        'Our blog covers everything you need to know about dummy tickets, including how they work, when to use them, and why they are commonly required for visa and immigration purposes. We also share tips, updates, and best practices to help you avoid mistakes and apply with confidence.',
    },
  },
};

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 10) || 1;
  const { blogs, pagination, isLoadingBlogs } = useBlogs({ page: currentPage, limit: 9 });
  const schema = buildGraph([
    buildOrganization(),
    buildWebsite(),
    buildWebPage({
      canonical: pageData.meta.canonical,
      title: pageData.meta.title,
      description: pageData.meta.description,
    }),
    buildBlog({
      canonical: pageData.meta.canonical,
      title: pageData.meta.title,
      description: pageData.meta.description,
    }),
  ]);

  if (isLoadingBlogs) return <Loading />;

  const handlePageChange = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <link rel="canonical" href={pageData.meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={pageData.meta.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <PageHero
        title={pageData?.sections?.hero?.title}
        subtitle={pageData?.sections?.hero?.subtitle}
        paths={pageData.breadcrumb}
      />
      <PrimarySection>
        <Container>
          <div className="block items-start gap-7 lg:grid lg:grid-cols-3 lg:gap-7 py-10 lg:py-15">
            {blogs?.map((post) => (
              <BlogCard key={post._id} blog={post} />
            ))}
          </div>
          <PaginationBar
            pagination={pagination}
            currentPage={pagination?.page || currentPage}
            onPageChange={handlePageChange}
          />
        </Container>
      </PrimarySection>
    </>
  );
}

function PaginationBar({ pagination, currentPage, onPageChange }) {
  if (!pagination || pagination.totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
      <p className="text-sm text-gray-600">
        Showing {pagination.total > 0 ? (currentPage - 1) * pagination.limit + 1 : 0} -{' '}
        {pagination.total > 0 ? Math.min(currentPage * pagination.limit, pagination.total) : 0} of{' '}
        {pagination.total}
      </p>
      <div className="flex items-center gap-3">
        <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={!pagination.hasPrevPage}>
          Previous
        </PageButton>
        <span className="text-sm text-gray-600">
          {currentPage} / {pagination.totalPages}
        </span>
        <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={!pagination.hasNextPage}>
          Next
        </PageButton>
      </div>
    </div>
  );
}

function PageButton({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}
