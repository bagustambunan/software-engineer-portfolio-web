import { useEffect } from "react";

export default function PageTitle({ title, description }: { title: string, description?: string }) {
  useEffect(() => {
    window.document.title = `${title} | @bagustambunan`;
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}