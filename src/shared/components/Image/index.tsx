import { getVersion } from "../../utils/url";

export default function Image({
  src,
  ...props
}: {
  src?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const version = getVersion();
  return <img src={`${version === "v1" ? "../" : ""}${src}`} {...props} />;
}
