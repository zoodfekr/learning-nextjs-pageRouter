import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>home page</p>
      <Link href={'/posts'}>posts</Link>
    </div>
  );
}
