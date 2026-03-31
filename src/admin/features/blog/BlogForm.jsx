import { capitalCase } from 'change-case';
import { format } from 'date-fns';
import { useFieldArray } from 'react-hook-form';
import FormRow from '../../../components/FormElements/FormRow';
import Input from '../../../components/FormElements/Input';
import Textarea from '../../../components/FormElements/TextArea';
import Label from '../../../components/FormElements/Label';
import Select from '../../../components/FormElements/Select';
import CheckboxGroup from '../../../components/FormElements/CheckboxGroup';
import UploadFile from '../../../components/FormElements/UploadFile';
import TinyEditor from '../../../components/TinyEditor';
import PrimaryButton from '../../../components/PrimaryButton';

export default function BlogForm({
  blog,
  editorRef,
  register,
  control,
  watch,
  handleSubmit,
  onSubmit,
  isLoading = false,
  readOnly = false,
  showSubmitButton = false,
  submitButtonLabel = 'Save',
  tagOptions = [],
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'faqs',
  });
  const metaDescription = watch?.('metaDescription') || '';
  const metaDescriptionLength = metaDescription.length;
  const isMetaDescriptionTooLong = metaDescriptionLength > 160;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="bg-white rounded-xl shadow p-8 space-y-8">
        {blog && (
          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-gray-800 pb-2">Post Overview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <Info label="Created" value={format(blog.createdAt, 'dd MMM yyyy • hh:mm aa')} />
              <Info label="Updated" value={format(blog.updatedAt, 'dd MMM yyyy • hh:mm aa')} />
              <Info
                label="Published"
                value={blog.publishedAt ? format(blog.publishedAt, 'dd MMM yyyy • hh:mm aa') : '-'}
              />
              <Info
                label="Scheduled"
                value={blog.scheduledAt ? format(blog.scheduledAt, 'dd MMM yyyy • hh:mm aa') : '-'}
              />
              <Info label="Status" value={capitalCase(blog.status || '-')} />
            </div>
          </section>
        )}

        <section className="space-y-4">
          <h2 className="text-2xl font-normal text-gray-800 pb-2">SEO Settings</h2>

          <FormRow>
            <Label>Meta Title</Label>
            <Input type="text" {...register('metaTitle')} readOnly={readOnly} disabled={readOnly} />
          </FormRow>

          <FormRow>
            <Label>Meta Description</Label>
            <div>
              <Textarea
                rows={2}
                maxLength={160}
                {...register('metaDescription')}
                readOnly={readOnly}
                disabled={readOnly}
              />
              <p
                className={`mt-1 text-xs ${isMetaDescriptionTooLong ? 'text-red-600' : 'text-gray-500'}`}
              >
                {metaDescriptionLength} / 160 characters
              </p>
            </div>
          </FormRow>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-normal text-gray-800 pb-2">Blog Details</h2>

          <FormRow>
            <Label>Title</Label>
            <Input type="text" {...register('title')} readOnly={readOnly} disabled={readOnly} />
          </FormRow>

          <FormRow>
            <Label>Slug</Label>
            <Input type="text" {...register('slug')} readOnly={readOnly} disabled={readOnly} />
          </FormRow>

          <FormRow>
            <Label>Cover Image</Label>
            <div className="flex flex-col gap-3 w-full">
              {blog?.coverImageUrl && (
                <div className="relative">
                  <img
                    src={blog.coverImageUrl}
                    className="w-full max-h-60 object-cover rounded-lg border"
                    alt="Cover"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload a new image to replace the current one
                  </p>
                </div>
              )}
              <UploadFile {...register('coverImage')} disabled={readOnly} />
            </div>
          </FormRow>

          <FormRow>
            <Label>Excerpt</Label>
            <Textarea
              rows={2}
              {...register('excerpt')}
              placeholder="A short summary of the blog..."
              readOnly={readOnly}
              disabled={readOnly}
            />
          </FormRow>

          <FormRow>
            <Label>Quick Answer</Label>
            <Textarea
              rows={2}
              {...register('quickAnswer')}
              placeholder="A concise answer that appears near the top of the blog post..."
              readOnly={readOnly}
              disabled={readOnly}
            />
          </FormRow>

          <FormRow>
            <Label>Status</Label>
            <Select {...register('status')} disabled={readOnly}>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="published">Published</option>
            </Select>
          </FormRow>

          {watch?.('status') === 'scheduled' && (
            <FormRow>
              <Label>Schedule Date & Time</Label>
              <Input type="datetime-local" {...register('scheduledAt')} disabled={readOnly} />
            </FormRow>
          )}

          <FormRow>
            <Label>Tags</Label>
            <CheckboxGroup
              name="tags"
              control={control}
              disabled={readOnly}
              options={tagOptions}
            />
          </FormRow>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-normal text-gray-800 pb-2">Content</h2>
          <TinyEditor editorRef={editorRef} initialValue={blog?.content} disabled={readOnly} />
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 pb-2">
            <h2 className="text-2xl font-normal text-gray-800">FAQs</h2>
            {!readOnly && (
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-accent-500 px-4 py-2 text-sm text-accent-600 transition-colors hover:bg-accent-50"
                onClick={() => append({ question: '', answer: '' })}
              >
                Add FAQ
              </button>
            )}
          </div>

          {fields.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-5 py-4 text-sm font-light text-gray-500">
              No FAQs added yet.
            </div>
          ) : (
            <div className="space-y-5">
              {fields.map((field, index) => (
                <div key={field.id} className="rounded-xl border border-gray-200 p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-gray-700">FAQ {index + 1}</p>
                    {!readOnly && (
                      <button
                        type="button"
                        className="text-sm text-red-600 transition-colors hover:text-red-700"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Question</Label>
                      <Input
                        type="text"
                        {...register(`faqs.${index}.question`)}
                        readOnly={readOnly}
                        disabled={readOnly}
                      />
                    </div>

                    <div>
                      <Label>Answer</Label>
                      <Textarea
                        rows={4}
                        {...register(`faqs.${index}.answer`)}
                        readOnly={readOnly}
                        disabled={readOnly}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {showSubmitButton && !readOnly && (
          <div className="flex justify-end pt-2">
            <PrimaryButton type="submit" size="large" disabled={isLoading}>
              {submitButtonLabel}
            </PrimaryButton>
          </div>
        )}
      </div>
    </form>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="font-extralight text-sm text-gray-500">{label}</span>
      <span className="font-light text-lg truncate">{value || '-'}</span>
    </div>
  );
}
