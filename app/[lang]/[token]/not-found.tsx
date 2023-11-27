import Link from 'next/link'
import { Item, lang } from "../../lib/lang";
import { NFound } from '../../lib/NFound';

export default function NotFound({ params }: { params: { lang: keyof Item } }) {
  return <NFound />;
}