import type {MetadataRoute} from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/api/','/funnel','/angebot']},sitemap:'https://pawtrust.de/sitemap.xml'}}
