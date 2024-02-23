import CustomLink from "@/components/custom-link"
import packageJSON from "../package.json"
import Link from 'next/link';
import data from '../data.json';    
import Carduno from "@/components/carduno";
export default function Index() {
  return (
    <div className="space-y-2">
      <Carduno/>
    </div>
  )
}
