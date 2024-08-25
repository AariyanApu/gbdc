export default function DeleteTextComponent({ item, deletePost }: any) {
  return (
    <div
      key={item.id}
      className="flex flex-row items-center justify-start gap-x-8 p-4"
    >
      <p>{item.title.substring(0, 60)}</p>
      <button
        onClick={() => deletePost(item.slug)}
        className="btn btn-outline btn-error btn-sm "
      >
        Delete
      </button>
    </div>
  )
}
