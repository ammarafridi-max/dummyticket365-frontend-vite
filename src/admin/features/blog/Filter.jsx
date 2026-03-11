import { useEffect, useMemo, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import { useBlogTags } from '../../../hooks/blog-tags/useBlogTags';
import { useUsers } from '../../../hooks/users/useUsers';
import { useOutsideClick } from '../../../hooks/general/useOutsideClick';

export default function Filter() {
  const [activeFilterBox, setActiveFilterBox] = useState('');
  const { tags = [] } = useBlogTags();
  const { users = [] } = useUsers();

  const tagOptions = useMemo(
    () => [{ label: 'All', value: 'all' }, ...tags.map((tag) => ({ label: tag.name, value: tag.name }))],
    [tags],
  );

  const authorOptions = useMemo(
    () => [{ label: 'All', value: 'all' }, ...users.map((user) => ({ label: user.name, value: user._id }))],
    [users],
  );

  return (
    <div className="mb-5 flex flex-wrap justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        <FilterTemplate
          id="status"
          title="Status"
          options={[
            { label: 'All', value: 'all' },
            { label: 'Draft', value: 'draft' },
            { label: 'Scheduled', value: 'scheduled' },
            { label: 'Published', value: 'published' },
          ]}
          searchParamsName="status"
          activeFilterBox={activeFilterBox}
          setActiveFilterBox={setActiveFilterBox}
        />
        <FilterTemplate
          id="tag"
          title="Tag"
          options={tagOptions}
          searchParamsName="tag"
          activeFilterBox={activeFilterBox}
          setActiveFilterBox={setActiveFilterBox}
        />
        <FilterTemplate
          id="author"
          title="Author"
          options={authorOptions}
          searchParamsName="author"
          activeFilterBox={activeFilterBox}
          setActiveFilterBox={setActiveFilterBox}
        />
      </div>
      <Search />
    </div>
  );
}

function FilterTemplate({ id, title, options, searchParamsName, activeFilterBox, setActiveFilterBox }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [boxTitle, setBoxTitle] = useState(title);
  const isOpen = activeFilterBox === id;
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (isOpen) setActiveFilterBox('');
  });

  useEffect(() => {
    const paramValue = searchParams.get(searchParamsName);

    if (!paramValue || !options.some((option) => option.value === paramValue)) {
      const defaultOption = options[0];
      const next = new URLSearchParams(searchParams);
      next.set(searchParamsName, defaultOption.value);
      setSearchParams(next);
      setBoxTitle(`${title}: ${defaultOption.label}`);
      return;
    }

    const selected = options.find((option) => option.value === paramValue);
    setBoxTitle(`${title}: ${selected?.label || paramValue}`);
  }, [options, searchParams, searchParamsName, setSearchParams, title]);

  return (
    <div className="relative w-fit" ref={ref}>
      <button
        type="button"
        className="inline-flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 shadow-sm transition-colors hover:bg-gray-100 md:text-sm"
        onClick={() => setActiveFilterBox(isOpen ? '' : id)}
      >
        {boxTitle}
      </button>
      {isOpen && (
        <div className="absolute z-20 mt-2 w-full min-w-[200px] overflow-hidden rounded-sm bg-white shadow-sm">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full cursor-pointer px-3 py-1.5 text-left text-xs duration-300 hover:bg-primary-50 md:text-sm"
              onClick={() => {
                const next = new URLSearchParams(searchParams);
                if (String(option.value).toLowerCase() === 'all') {
                  next.delete(searchParamsName);
                } else {
                  next.set(searchParamsName, option.value);
                }
                next.set('page', '1');
                setSearchParams(next);
                setActiveFilterBox('');
                setBoxTitle(`${title}: ${option.label}`);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        type="text"
        className="min-w-[300px] cursor-pointer rounded-md bg-white px-5 py-1.5 text-[14px] outline-0 shadow-sm"
        value={searchQuery}
        onChange={(event) => {
          const next = new URLSearchParams(searchParams);
          const value = event.target.value;
          setSearchQuery(value);

          if (!value.trim()) {
            next.delete('search');
          } else {
            next.set('search', value);
          }

          next.set('page', '1');
          setSearchParams(next);
        }}
      />
      {searchParams.get('search') && (
        <MdClose
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-black"
          onClick={() => {
            const next = new URLSearchParams(searchParams);
            next.delete('search');
            next.set('page', '1');
            setSearchParams(next);
            setSearchQuery('');
          }}
        />
      )}
    </div>
  );
}
