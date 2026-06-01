import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-name">Anshuman Bhadauria</p>
          <p className="site-footer-copy">Writing and case studies on agentic AI, RAG quality, evaluation, and enterprise delivery.</p>
        </div>

        <nav className="site-footer-links" aria-label="Footer">
          <Link href="/blogs">Blog</Link>
          <Link href="/projects">Case Studies</Link>
          <Link href="/about">About me</Link>
          <a href="mailto:anshumanatwork@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/anshuman-bhadauria-a295b284" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="site-footer-bottom">
        © {new Date().getFullYear()} Anshuman Bhadauria. All rights reserved.
      </div>
    </footer>
  );
}
