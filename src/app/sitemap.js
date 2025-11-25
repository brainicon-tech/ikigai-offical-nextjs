import {MetadataRoute} from 'next';

export const dynamic = 'force-static';
export default function sitemap(){
  const baseUrl = "www.ikigaibd.com";
  return [
    { url: baseUrl, 
    lastModified: new Date(), 
    changeFrequency: "weekly", 
    priority: 1,
  },
  { url: `$(baseUrl)/about`, 
    lastModified: new Date(), 
    changeFrequency: "mothly", 
    priority: 0.8,},
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curriculum`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/activities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}