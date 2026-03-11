import { Helmet } from 'react-helmet-async';
import { useParams, useSearchParams } from 'react-router-dom';
import { useBlogTagBySlug } from '../../../hooks/blog-tags/useBlogTagBySlug';
import { useBlogsByTag } from '../../../hooks/blog/useBlogsByTag';
import PrimarySection from '../../../components/PrimarySection';
import Container from '../../../components/Container';
import Loading from '../../../components/Loading';
import BlogCard from '../../../components/BlogCard';
import PageHero from '../../../components/Sections/PageHero';

export default function BlogTag() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 10) || 1;
  const { tag, isLoadingBlogTag, isErrorBlogTag } = useBlogTagBySlug(slug);
  const { blogs, pagination, isLoadingBlogsByTag } = useBlogsByTag(tag?.name, {
    page: currentPage,
    limit: 9,
  });

  if (isLoadingBlogTag || isLoadingBlogsByTag) return <Loading />;

  if (isErrorBlogTag || !tag) {
    return (
      <PrimarySection className="py-10 bg-gray-50">
        <Container>
          <p className="text-center text-gray-600">We couldn’t find that blog tag.</p>
        </Container>
      </PrimarySection>
    );
  }

  const title = tag.metaTitle || `${tag.name} | Blog Tag | Dummy Ticket 365`;
  const description =
    tag.metaDescription ||
    tag.description ||
    `Explore published blog posts under the ${tag.name} tag.`;
  const canonical = `https://www.dummyticket365.com/blog/tag/${tag.slug || tag._id}`;

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Tags', path: '/blog/tags' },
    { label: tag.name, path: `/blog/tag/${tag.slug || tag._id}` },
  ];

  const handlePageChange = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
      </Helmet>

      <PageHero title={tag.name} subtitle={tag.description || 'Published posts under this tag.'} paths={breadcrumb} />

      <PrimarySection className="py-10 lg:py-14">
        <Container>
          {blogs.length === 0 ? (
            <p className="text-gray-600">No published posts found for this tag yet.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((post) => (
                  <BlogCard key={post._id} blog={post} />
                ))}
              </div>
              <PaginationBar
                pagination={pagination}
                currentPage={pagination?.page || currentPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
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
