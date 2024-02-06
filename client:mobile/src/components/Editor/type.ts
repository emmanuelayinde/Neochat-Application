export type mediaType = "photo" | "video";

export interface MediaEditorProps {
  for: mediaType;
  media: string | Buffer;
}
