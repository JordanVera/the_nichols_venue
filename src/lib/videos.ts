export type VideoItem = {
  id: number;
  title: string;
  type: "youtube" | "mp4" | "vimeo";
  youtubeId?: string;
  vimeoId?: string;
  src?: string;
  poster?: string;
};

export type EmbedItem = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export const VIDEOS_DATA: VideoItem[] = [];

export const EMBEDS_DATA: EmbedItem[] = [
  {
    id: 1,
    title: 'Schedule a Tour',
    type: 'external',
    url: 'https://thenicholsvenue.com/schedule-a-tour',
  },
];
