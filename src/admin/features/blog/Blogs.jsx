import { Helmet } from 'react-helmet-async';
import { FaCopy, FaPlus } from 'react-icons/fa6';
import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useAdminBlogs } from '../../../hooks/blog/useAdminBlogs';
import { useDuplicateBlog } from '../../../hooks/blog/useDuplicateBlog';
import { useBlogTags } from '../../../hooks/blog-tags/useBlogTags';
import Loading from '../../../components/Loading';
import WarningPill from '../../../components/WarningPill';
import SuccessPill from '../../../components/SuccessPill';
import NeutralPill from '../../../components/NeutralPill';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeading from '../../../components/PageHeading';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/AuthContext';
import Filter from './Filter';

function formatTableDate(value) {
  return value ? format(new Date(value), 'dd MMM yyyy') : '-';
}

export default function Blogs() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 10) || 1;
  const status = searchParams.get('status') || 'all';
  const tag = searchParams.get('tag') || 'all';
  const author = searchParams.get('author') || 'all';
  const search = searchParams.get('search') || '';
  const { blogs, pagination, isLoadingBlogs, isErrorBlogs } = useAdminBlogs({
    page: currentPage,
    limit: 10,
    status,
    tag,
    author,
    search,
  });
  const { tags } = useBlogTags();
  const { duplicateBlog, isDuplicatingBlog } = useDuplicateBlog();
  const { isAdmin } = useAuth();
  const tagIdByName = useMemo(
    () => new Map((tags || []).map((tag) => [String(tag.name || '').toLowerCase(), tag._id])),
    [tags],
  );

  const handlePageChange = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <Breadcrumb
        paths={[
          { label: 'Home', href: '/' },
          { label: 'Blogs', href: '/blogs' },
        ]}
      />
      <div className="mb-4 flex items-center justify-between gap-3">
        <PageHeading>Blogs</PageHeading>
        {isAdmin && (
          <Link
            className="inline-flex items-center gap-2 rounded-lg border border-accent-500 bg-accent-500 px-4 py-2 text-sm text-white transition-colors hover:bg-accent-600"
            to="/blogs/create"
          >
            <FaPlus />
            Create Blog Post
          </Link>
        )}
      </div>
      <Filter />
      {isLoadingBlogs && <Loading />}
      {isErrorBlogs && <p>Error loading blogs</p>}
      {blogs && (
        <Table $columntemplate="5fr 2fr 1.5fr 1.5fr 1.5fr 1.5fr">
          <Table.Head>
            <Table.Heading>Title</Table.Heading>
            <Table.Heading textAlign="left">Author</Table.Heading>
            <Table.Heading textAlign="left">Created</Table.Heading>
            <Table.Heading textAlign="left">Published</Table.Heading>
            <Table.Heading textAlign="left">Updated</Table.Heading>
            <Table.Heading textAlign="center">Status</Table.Heading>
          </Table.Head>
          {blogs?.map((blog) => (
            <Table.Row key={blog?._id} href={`/blogs/${blog?._id}`}>
              <Table.Item>
                <span className="text-[17px] mb-1">{blog?.title}</span>
                <span className="mt-1 flex flex-wrap gap-2">
                  {blog?.tags?.length ? (
                    blog.tags.map((tagName) => {
                      const tagId = tagIdByName.get(String(tagName || '').toLowerCase());
                      return (
                        <button
                          key={`${blog?._id}-${tagName}`}
                          type="button"
                          disabled={!tagId}
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            if (tagId) navigate(`/blog-tags/${tagId}`);
                          }}
                          className="text-xs font-medium text-accent-700 underline-offset-2 hover:underline disabled:cursor-default disabled:no-underline disabled:opacity-70"
                        >
                          {tagName}
                        </button>
                      );
                    })
                  ) : (
                    <span className="text-xs font-light text-gray-500">-</span>
                  )}
                </span>
                <span className="mt-2">
                  <Table.DuplicateLink
                    isDuplicating={isDuplicatingBlog}
                    onClick={() => duplicateBlog(blog?._id)}
                  >
                    <FaCopy />
                  </Table.DuplicateLink>
                </span>
              </Table.Item>
              <Table.Item>{blog?.author?.name || '-'}</Table.Item>
              <Table.Item>{formatTableDate(blog?.createdAt)}</Table.Item>
              <Table.Item>{formatTableDate(blog?.publishedAt)}</Table.Item>
              <Table.Item>{formatTableDate(blog?.updatedAt)}</Table.Item>
              <Table.Item>
                {blog?.status === 'draft' && (
                  <WarningPill>{blog?.status?.toUpperCase()}</WarningPill>
                )}
                {blog?.status === 'scheduled' && (
                  <NeutralPill>{blog?.status?.toUpperCase()}</NeutralPill>
                )}
                {blog?.status === 'published' && (
                  <SuccessPill>{blog?.status?.toUpperCase()}</SuccessPill>
                )}
              </Table.Item>
            </Table.Row>
          ))}
          <Table.Footer>
            <div className="flex justify-between gap-4">
              <div>
                {pagination ? (
                  <p>
                    Showing {pagination.total > 0 ? (currentPage - 1) * pagination.limit + 1 : 0} -{' '}
                    {pagination.total > 0
                      ? Math.min(currentPage * pagination.limit, pagination.total)
                      : 0}{' '}
                    of {pagination.total} results
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <PageButton
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!pagination?.hasPrevPage}
                >
                  Previous Page
                </PageButton>
                <span className="font-extralight">
                  {currentPage} / {pagination?.totalPages || 1}
                </span>
                <PageButton
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!pagination?.hasNextPage}
                >
                  Next Page
                </PageButton>
              </div>
            </div>
          </Table.Footer>
        </Table>
      )}
    </>
  );
}

function PageButton({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-55 md:text-sm"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
