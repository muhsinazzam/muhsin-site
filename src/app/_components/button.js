import Link from 'next/link';
export default function Button(){
    return (
        <Link href='/about'>
            <button className='w-10 h-10'>ke halaman kedua</button>
        </Link>
    );
}